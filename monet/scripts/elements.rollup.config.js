// @ts-check
/**
 * Rollup config for final Custom Elements (with the "monetization" status being
 * detected from the environment).
 *
 * The result of this is what websites will embed.
 */

const INPUT_DIR = "src/elements";
const OUTPUT_DIR = "dist";

const path = require("path");
const alias = require("@rollup/plugin-alias");
const typescript = require("@rollup/plugin-typescript");
const { terser } = require("rollup-plugin-terser");
const sourcemaps = require("rollup-plugin-sourcemaps");
const sizes = require("rollup-plugin-sizes");
const css = require("rollup-plugin-import-css");
const { isProdEnv, getInputs } = require("./utils.js");

/**
 * @param {string} elementName
 * @returns {import('rollup').RollupOptions}
 */
function getRollupConfig(elementName) {
	return {
		input: `${INPUT_DIR}/${elementName}.ts`,
		output: {
			sourcemap: true,
			format: "iife",
			file: `${OUTPUT_DIR}/${elementName}.js`,
		},
		plugins: [
			// @ts-expect-error
			typescript(),
			// @ts-expect-error
			sourcemaps(),
			// @ts-expect-error
			alias({
				entries: {
					"@elements": path.join(__dirname, "../dist/.elements"),
				},
			}),
			// @ts-expect-error
			css(),
			isProdEnv && terser(),
			sizes({ details: true }),
		],
	};
}

const inputs = getInputs(INPUT_DIR, /^(\w+-\w+)\.ts$/, process.env.ELEMENT);
if (!process.env.ROLLUP_WATCH) {
	inputs.push("monet");
}

console.log({ inputs });

module.exports = inputs.map((elem) => getRollupConfig(elem));
