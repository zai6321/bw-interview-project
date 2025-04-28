/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				darkBlue: "#040dbf",
				lightBlue: "#01f2f2",
				gold: "#f2df79",
				orange: "#F37406",
				background: "#3A53BA",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
