

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
     
        <Head>
          <script dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  // Si NO hay nada guardado, forzamos LIGHT
                  if (savedTheme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                    // Opcional: localStorage.setItem('theme', 'light');
                  }
                } catch (e) {}
              })()
            `
          }} />
        </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
        
      </body>
    </Html>
  )
}