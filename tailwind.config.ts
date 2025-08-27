import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "slide1": "url('/img/banner.png')",
                
            },
            fontFamily: {
                bodoni: ['var(--font-bodoni)'],
            },
            colors: {
                amber: {
                    "500": "#D7A345",
                },
                orange: {
                    "200": "#E8C88D",
                },
                yellow: {
                    "800": "#7E550B",
                },
                gray: {
                    "100": "#F0F0F0",
                },
                trueGray: {
                    "200": "#DEDEDE",
                    "800": "#212121",
                },
                
            },
        },
        plugins: [],

    },
}
export default config;