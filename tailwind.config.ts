import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F2F2F2',
        surface: {
          DEFAULT: '#FFFFFF',
          light: '#F2F2F2',
        },
        foreground: '#1B1B1B',
        cream: '#FBF5E4',
        muted: '#6B7280',
        accent: {
          DEFAULT: '#FF8906',
          hover: '#E07D00',
        },
        border: '#E5E5E5',
      },
      fontFamily: {
        sans: ['var(--font-satoshi)', 'sans-serif'],
        heading: ['var(--font-general-sans)', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
      },
      borderRadius: {
        sm: '12px',
        md: '18px',
        lg: '24px',
      },
      boxShadow: {
        sm: '0 4px 12px rgba(27,27,27,.08)',
        lg: '0 20px 60px rgba(27,27,27,.15)',
      },
    },
  },
  plugins: [],
}

export default config