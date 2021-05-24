const { tailwindExtractor } = require("tailwindcss/lib/lib/purgeUnusedStyles");

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig} */
module.exports = {
	corePlugins: {
		preflight: false,
	},
	mode: "aot",
	purge: {
		content: ["./src/**/*.{html,js,svelte,ts}"],
		options: {
			defaultExtractor: (content) => [
				// If this stops working, please open an issue at https://github.com/svelte-add/tailwindcss/issues rather than bothering Tailwind Labs about it
				...tailwindExtractor(content),
				// Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
				...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(
					([_match, group, ..._rest]) => group,
				),
			],
		},
		safelist: [/^svelte-[\d\w]+$/],
	},
	theme: {
		extend: {
			colors: {
				"wm-green": "#2FA875",
			},
			width: {
				98: "98%",
			},
			boxShadow: {
				"xl-all": "0 0 20px rgba(0, 0, 0, 0.3)",
				"xl-all-darker": "0 0 20px rgba(0, 0, 0, 0.4)",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
