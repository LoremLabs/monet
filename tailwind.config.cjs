const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				theme: colors.emerald,
			},
			fontFamily: {
				sans: [
					'Roboto',
					'Inter',
				  'system-ui',
				  '-apple-system',
				  'BlinkMacSystemFont',
				  '"Segoe UI"',
				  '"Helvetica Neue"',
				  'Arial',
				  '"Noto Sans"',
				  'sans-serif',
				  '"Apple Color Emoji"',
				  '"Segoe UI Emoji"',
				  '"Segoe UI Symbol"',
				  '"Noto Color Emoji"',
				],
			  },		
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
