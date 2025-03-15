/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
// require('tailwindcss-line-length')({
//   widths: {
//     'xs': '18em', // 300px at 1rem
//     'sm': '30em',
//     'md': '35em',
//     'lg': '40em',
//     'xl': '50em', // 800px at 1rem
//   },variants:[]
// })
export default config;
