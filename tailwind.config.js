module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        manufacture: {
          primary: "#FBBD23",
          secondary: "#191D24",
          accent: "#2A303C",
          error: "#F87272",
        },
      },
      "light",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}