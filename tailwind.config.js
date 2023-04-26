/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			normal: ['Fira sans', 'sans-serif'],
			display: ['Fira sans', 'serif'],
			mono: ['Fira mono', 'mono'],
		},
		extend: {
			screens: {
				'md': '840px',
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
