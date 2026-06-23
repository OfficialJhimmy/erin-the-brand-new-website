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
        foreground: '#0D0D0D',
        muted: '#6B7280',
        accent: {
          DEFAULT: '#2563EB',
          hover: '#1D4ED8',
        },
        border: '#E5E5E5',
      },
      fontFamily: {
        sans: ['Satoshi', 'sans-serif'],
        heading: ['General Sans', 'sans-serif'],
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
