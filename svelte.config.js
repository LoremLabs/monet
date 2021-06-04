import preprocess from 'svelte-preprocess';
import svelteStatic from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [preprocess({ postcss: true })],
	kit: {
		adapter: svelteStatic(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
