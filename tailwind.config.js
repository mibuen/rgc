module.exports = {
	purge: ['./**/*.html', './**/*.js', './**/*.svg'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/forms')],
};
