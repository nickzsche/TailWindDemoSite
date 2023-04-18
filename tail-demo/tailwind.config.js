/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens: {
        lg: "1140px",
        xl: "1140px",
        "2xl": "1140px",
      }
    },
    extend: {
      fontFamily: {
        open_sans: ["Open Sans", "sans-serif"],
        gemunus: ["Gemunu Libre", "sans-serif"],
      },
      colors: {
        "gaga-red": "#BC1A45",
        "gaga-melon": "#FFD369",
        "gaga-grey":"#DDDDDD",
        "gaga-white":"#F7F7F7"
      }
    },
  },
  plugins: [],
}

