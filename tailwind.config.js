/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3d6b4f",
          light: "#5a8a6a",
          dark: "#2a4d38",
        },
        accent: "#c8a96e",
        warm: {
          50: "#faf8f5",
          100: "#f5f0e8",
          200: "#ede3d0",
          300: "#d9c8a8",
        },
      },
      fontFamily: {
        sans: [
          '"Noto Sans JP"',
          '"Hiragino Sans"',
          '"Yu Gothic"',
          "sans-serif",
        ],
        serif: [
          '"Noto Serif JP"',
          '"Hiragino Mincho Pro"',
          '"Yu Mincho"',
          "serif",
        ],
      },
      letterSpacing: {
        widest2: "0.2em",
        widest3: "0.3em",
      },
    },
  },
  plugins: [],
};
