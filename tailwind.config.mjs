/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}','./src/**/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				backgroundColor: '#FCFCFC',
				blackBackgroundColor: '#1F271B',
				redAlert: '#FF1715',
				primary: {"50":"#fef2f2","100":"#fee2e2","200":"#fecaca","300":"#fca5a5","400":"#f87171","500":"#ef4444","600":"#dc2626","700":"#b91c1c","800":"#991b1b","900":"#7f1d1d","950":"#450a0a"}			},
			keyframes: {
				slide: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' },
				},
			},
			animation: {
				slide: 'slide 15s linear infinite',
			},			
			fontFamily: {
				'body': [
					'Inter', 
					'ui-sans-serif', 
					'system-ui', 
					'-apple-system', 
					'system-ui', 
					'Segoe UI', 
					'Roboto', 
					'Helvetica Neue', 
					'Arial', 
					'Noto Sans', 
					'sans-serif', 
					'Apple Color Emoji', 
					'Segoe UI Emoji', 
					'Segoe UI Symbol', 
					'Noto Color Emoji'
				  ],
					  'sans': [
					'Inter', 
					'ui-sans-serif', 
					'system-ui', 
					'-apple-system', 
					'system-ui', 
					'Segoe UI', 
					'Roboto', 
					'Helvetica Neue', 
					'Arial', 
					'Noto Sans', 
					'sans-serif', 
					'Apple Color Emoji', 
					'Segoe UI Emoji', 
					'Segoe UI Symbol', 
					'Noto Color Emoji'
				  ]
			  }
		},
	},
	plugins: [
		require('flowbite/plugin'),	
		require('flowbite-typography'),
	],
}

							