import { Inter, Lusitana, Montserrat, Roboto_Mono } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });


export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
})

export const roboto = Roboto_Mono({
    subsets: ['latin'],
    weight: ['400', '700'], // los pesos que usarás
    variable: '--font-secundary', // opcional si usas CSS variables
  });


 export  const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '700'], // los pesos que usarás
    variable: '--font-primary', // opcional si usas CSS variables
  });
