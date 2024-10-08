/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bgGray: '#D9D9D9',
                black: '#000000',
                text1: '#050505',
                bgBlue: '#1C39BB',
                bgRed: '#F15A24',
                textWhite:'#FFFFFF',
                textGray:'#646464',
                bgBlue2:'#E7EBFF'
            }
        },
        screens: {
            '2xl': {'max': '1535px'},
            // => @media (max-width: 1535px) { ... }

            'xl': {'max': '1279px'},
            // => @media (max-width: 1279px) { ... }

            'lg': {'max': '1023px'},
            // => @media (max-width: 1023px) { ... }

            'md': {'max': '767px'},
            // => @media (max-width: 767px) { ... }

            'sm': {'max': '639px'},
            // => @media (max-width: 639px) { ... }
        }
    },
    plugins: [],
}

