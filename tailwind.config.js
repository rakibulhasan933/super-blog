/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gradientRed: '#ff0000',
        gradientGreen: '#00ff00',
        gradientBlue: '#0000ff',
      },
    },
  },
  plugins: [require("daisyui")],
}
