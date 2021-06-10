// @ts-check
// Run this with rollup.
const path = require("path");
const alias = require("@rollup/plugin-alias");
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
		input: `src/elements/${elementName}.js`,
		output: {
			sourcemap: true,
			format: "iife",
			file: `dist/elements/${elementName}.js`,
		},
		plugins: [
			// @ts-expect-error
			sourcemaps(),
			// @ts-expect-error
			alias({
				entries: {
					"@components": path.join(__dirname, "../dist/components"),
				},
			}),
			// @ts-expect-error
			css(),
			isProdEnv && terser(),
			sizes({ details: true }),
		],
	};
}

const inputs = getInputs(
	"src/elements/",
	/^(\w+-\w+)\.js$/,
	process.env.ELEMENT,
).concat(["monet"]);
console.log({ inputs });

module.exports = inputs.map((elem) => getRollupConfig(elem));
