// @ts-check
import { terser } from "rollup-plugin-terser";
import { createRequire } from "module";
import { readdirSync } from "fs";

const isProdEnv = !process.env.ROLLUP_WATCH;

/**
 * Get input files from a directory matching a pattern.
 * If a selectedInput is provided, return it.
 * @param {string} dir
 * @param {RegExp} pattern a Regex with a single match group.
 * @param {string} [selectedInput]
 */
function getInputs(dir, pattern, selectedInput) {
	const inputs = readdirSync(dir)
		.filter((name) => pattern.test(name))
		.map((name) => name.match(pattern)[1]);

	if (!selectedInput) {
		return inputs;
	}

	if (!inputs.includes(selectedInput)) {
		throw new Error(`Unknown component: ${selectedInput}`);
	}
	return [selectedInput];
}

/**
 * @param {string} elementName
 * @returns {import('rollup').RollupOptions}
 */
function getRollupConfig(elementName) {
	return {
		input: `src/${elementName}.js`,
		output: {
			sourcemap: true,
			format: "iife",
			dir: `dist/elements/`,
		},
		plugins: [isProdEnv && terser()],
		watch: {
			clearScreen: false,
		},
	};
}

const inputs = getInputs("src", /^(\w+-\w+)\.js$/, process.env.ELEMENT);
console.log({ inputs });

export default inputs.map((elem) => getRollupConfig(elem));
