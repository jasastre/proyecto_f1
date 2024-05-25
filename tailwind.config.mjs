/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'red-formula1': '#e10500',
				'redbull': '#3671c6',
				'ferrari': '#e80021',
				'mclaren': '#ff8001',
				'astonmartin': '#239971',
				'mercedes': '#29f4d2',
				'rb': '#6592ff',
				'haas': '#b6babd',
				'williams': '#63c4ff',
				'alpine': '#015da8',
				'sauber': '#81d285',
			}
		},
		backgroundImage: theme => ({
			'bg-standings': "url('/bg-standings.jpg')",
			'bg-circuits': "url('/bg-circuits.jpg')"
		  }),
	},
	plugins: [],
}

