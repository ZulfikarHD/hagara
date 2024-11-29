import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                'sans': ['Montserrat', 'sans-serif'],
                'montserrat': ['Montserrat', 'sans-serif'],
            },
            transitionDuration: {
                '700': '700ms',
                '1000': '1000ms',
                '1500': '1500ms',
            },
            colors: {
                blue: {
                    900: '#1a365d',
                    950: '#0f2744',
                },
                orange: {
                    400: '#fb923c',
                    500: '#f97316',
                    600: '#ea580c',
                },
            },
        },
    },

    plugins: [forms],
};
