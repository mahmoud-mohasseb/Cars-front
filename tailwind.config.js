module.exports = {
  important: true,
  content: [
    './public/index.html',
    './src/**/*.{html,js,jsx,ts,tsx}',
    './src/components/**/*.{html,js,jsx,ts,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xxxs: '322px', // => @media (min-width: 517px) { ... }
      xxs: '517px',
      // => @media (min-width: 517px) { ... }
      xs: '517px',
      // => @media (min-width: 517px) { ... }
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      zIndex: {
        100: '100',
      },
      inset: {
        '3px': '3px',
      },
    },
  },
  plugins: [],
};
