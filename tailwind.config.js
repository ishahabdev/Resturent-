/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cheezRed: {
          DEFAULT: '#D62828',
          hover: '#b81f1f',
          dark: '#9d1818',
          light: '#fde8e8',
        },
        cheezYellow: {
          DEFAULT: '#F9A826',
          hover: '#e29517',
          dark: '#c97f0a',
          light: '#fef3dc',
        },
        cheezCream: {
          DEFAULT: '#FFF6E5',
          dark: '#faebd2',
          card: '#FFFFFF',
        },
        cheezBrown: {
          DEFAULT: '#3B1F0E',
          light: '#5a351e',
          muted: '#7a5a43',
        },
      },
      fontFamily: {
        logo: ['"Fredoka"', '"Baloo 2"', 'cursive', 'sans-serif'],
        display: ['"Fredoka"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'cheese': '0 8px 24px -4px rgba(249, 168, 38, 0.25)',
        'cheezRed': '0 8px 24px -4px rgba(214, 40, 40, 0.35)',
        'card-hover': '0 16px 32px -8px rgba(59, 31, 14, 0.12)',
      },
    },
  },
  plugins: [],
}
