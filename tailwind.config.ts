import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--c-bg) / <alpha-value>)', surface: 'rgb(var(--c-surface) / <alpha-value>)', line: 'rgb(var(--c-line) / <alpha-value>)',
        fg: 'rgb(var(--c-fg) / <alpha-value>)', muted: 'rgb(var(--c-muted) / <alpha-value>)', accent: 'rgb(var(--c-accent) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Manrope', ...defaultTheme.fontFamily.sans],
        serif: ['"Instrument Serif"', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
export default config;
