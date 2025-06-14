/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./public/**/*.html', './src/**/*.js'],
	theme: {
		container: {
			center: true,
			// padding: '1rem',
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
			keyframes: {
				blinking: {
					'0%, 100%': { opacity: 0.5 },
					'50%': { opacity: 1 },
				},
			},
			animation: {
				blinking: 'blinking 4s infinite',
			},
		},
	},
	plugins: [],
};

// before:block before:absolute before:w-[100%] before:h-[100%] before:top-0 before:left-0 before:bg-slate-500 before:z-[-10]
