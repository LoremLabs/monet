const preprocess = require("svelte-preprocess");
/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true
		}),
	],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

module.exports = config;
