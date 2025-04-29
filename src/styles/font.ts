// styles/fonts.ts
import { Open_Sans, Merriweather } from 'next/font/google';

// Full Open Sans setup
export const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800'],  // full range of Open Sans
  style: ['normal', 'italic'], // include italic if you want
  display: 'swap' // recommended for better performance
});

// Full Merriweather setup
export const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'], // full range of Merriweather
  style: ['normal', 'italic'], 
  display: 'swap'
});
