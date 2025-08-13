import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	assetsInclude: [
		'node_modules/@loremlabs/monetization-capability-api/',
		'node_modules/@loremlabs/monet/',
	],
	optimizeDeps: {
		include: ['highlight.js/lib/core'],
	},
});