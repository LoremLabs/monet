const { readdirSync } = require("fs");

const isProdEnv = process.env.NODE_ENV === "production";

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
 * FooBar to foo-bar
 * @param {string} str
 */
function pascalToKebab(str) {
	return str.replace(/(?<!^)([A-Z][a-z]|(?<=[a-z])[A-Z])/, "-$1").toLowerCase();
}

module.exports = {
	isProdEnv,
	getInputs,
	pascalToKebab,
};
