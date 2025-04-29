/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				"dark-blue": "#040dbf",
				"light-blue": "#01f2f2",
				gold: "#f2df79",
				orange: "#F37406",
				background: "#3A53BA"
			},
			fontFamily: {
				title: ["ATRotisSemiSans-ExtraBold", "sans-serif"],
				subtitle: ["ATRotisSemiSans-Light", "sans-serif"]
			}
		}
	},
	plugins: [require("tailwindcss-animate")]
};
