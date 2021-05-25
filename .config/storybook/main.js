module.exports = {
	stories: [
		"../../src/**/*.stories.mdx",
		"../../src/**/*.stories.@(js|jsx|ts|tsx|svelte)",
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-viewport",
		{
			name: "@storybook/addon-postcss",
			options: {
				postcssLoaderOptions: {
					implementation: require("postcss"),
				},
			},
		},
		"@storybook/addon-svelte-csf",
	],
	svelteOptions: {
		preprocess: require("../../svelte.config.js").preprocess,
	},
};
