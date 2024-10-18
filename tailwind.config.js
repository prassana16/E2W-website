/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Destine: ['Destine', 'monospace'], // Replace 'monospace' with a fallback font if needed
        Mauline: ['Mauline', 'monospace'], // Replace 'monospace' with a fallback font if needed
      },
    },
  },
  plugins: [],
}

