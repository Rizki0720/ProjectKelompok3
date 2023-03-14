/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {  
      height:{
      '500': '500px',
      '400': '400px',
      '450': '450px',
    },
    backgroundImage:{
      'hero-section': "url('/public/assets/hero_iPhone-14-Pro-Max.jpg')",
      'main-section': "url('/public/assets/iphone-14-pro-max-deep-purple.jpg')"
    },
    width:{
      '500': '500px',
      '400': '400px',
      '450': '450px',
    },
  
  },
  },
  plugins: [],
}
