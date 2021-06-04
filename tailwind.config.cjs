const colors = require('tailwindcss/colors');

module.exports = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {
			colors: {
                theme: colors.emerald
            }
		},
	},
	plugins: [],
};

