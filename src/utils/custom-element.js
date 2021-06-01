/**
 * @template T
 * @param {string} name
 * @param {PropMap} propMap
 * @param {new (...args: any[]) => T} App
 * @param {string} css
 */
export function init(name, propMap, App, css) {
	// TODO: use a WeakMap
	let app;
	let shadowRoot;
	const attributes = Object.keys(propMap);
	/**
	 * @param {string} attr
	 * @param {string} val
	 * @returns {[string, unknown]}
	 */
	const getProp = (attr, val) => {
		const result = propMap[attr](val);
		return !Array.isArray(result) ? [attr, result] : [result[0], result[1]];
	};

	class MyComponent extends HTMLElement {
		static get observedAttributes() {
			return attributes;
		}

		constructor() {
			super();
			shadowRoot = this.attachShadow({ mode: "closed" });
		}

		attributeChangedCallback(attr, oldValue, newValue) {
			if (!app) return;
			if (oldValue === newValue) return;
			const [prop, value] = getProp(attr, newValue);
			app.$set({ [prop]: value });
		}

		connectedCallback() {
			const props = {};
			for (const attr of MyComponent.observedAttributes) {
				if (this.hasAttribute(attr)) {
					const [prop, value] = getProp(attr, this.getAttribute(attr));
					props[prop] = value;
				}
			}

			const style = document.createElement("style");
			style.textContent = css;
			shadowRoot.append(style);

			app = new App({ target: shadowRoot, props });
		}
	}

	customElements.define(name, MyComponent);
}
