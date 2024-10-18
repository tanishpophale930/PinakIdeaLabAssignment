/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        'custom': 'polygon(0 100%, 100% 0, 100% 100%, 0 85%)',
      },
    },
  },
  plugins: [],
}

