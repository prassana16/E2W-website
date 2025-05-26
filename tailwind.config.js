/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Destine: ['Destine', 'serif'],
        Mauline: ['Mauline', 'serif'],
        Tinos: ['Tinos', 'sans'],
        RozhaOne: ['RozhaOne', 'serif'],
      },      colors: {
        'primary': '#05f4f9', // Our main cyan color
        'secondary': '#000000', // Black
        'background': '#ffffff', // White
        'cyan': '#05f4f9',
        'black': '#000000',
        'white': '#ffffff',
        // Shades of our colors for gradients and variations
        'cyan-light': 'rgba(5, 244, 249, 0.2)',
        'cyan-medium': 'rgba(5, 244, 249, 0.5)',
        'cyan-dark': 'rgba(5, 244, 249, 0.8)',
        'black-light': 'rgba(0, 0, 0, 0.2)',
        'black-medium': 'rgba(0, 0, 0, 0.5)',
        'black-dark': 'rgba(0, 0, 0, 0.8)',
      },
    },
  },
  plugins: [addVariablesForColors],
};

// Simple color flattening utility
function flattenColors(colors, prefix = '') {
  return Object.entries(colors).reduce((acc, [key, val]) => {
    const newKey = prefix ? `${prefix}-${key}` : key;
    if (typeof val === 'string') {
      acc[newKey] = val;
    } else if (typeof val === 'object' && val !== null) {
      Object.assign(acc, flattenColors(val, newKey));
    }
    return acc;
  }, {});
}

// Plugin to convert colors to CSS variables
function addVariablesForColors({ addBase, theme }) {
  const colors = theme('colors');
  const flatColors = flattenColors(colors);
  const cssVars = Object.fromEntries(
    Object.entries(flatColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({ ':root': cssVars });
}

export default config;
