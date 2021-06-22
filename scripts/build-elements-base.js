// @ts-check
/**
 * Components with "monetization" status detected from environment.
 *
 * These are the base for final custom elements.
 */

const INPUT_DIR = "src/elements";
const OUTPUT_DIR = "dist/.elements";

const path = require("path");
const { defineConfig, build } = require("vite");
const { svelte } = require("@sveltejs/vite-plugin-svelte");
const { isProdEnv, getInputs } = require("./utils.js");

/**
 * @param {string} componentName
 */
function getRollupConfig(componentName) {
	const viteConfig = defineConfig({
		root: path.resolve(__dirname, ".."),
		publicDir: false,
		clearScreen: false,
		mode: isProdEnv ? "production" : "development",
		build: {
			sourcemap: true,
			...(!isProdEnv ? { minify: false } : {}),
			lib: {
				formats: ["es"],
				entry: `${INPUT_DIR}/${componentName}.svelte`,
				fileName: "script",
			},
			outDir: `${OUTPUT_DIR}/${componentName}/`,
		},
		plugins: [svelte()],
	});
	return viteConfig;
}

async function buildComponents(inputs) {
	await Promise.all(
		inputs.map((elem) => getRollupConfig(elem)).map((conf) => build(conf)),
	);
}

const inputs = getInputs(
	INPUT_DIR,
	/^([A-Z]\w*[A-Z]\w*)\.svelte$/,
	process.env.COMPONENT,
);

console.log({ inputs });
buildComponents(inputs);
