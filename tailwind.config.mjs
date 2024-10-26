/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				backgroundColor: '#FCFCFC',
				blackBackgroundColor: '#1F271B',
				redAlert: '#FF1715',
				
			}
		},
	},
	plugins: [],
}
