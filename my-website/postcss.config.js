import autoprefixer from 'autoprefixer'

export default {
  plugins: {
    '@tailwindcss/postcss': {
      content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}',
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    },
    autoprefixer: {},
  },
}