/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // EXACT colors from original site.css
        gold: '#D4AF37',
        'gold-dark': '#b8941f',
        'gold-light': '#e6c85a',
        'dark-bg': '#0a0a0a',
        'darker-bg': '#111111',
        'text-light': '#f8f9fa',
        'text-muted': '#6c757d',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}