import { Geist, Geist_Mono, Cormorant } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
});

import localFont from 'next/font/local'
 
const robotoRegular = localFont({
  src: '../assets/fonts/Roboto-Regular.ttf',
  display: 'swap',
  variable: '--roboto-regular',
})
const robotoBold = localFont({
  src: '../assets/fonts/Roboto-BoldItalic.ttf',
  display: 'swap',
  variable: '--roboto-bold',
})
const BitcountPropDouble = localFont({
  src: '../assets/fonts/BitcountPropDouble_Cursive-Regular.ttf',
  display: 'swap',
  variable: '--bitcount-prop',
})
const oswaldLight = localFont({
  src: '../assets/fonts/Oswald-Light.ttf',
  display: 'swap',
  variable: '--oswald-light',
})
const oswaldRegular = localFont({
  src: '../assets/fonts/Oswald-Regular.ttf',
  display: 'swap',
  variable: '--oswald-regular',
})

export {geistSans, geistMono, cormorant, robotoRegular, robotoBold, BitcountPropDouble, oswaldLight, oswaldRegular}