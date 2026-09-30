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
      }
    },
  
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
});