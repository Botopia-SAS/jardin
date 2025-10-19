import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'pastel-pink': '#F5D7D7',
        'pastel-rose': '#E8B4B8',
        'terracotta': '#B8695C',
        'deep-rose': '#A25B6E',
        'sage-green': '#A8B89E',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
