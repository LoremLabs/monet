const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const { isProdEnv } = require("./scripts/utils.js");

module.exports = {
	plugins: [
		tailwindcss,
		autoprefixer,
		isProdEnv && cssnano({ preset: "default" }),
	],
};
