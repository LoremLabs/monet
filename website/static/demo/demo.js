const BASE_URL = '../node_modules/@loremlabs/monet/dist/components';
const getJS = (component) => `${BASE_URL}/${component}.mjs`;
const getCSS = (component) => `${BASE_URL}/${component}.css`;

const getProps = () => {
	const params = new URLSearchParams(location.hash.slice(1));
	const mapValue = (val) => (/^(true|false)$/.test(val) ? JSON.parse(val) : val);
	const props = Object.fromEntries([...params].map(([key, val]) => [key, mapValue(val)]));
	console.log(props);
	return props;
};

export class CustomElement extends HTMLElement {
	constructor() {
		super();
	}

	async connectedCallback() {
		const component = this.getAttribute('component');
		const shadowRoot = this.attachShadow({ mode: 'open' });
		const { default: App } = await import(getJS(component));

		shadowRoot.append(createStylesheet(component));

		const props = getProps();
		const app = new App({ target: shadowRoot, props });
		this.hidden = !props.type;
		window.addEventListener('hashchange', () => {
			const props = getProps();
			this.hidden = !props.type;
			app.$set(props);
		});
	}
}

function createStylesheet(component) {
	const el = document.createElement('link');
	el.rel = 'stylesheet';
	el.href = getCSS(component);
	return el;
}
