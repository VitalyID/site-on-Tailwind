/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./public/**/*.html'],
	theme: {
		container: {
			center: true,
			padding: '1rem',
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px',
				'3xl': '1920px',
			},
		},
		extend: {
			fontFamily: {
				futura: ['"Futura PT"', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
