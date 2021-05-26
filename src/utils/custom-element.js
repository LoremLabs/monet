/**
 * @template T
 * @param {string} name
 * @param {string[]} attributes
 * @param {new (...args: any[]) => T} App
 * @param {string} css
 */
export function init(name, attributes, App, css) {
	// TODO: use a WeakMap
	let app;
	let shadowRoot;

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
			app.$set({ [attr]: newValue });
		}

		connectedCallback() {
			const props = {};
			for (const attr of MyComponent.observedAttributes) {
				if (this.hasAttribute(attr)) {
					props[attr] = this.getAttribute(attr);
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
