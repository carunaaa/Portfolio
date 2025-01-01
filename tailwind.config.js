export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fall: {
          50: "#FFF4E6",
          100: "#FFD6A5",
          200: "#FF9E69",
          300: "#F28D35",
          400: "#E36A20",
          500: "#D14F0B",
          600: "#B53D06",
          700: "#9C2B03",
          800: "#802100",
          900: "#661700",
        },
      },
      backgroundImage: {
        fall: "linear-gradient(to bottom, #D14F0B, #FF9E69)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
