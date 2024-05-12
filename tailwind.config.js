/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Jost", "sans-serif"],
      },
      colors:{
        "red-primary": "#821f40"
      }
      ,
      translate: {
        "-1/2": "-50%",
      },
      mixBlendMode: {
        luminosity: "luminosity",
      },
      backgroundImage: {
        "breadcrumb-img":
          "url('https://shofy-fashion.botble.com/storage/main/general/breadcrumb.jpg')",
      },
      boxShadow: {
        "custom-light-1": "0 1px 2px rgba(1, 15, 28, 0.1)",
      },
      keyframes: {
        "svg-line": {
          "0%": { "stroke-dashoffset": 0 },
          "100%": { "stroke-dashoffset": 350 },
        },
      },
      animation: {
        "svg-animation": "svg-line 30s linear infinite forwards",
      },
      boxShadow: {
        "auth-card": "0 30px 70px rgba(1,15,28,.1)",
      },
    },
  },
  variants: {},
  plugins: [],
};
