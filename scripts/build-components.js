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
const { isProdEnv, getInputs, pascalToKebab } = require("./utils.js");

/**
 * @param {string} componentName
 */
function getRollupConfig(componentName) {
	const outDirName = pascalToKebab(componentName);
	const viteConfig = defineConfig({
		publicDir: false,
		root: path.resolve(__dirname, ".."),
		clearScreen: false,
		mode: isProdEnv ? "production" : "development",
		build: {
			sourcemap: true,
			...(!isProdEnv ? { minify: false } : {}),
			lib: {
				formats: ["es"],
				entry: `${INPUT_DIR}/${componentName}/${componentName}.svelte`,
			},
			rollupOptions: {
				output: {
					format: "es",
					dir: `${OUTPUT_DIR}/${outDirName}/`,
					entryFileNames: "app.js",
					assetFileNames: "app.css",
				},
			},
			outDir: `${OUTPUT_DIR}/${outDirName}/`,
		},
		plugins: [svelte()],
	});
	return viteConfig;
}

async function buildBaseElements(inputs) {
	await Promise.all(
		inputs.map((elem) => getRollupConfig(elem)).map((conf) => build(conf)),
	);
}

const inputs = getInputs(INPUT_DIR, /^([A-Z]\w*[A-Z]\w*)$/);

console.log({ inputs });
buildBaseElements(inputs);
