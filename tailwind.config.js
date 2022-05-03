module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      "colors": {
        "sky": {
          "50": "#325379",
          "100": "#28496f",
          "200": "#1e3f65",
          "300": "#14355b",
          "400": "#0a2b51",
          "500": "#002147",
          "600": "#00173d",
          "700": "#000d33",
          "800": "#063e73",
          "900": "#00001f"
        }
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
