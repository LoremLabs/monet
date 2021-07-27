import { throttle } from "throttle-debounce";
type Capabilities = ReturnType<Window["monet"]["capabilities"]["list"]>;

const clamp = (val: number, lower: number, upper: number) => {
	return Math.min(Math.max(lower, val), upper);
};

const isEqual = (a: string[], b: string[]) => {
	if (a.length !== b.length) return false;
	for (let i = 0; i < a.length; i++) {
		if (a[i] !== b[i]) return false;
	}
	return true;
};

class ThrottledListener {
	#intervalId: ReturnType<typeof setInterval> = null;
	#onChange: (value: Capabilities | null) => void;

	constructor(
		onChange: (value: Capabilities | null) => void,
		interval: number,
	) {
		this.#onChange = onChange;
		if (interval > 0) {
			// add some randomness to ensure we clear our pending counter
			interval = Math.round(interval + (Math.random() * interval) / 10);
			this.#intervalId = setInterval(this.update, interval);
		}
	}

	activate() {
		const { capabilities, userPreferences } = window.monet!;
		capabilities.addEventListener("change", this.update);
		userPreferences.addEventListener("change", this.update);
		return this;
	}

	deactivate() {
		const { capabilities, userPreferences } = window.monet!;
		capabilities.removeEventListener("change", this.update);
		userPreferences.removeEventListener("change", this.update);
		if (this.#intervalId !== null) clearInterval(this.#intervalId);
	}

	update = throttle(200, false, () => this.#update(), false);
	async #update() {
		const userSupports = await window.monet!.match({ bypassCache: true });
		const capabilities = userSupports.map(({ capability }) => capability);
		this.#onChange(capabilities);
	}
}

class MonetIf extends HTMLElement {
	#state: "pending" | "visible" | "hidden" = "pending";
	#matchingCapabilities: string[] = [];
	#watcher: ThrottledListener;
	constructor() {
		super();
	}

	static get observedAttributes() {
		return ["supports"];
	}

	get state() {
		return this.#state;
	}

	get activeCapabilities() {
		return this.#matchingCapabilities;
	}

	connectedCallback() {
		if (!window.monet) {
			throw new Error(`window.monet is not defined.`);
		}
		this.attachShadow({ mode: "open" });
		const html = String.raw;
		this.shadowRoot.innerHTML = html`
			<slot hidden></slot>
			<slot hidden name="else">default else</slot>
		`;

		const interval = Number.isInteger(Number(this.getAttribute("interval")))
			? clamp(Number(this.getAttribute("interval")), 2000, 10000)
			: 0;
		this.#watcher = new ThrottledListener(this.#update, interval).activate();
	}

	disconnectedCallback() {
		if (!window.monet) return;
		if (this.#watcher) this.#watcher.deactivate();
	}

	attributeChangedCallback(_attr: string, oldValue: string, newValue: string) {
		if (oldValue === newValue) return;
		if (this.#watcher) this.#watcher.update();
	}

	#update = async (matches: Capabilities) => {
		const websiteWants = this.getAttribute("supports")
			.split(/\s+/)
			.filter((s) => /^[a-z]+\/(\*|[a-z]+$)/.test(s)) as Capabilities;
		const prefs = window.monet!.userPreferences;
		const matchingCapabilities = matches.filter((c1) =>
			websiteWants.some((c2) => prefs.matches(c1, c2) && !prefs.denies(c1)),
		);

		const slots = [...this.shadowRoot.querySelectorAll("slot")];
		const [walledContent, fallbackContent] = slots;
		walledContent.hidden = !matchingCapabilities.length;
		fallbackContent.hidden = !walledContent.hidden;

		if (!isEqual(matchingCapabilities, this.#matchingCapabilities)) {
			this.#matchingCapabilities = matchingCapabilities;
			this.#state = matchingCapabilities.length ? "visible" : "hidden";
			this.dispatchEvent(new CustomEvent("change"));
		}
	};
}

if (!customElements.get("monet-if")) {
	customElements.define("monet-if", MonetIf);
}
