import '../src/lib/styles/tailwind.css';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	parameters: {
		layout: 'fullscreen',
	},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
