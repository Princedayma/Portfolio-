// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Include all JavaScript and TypeScript files in the app directory
    './pages/**/*.{js,ts,jsx,tsx}', // Include all JavaScript and TypeScript files in the pages directory
    './components/**/*.{js,ts,jsx,tsx}', // Include all JavaScript and TypeScript files in the components directory
    // Add other directories if necessary
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        // Define colors with opacity placeholders
        'primary': 'rgba(var(--color-primary), <opacity-value>)',
        'secondary': 'rgba(var(--color-secondary), <opacity-value>)',
      },
      animation: {
        'typing': 'typing 2s steps(30, end) infinite',
        'slide-in': 'slideIn 1s ease-in',
        'fade-up': 'fadeUp 1s ease-out',
      },
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        slideIn: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        fadeUp: {
          '0%': { opacity: '0%', transform: 'translateY(20px)' },
          '100%': { opacity: '100%', transform: 'translateY(0)' },
        },
      },
    },
  },
  darkMode: 'class', // Enables dark mode using the 'class' strategy
  plugins: [
   
  ],
};

export default config;
