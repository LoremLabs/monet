const isStorybook = (process.env.npm_lifecycle_script || "").includes(
	"storybook",
);

const colors = require("tailwindcss/colors");

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig} */
module.exports = {
	corePlugins: {
		preflight: false,
	},
	mode: "jit",
	purge: {
		enabled: !isStorybook,
		content: ["./src/**/*.{js,svelte,ts}"],
		options: {
			prefix: "svelte-",
			safelist: [/\-webmon\-/] // TODO(mankins): this doesn't seem to work so span hacks...
		},
	},
	theme: {
		extend: {
			colors: {
				// if adding new monetization type, add identifier here
				webmon: {
					'100': colors.green['100'],
					'400': colors.green['400'],
					'500': '#2FA875',
					'800': '#2FA875',
				},
				ad: colors.red,
				sub: colors.gray,
				"wm-green": "#2FA875",
			},
			width: {
				95: "95%",
				98: "98%",
			},
			maxWidth: {
				"prose-72": "72ch",
				"prose-78": "78ch",
			},
			boxShadow: {
				"xl-all": "0 0 20px rgba(0, 0, 0, 0.3)",
				"xl-all-darker": "0 0 20px rgba(0, 0, 0, 0.4)",
			},
			animation: {
				"wm-blink": "blink 2s infinite",
			},
			keyframes: {
				blink: {
					"0%, 30%": { opacity: 1 },
					"10%": { opacity: 0 },
				},
			},
			zIndex: {
				"-1": -1,
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
