import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'bg-white-to-purple': {
          '0%': { backgroundColor: 'white' },
          '100%': { backgroundColor: '#5732a8' },
        },
        'hidden-tag': {
          '0%': { opacity: "0"},
          '90%': { opacity: "0"},
          '100%': { opacity: "1"},
        }
      },
      animation: {
        'bg-white-to-purple': 'bg-white-to-purple 1s ease forwards',
        'hidden-tag': 'hidden-tag 5s ease forwards',
      },
    },
  },
  plugins: [],
} satisfies Config;
