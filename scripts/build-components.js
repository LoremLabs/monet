// @ts-check
const path = require("path");
const { defineConfig, build } = require("vite");
const svelte = require("@sveltejs/vite-plugin-svelte").default;
const { isProdEnv, getInputs } = require("./utils.js");

/**
 * @param {string} componentName
 */
function getRollupConfig(componentName) {
	const viteConfig = defineConfig({
		root: path.resolve(__dirname, ".."),
		clearScreen: false,
		mode: isProdEnv ? "production" : "development",
		build: {
			sourcemap: true,
			...(!isProdEnv ? { minify: false } : {}),
			lib: {
				formats: ["es"],
				entry: `src/elements/${componentName}.svelte`,
				fileName: "script",
			},
			outDir: `dist/components/${componentName}/`,
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
	"src/elements/",
	/^([A-Z]\w*[A-Z]\w*)\.svelte$/,
	process.env.COMPONENT,
);

console.log({ inputs });
buildComponents(inputs);
