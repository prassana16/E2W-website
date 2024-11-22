const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette").default;

/** @type {import('tailwindcss').Config} */
module.exports = {
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
    },
  },
  plugins: [
    addVariablesForColors,
  ],
};

// Plugin to add Tailwind colors as global CSS variables (e.g., var(--gray-200))
function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
