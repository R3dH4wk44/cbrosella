/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				backgroundColor: '#FCFCFC',
				blackBackgroundColor: '#1F271B',
				redAlert: '#FF1715',
			},
			keyframes: {
				slide: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' },
				},
			},
			animation: {
				slide: 'slide 15s linear infinite',
			},
		},
	},
	plugins: [],
}
