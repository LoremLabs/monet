import { defineConfig } from "vite";
import svelte from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			formats: ["es"],
			entry: "src/elements/MyElement.svelte",
			fileName: "script",
		},
		outDir: "dist/components/MyElement/",
	},
	plugins: [svelte()],
});
