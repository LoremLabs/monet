const BASE_URL = 'https://unpkg.com/@loremlabs/monet/components';
const getJS = (component) => `${BASE_URL}/${component}/app.js`;
const getCSS = (component) => `${BASE_URL}/${component}/app.css`;

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

		const app = new App({ target: shadowRoot, props: getProps() });
		window.addEventListener('hashchange', () => {
			app.$set(getProps());
		});
	}
}

function createStylesheet(component) {
	const el = document.createElement('link');
	el.rel = 'stylesheet';
	el.href = getCSS(component);
	return el;
}
