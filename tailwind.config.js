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
        'primary': {
          100: '#d4fcfd', // Lightest cyan
          200: '#b0f9fb', // Light cyan
          300: '#8cf7f9', // Medium-light cyan
          400: '#67f4f7', // Medium cyan
          500: '#05f4f9', // Our main cyan color #05f4f9
          600: '#04c3c7', // Dark cyan
          700: '#039295', // Deeper cyan
          800: '#026163', // Very dark cyan
          900: '#013132', // Deepest cyan
        },
        'accent': {
          100: '#ffffff', // White
          200: '#f5f5f5', // Off-white
          300: '#e0e0e0', // Light gray
          400: '#c0c0c0', // Silver
          500: '#909090', // Gray
          600: '#606060', // Dark gray
          700: '#303030', // Darker gray
          800: '#181818', // Very dark gray
          900: '#000000', // Black
        },
        'cyan': '#05f4f9',
        'black': '#000000',
        'white': '#ffffff',
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
