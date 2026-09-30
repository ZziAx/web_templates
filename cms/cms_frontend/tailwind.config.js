const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/**/*.{css,scss}", // important for @apply in CSS files


  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#3b65c3",
        secondaryBlue: "#89a5e4",
      },

      // fontFamily: {
        // Add your custom font family here
        // 'iranyekan': ['IRANYekan', 'sans-serif'], // 'YourIranyekanFontName' should match the name you used in your CSS @font-face
        // Example: If your font name in CSS is 'iranyekan-regular'
        // 'iranyekan': ['iranyekan-regular', 'sans-serif'],
      // },
    },
  },
  plugins: [
  ],
});