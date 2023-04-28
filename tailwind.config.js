/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				normal: ['Fira sans', 'sans-serif'],
				display: ['Roboto slab', 'serif'],
				mono: ['Fira mono', 'monospace'],
				serif: ['Noto serif', 'serif'],
			},
			aspectRatio: {
				'4/3': '4 / 3',
				'3/4': '3 / 4',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
