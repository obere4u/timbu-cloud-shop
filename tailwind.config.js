/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 11.21px 33.64px 0px rgba(46, 33, 61, 0.08)",
      },
      colors: {
        cyanOpacity: "rgba(0, 198, 215, 0.4)",
        cyanOpacity: "rgba(0, 198, 215, 0.3)",
        softGray: "#89807A",
        redOpacity: "rgba(239, 68, 68, 0.2)",
        yellowOpacity: "rgba(255, 235, 59, 0.4)",
        darkOpacity: "rgba(45, 45, 45, 0.4)",
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
        mobileBg: "url('/mobileApp.png')",
      },
      rotate: {
        5: "5deg",
      },
    },
  },
  plugins: [],
};
