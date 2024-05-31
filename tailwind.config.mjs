/** @type {import('tailwindcss').Config} */
export default {
	mode: 'jit',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				background: '#0E0F26', 
				primary: '#759fbd', 
				secondary: '#b8b7d2', 
				accent: '#8ec4c7', 
				highlightedText: '#e45a2f',
				text: '#EBD3A8',
				subtitles: '#e4da2e',
				card: '#17182E',
				tag: '#1C1F36',
				body: '#DCE2EB',
				projectext: '#38BDF8',
			 },
			fontFamily: {
				name: ['Inter-Name', 'sans-serif'],
				headings: ['Inter-Headings', 'sans-serif'],
				body: ['Inter-Body', 'sans-serif'],
				subtitles: ['Inter-Sub', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
