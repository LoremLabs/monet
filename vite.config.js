import { defineConfig } from "vite";
import svelte from "@sveltejs/vite-plugin-svelte";
import css from "rollup-plugin-css-only";

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			formats: ["es"],
			entry: "index.html",
			fileName: "script",
		},
		rollupOptions: {
			input: {
				MyElement: "src/MyElement.svelte",
			},
			output: [
				{
					entryFileNames: ({ name }) => `${name}/script.es.js`,
					format: "esm",
				},
			],
		},
		outDir: "dist/components/",
	},
	plugins: [svelte({ emitCss: false }), css({ output: () => {} })],
});
