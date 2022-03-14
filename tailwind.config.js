module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["cupcake"],
  },
  plugins: [require("daisyui")],
}