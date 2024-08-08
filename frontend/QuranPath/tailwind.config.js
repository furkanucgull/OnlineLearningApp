const flowbite = require('flowbite-react/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',

    './public/index.html',
    // ...
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        Raleway: ['Raleway', 'sans-serif'],
        Grey: ['"Grey Qo"', 'sans-serif'],
        Gupter: ['Gupter', 'serif'],
        DancingScript: ['"Dancing Script"', 'serif'],
      },
    },
  },
  plugins: [
    // ...
    flowbite.plugin(),
  ],
};
