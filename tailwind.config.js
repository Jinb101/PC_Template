import remToPx from 'tailwindcss-rem-to-px';
import type { Config } from 'tailwindcss'

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
        require('daisyui'),
    ],
} satisfies Config
