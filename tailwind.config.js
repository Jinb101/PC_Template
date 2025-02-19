import remToPx from 'tailwindcss-rem-to-px';

export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {

        },
    },
    plugins: [
        remToPx(),
    ],
}
