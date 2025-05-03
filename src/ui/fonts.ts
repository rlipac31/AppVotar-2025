import { Inter, Lusitana, Montserrat, Roboto_Mono } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });


export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
})

const roboto = Roboto_Mono({
    subsets: ['latin'],
    weight: ['400', '700'], // los pesos que usarás
    variable: '--font-roboto', // opcional si usas CSS variables
  });


  const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '700'], // los pesos que usarás
    variable: '--font-Montserrat', // opcional si usas CSS variables
  });
