/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        "on-primary": "#ffffff",
        ink: "#000000",
        canvas: "#ffffff",
        "inverse-canvas": "#000000",
        "inverse-ink": "#ffffff",
        "on-inverse-soft": "#ffffff",
        hairline: "#e6e6e6",
        "hairline-soft": "#f1f1f1",
        "surface-soft": "#f7f7f5",
        "block-lime": "#dceeb1",
        "block-lilac": "#c5b0f4",
        "block-cream": "#f4ecd6",
        "block-pink": "#efd4d4",
        "block-mint": "#c8e6cd",
        "block-coral": "#f3c9b6",
        "block-navy": "#1f1d3d",
        "accent-magenta": "#ff3d8b",
        "semantic-success": "#1ea64a",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Space Mono"', 'Menlo', 'monospace'],
      },
      borderRadius: {
        xs: '2px',
        sm: '6px',
        md: '8px',
        lg: '24px',
        xl: '32px',
        pill: '50px',
      },
      spacing: {
        hair: '1px',
        section: '96px',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
};
