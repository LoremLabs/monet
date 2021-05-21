import path from "path";
import { defineConfig } from "vite";
import svelte from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			formats: ["es"],
			entry: path.resolve(__dirname, "src/MyElement.svelte"),
			fileName: "script",
		},
		outDir: "dist/MyElement",
	},
	plugins: [svelte()],
});
