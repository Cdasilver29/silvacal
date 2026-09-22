import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0F172A',
        silver: '#C0C0C0',
        electric: '#3B82F6',
        background: '#FFFFFF',
        body: '#1F2937',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
      transitionProperty: {
        DEFAULT: 'transform, color, background-color, border-color',
      },
    },
  },
  plugins: [],
};

export default config;
