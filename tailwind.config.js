const isStorybook = (process.env.npm_lifecycle_script || "").includes(
	"storybook",
);

const purgeCssOptions = {
	content: ["./src/**/*.{js,svelte,ts}"],
	options: {
		safelist: [/^svelte-\w+$/],
	},
};

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig} */
module.exports = {
	corePlugins: {
		preflight: false,
	},
	mode: isStorybook ? "aot" : "jit", // Hack: jit purges CSS.
	purge: isStorybook ? [] : purgeCssOptions,
	theme: {
		extend: {
			colors: {
				"wm-green": "#2FA875",
			},
			width: {
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
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
