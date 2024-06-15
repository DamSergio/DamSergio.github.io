/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				accent: '#9233EA',
			},
		},
	},
	daisyui: {
		themes: [
			{
				myTheme: {
					...require('daisyui/src/theming/themes')['night'],
					accent: '#9233EA',
				},
			},
			'night',
		],
	},
	plugins: [require('daisyui')],
};
