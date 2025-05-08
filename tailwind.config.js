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
      },
      colors: {
        'primary': {
          100: '#f6c5e2', // Lightest magenta
          200: '#ef9dcf', // Light magenta
          300: '#e072bd', // Medium-light magenta
          400: '#d048ab', // Medium magenta
          500: '#b81d99', // Medium-dark magenta
          600: '#961989', // Dark magenta
          700: '#77157a', // Deeper magenta
          800: '#590f6a', // Very dark magenta
          900: '#3b095a', // Deepest purple/magenta
        },
        'accent': {
          100: '#e6c9f4', // Lightest purple
          200: '#d3a6ed', // Light purple
          300: '#c182e6', // Medium-light purple
          400: '#ae5fde', // Medium purple
          500: '#9c3cd7', // Medium-dark purple
          600: '#8130b0', // Dark purple
          700: '#672589', // Deeper purple
          800: '#4d1a62', // Very dark purple
          900: '#33103c', // Deepest purple
        },
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
