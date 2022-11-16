/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: { Cormorant: ['Cormorant Upright', 'serif'], Opensans: ['Open Sans', 'sans-serif'] },
			colors: {
				golden: {
					50: '#DCCA87'
				},
				selfblack: {
					50: '#0C0C0C'
				},
				selfgray: {
					50: '#545454'
				},
				crimson: {
					50: '#F5EFDB'
				},
				selfgrey: {
					50: '#AAAAAA'
				}
			}
		}
	},
	plugins: []
}
