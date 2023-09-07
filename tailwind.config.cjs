/** @type {import('tailwindcss').Config}*/
const config = {
	content: ["./src/**/*.{html,js,svelte,ts,svx}"],

	theme: {
		extend: {},
	},

	plugins: [require("daisyui")],
};

module.exports = config;
