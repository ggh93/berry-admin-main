/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.ts', './src/**/*.tsx'],
	fontFamily: {
		pre: ['Graphik', 'sans-serif'],
	},
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],

	// daisyUI config (optional)
	daisyui: {
		styled: true,
		themes: true,
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		prefix: '',
		darkTheme: 'dark',
	},
};
// fontFamily: ['Pretendard', 'Spoqa Han Sans Neo', 'Roboto'],
