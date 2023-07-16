/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Varela Round', 'sans-serif'],
      accent: ['Patrick Hand SC', 'serif'],
    }
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["winter"],
  },
}

