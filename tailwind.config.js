/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			normal: ['Fira sans', 'sans-serif'],
			display: ['Roboto slab', 'serif'],
			mono: ['Fira mono', 'monospace'],
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
