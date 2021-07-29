// @ts-check
/**
 * Components with "monetization" status set as a prop.
 *
 * These exist mainly for the purpose of demonstration or if someone wants
 * create their own wrapper over them.
 */

const INPUT_DIR = "src/components";
const OUTPUT_DIR = "dist/components";

const path = require("path");
const { defineConfig, build } = require("vite");
const { svelte } = require("@sveltejs/vite-plugin-svelte");
const { isProdEnv, watch, getInputs } = require("./utils.js");

/**
 * @param {string} componentName
 */
function getViteConfig(componentName) {
	const viteConfig = defineConfig({
		publicDir: false,
		root: path.resolve(__dirname, ".."),
		clearScreen: false,
		mode: isProdEnv ? "production" : "development",
		build: {
			emptyOutDir: false,
			watch: watch ? {} : null,
			sourcemap: true,
			...(!isProdEnv ? { minify: false } : {}),
			lib: {
				formats: ["es"],
				entry: `${INPUT_DIR}/${componentName}/${componentName}.svelte`,
			},
			rollupOptions: {
				output: {
					format: "es",
					dir: `${OUTPUT_DIR}/`,
					entryFileNames: `${componentName}.mjs`,
					assetFileNames: `${componentName}.css`,
				},
			},
			outDir: `${OUTPUT_DIR}/`,
		},
		plugins: [svelte()],
	});
	return viteConfig;
}

async function buildBaseElements(inputs) {
	await Promise.all(
		inputs.map((elem) => getViteConfig(elem)).map((conf) => build(conf)),
	);
}

const inputs = getInputs(INPUT_DIR, /^([A-Z]\w*[A-Z]\w*)$/);

console.log({ inputs });
buildBaseElements(inputs);
