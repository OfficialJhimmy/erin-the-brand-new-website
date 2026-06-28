import localFont from 'next/font/local'

export const satoshi = localFont({
  src: [
    { path: '../public/fonts/satoshi/Satoshi-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/satoshi/Satoshi-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../public/fonts/satoshi/Satoshi-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-satoshi',
  display: 'swap',
})

export const generalSans = localFont({
  src: [
    { path: '../public/fonts/general-sans/GeneralSans-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/general-sans/GeneralSans-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../public/fonts/general-sans/GeneralSans-Semibold.woff2', weight: '600', style: 'normal' },
    { path: '../public/fonts/general-sans/GeneralSans-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-general-sans',
  display: 'swap',
})