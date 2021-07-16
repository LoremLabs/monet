import App from "@elements/MonetPref/script.es.js";
import css from "@elements/MonetPref/style.css";

const optionsMap = new Map([
	[
		"webmonetization/*",
		{ title: "WebMonetization", description: "Streaming micropayments." },
	],
	["ads/*", { title: "Advertisements", description: "All advertisements." }],
	[
		"subscription/*",
		{ title: "Subscription", description: "Monthly subscription." },
	],
]);

// TODO: use a WeakMap
let app;
let shadowRoot;
let onCapabilityChange = () => {
	const options = getOptions();
	app?.$set({ options });
	updateUserPreferences(options);
};
class MonetPref extends HTMLElement {
	constructor() {
		super();
		shadowRoot = this.attachShadow({ mode: "closed" });
	}

	connectedCallback() {
		const style = document.createElement("style");
		style.textContent = css;
		shadowRoot.append(style);

		const props = { options: getOptions() };
		updateUserPreferences(props.options);
		app = new App({ target: shadowRoot, props });
		app.onChange = (detail) => {
			this.dispatchEvent(new CustomEvent("change", { detail }));
			updateUserPreferences(app.options);
		};

		// @ts-expect-error
		const mon = window.monetization;
		if (!mon) return;
		mon.capabilities?.addEventListener("change", onCapabilityChange);
	}

	disconnectedCallback() {
		app = null;
		shadowRoot = null;

		// @ts-expect-error
		const mon = window.monetization;
		if (!mon) return;
		mon.capabilities?.removeEventListener("change", onCapabilityChange);
	}

	get options() {
		return app?.options ?? [];
	}

	/**
	 *
	 * @param {string} capability
	 * @param {string} title
	 * @param {string} [description]
	 */
	config(capability, title, description) {
		optionsMap.set(capability, { title, description });
		const options = getOptions();
		const option = options.find((opt) => opt.id === capability);
		if (option) {
			Object.assign(option, { title, description });
			app.$set({ options: [...options] });
		}
	}
}

function updateUserPreferences(options) {
	// @ts-expect-error
	const userPreferences = window.monetization?.userPreferences;
	if (!userPreferences) return;
	const newPreferences = { allow: [], deny: [] };
	for (const { id: capability, enabled } of options) {
		newPreferences[enabled ? "allow" : "deny"].push(capability);
	}
	userPreferences.update(() => newPreferences);
}

/**
 * @returns {{ id: string, title?: string, description?: string, enabled: boolean }[]}
 */
function getOptions() {
	// @ts-expect-error
	const mon = window.monetization;
	if (!mon) return [];
	const capabilities = mon.capabilities?.list() ?? [];
	return capabilities.map((capability) => {
		const { title, description } = optionsMap.get(capability) ?? {};
		return {
			id: capability,
			title,
			description,
			enabled: !mon.userPreferences.denies(capability),
		};
	});
}

(() => {
	customElements.define("monet-pref", MonetPref);
})();
