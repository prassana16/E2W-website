/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Destine: ['Destine', 'serif'], // Replace 'serif' with a fallback font if needed
        Mauline: ['Mauline', 'serif'], // Replace 'serif' with a fallback font if needed
      },
    },
  },
  plugins: [],
}

