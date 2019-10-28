//postcss.config.js
// const tailwindcss = require('tailwindcss');
module.exports = {

    plugins: [
        // tailwindcss('./tailwind.config.js'),
        require('tailwindcss')('./tailwind.config.js'),
        require('autoprefixer'),
    ],
    corePlugins: {
        preflight: false,
    },
};