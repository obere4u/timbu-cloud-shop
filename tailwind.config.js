/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          brightTeal: "#E1E6EF",
          richBlack: "#2D2D2D",
          lightCyan: "#00C6D7",
        },
        secondary: {
          lightGrey: "#F5F5F5",
          mediumGrey: "#B0B0B0",
        },
        accent: {
          softYellow: "#FFEB3B",
          softRed: "#FF5722",
        },
        text: {
          primary: "#2C3E50",
          secondary: "#1D2433CC",
          disabled: "#1D2433A6",
        },
      },
      backgroundImage: {
        heroBg: "url('/hero-bg-image.jpg')",
      },
      rotate: {
        5: "5deg",
      },
    },
  },
  plugins: [],
};
