import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import svelteStatic from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: svelteStatic()
	},
};

export default config;
