'use client'

//
import { montserrat, roboto, inter } from '../lib/fonts';
import Link from 'next/link';
import HeaderTw from '../ui/layout/header/HeaderTw';
import Footertw from '../ui/layout/footer/Footertw';
import ResultVotos from '../ui/result/ResultVotos';
import ComoFuncionaCards from '../ui/guia/ComoFunciona';
import { HeartHandshake } from 'lucide-react';

export default function Home() {
  // Aquí usamos la URL de tu colage o imagen representativa
  //const backgroundImage = "https://res.cloudinary.com/rlipac/image/upload/v1746284696/lima-costa_1920_etpbpg.jpg";
  const backgroundImage = "https://res.cloudinary.com/rlipac/image/upload/v1769038225/Gemini_header_xbj2af.png";
  const backgroundImageMobile = "https://res.cloudinary.com/rlipac/image/upload/v1769043951/header_web_Peru_wboak7.png";
  

  return (
    <div className={`min-h-screen transition-colors duration-500 bg-french-blue-50 dark:bg-french-blue-950 ${inter.className}`}>
      <HeaderTw />

      {/* Hero con Imagen de Fondo y Máscara */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        
        {/* Capa de Imagen de Fondo */}
       {/*  <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        /> */}


        <div className="absolute inset-0 z-0 overflow-hidden">
                {/* Imagen para MÓVILES (Oculta en SM en adelante) */}
                <div 
                    className="absolute inset-0 bg-cover bg-center block sm:hidden"
                    style={{ backgroundImage: `url(${backgroundImageMobile})` }}
                />
                
                {/* Imagen para DESKTOP (Oculta en móvil, se muestra desde SM) */}
                <div 
                    className="absolute inset-0 bg-cover bg-center hidden sm:block transition-transform duration-1000 hover:scale-105"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                />
                </div>

        

        {/* Máscara de Gradiente (Overlay) - Usa tus colores French Blue */}
        <div className="absolute inset-0 z-10 bg-linear-to-r   from-french-blue-950/90 via-french-blue-900/50 to-transparent" />

        {/* Contenido del Hero */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl text-left  mt-18">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-french-blue-500/20 border border-french-blue-400/30 mb-6 backdrop-blur-md">
              <HeartHandshake className="w-4 h-4 text-french-blue-300" />
              <span className="text-[10px] font-bold text-french-blue-300 uppercase tracking-[0.2em]">
                Proyecto Civil Sin Fines de Lucro
              </span>
            </div>

            {/* Título Principal */}
                <h1 className={`${montserrat.className} text-2xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight drop-shadow-lg`}>
                Democracia Real en <br></br> <span className="text-french-blue-400">Tiempo Real</span>
                </h1>
                
                {/* Subtítulo Slogan */}
                <p className={`${montserrat.className}  text-xl md:text-[1.5rem]  text-french-blue-200 font-medium mb-4 italic opacity-90`}>
                Tu voz sin filtros, sin medios, sin intermediarios.
                </p>
            
                {/* Párrafo Descriptivo Extenso */}
                <div className="max-w-2xl">
                    <p className={`${roboto.className} hidden md:block text-[1rem] text-french-blue-50/95 leading-snug mb-4 text-pretty`}>
                        Revelamos la intención de voto real del país mediante una plataforma civil 100% independiente. 
                        Validamos cada participación con DNI para garantizar votos reales y no de 'bots', aplicando un 
                        protocolo de <strong className='text-french-blue-400'>privacidad absoluta</strong>: verificamos y
                         <strong className='text-french-blue-400'> encriptamos</strong> tu identidad pero <strong className='text-french-blue-400'>jamás 
                        almacenamos tu documento ni lo vinculamos con tu elección.</strong> Resultados transparentes 
                        construidos por tu voz hacia el 2026.
                    </p>
                     <p className={`${roboto.className}  md:hidden text-[12px] text-french-blue-50/95 leading-snug mb-4 text-pretty`}>
                       Plataforma civil 100% independiente revela la intención de voto real. Se valida cada participación con
                        DNI para asegurar votos reales, no de bots, bajo un protocolo de privacidad absoluta.
                       <strong className='text-french-blue-400'> Tu identidad se verifica y encripta </strong>,
                        pero jamás se almacena tu documento ni se vincula con tu elección.
                        Resultados transparentes para el 2026 construidos por tu voz.


                    </p>
                </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link href="/candidatos" className="w-full sm:w-auto px-10 py-4 bg-french-blue-600 hover:bg-french-blue-500 text-white font-bold rounded-xl transition-all shadow-xl shadow-black/20 active:scale-95 text-center">
                Votar ahora
              </Link>
              <Link href="#resultados" className="w-full sm:w-auto px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-xl transition-all hover:bg-white/20 text-center">
                Ver resultados
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Como Funciona */}
      <section id="como-funciona" className="py-24 bg-white dark:bg-french-blue-950">
        <ComoFuncionaCards />
      </section>

      {/* Sección: Resultados */}
      <section id="resultados" className="py-24 bg-white dark:bg-french-blue-900/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className={`${montserrat.className} text-3xl md:text-5xl font-black text-french-blue-900 dark:text-white mb-12`}>
            Intención de Voto Actual
          </h2>
          <div className=" bg-white  md:p-12 rounded-3xl shadow-2xl dark:bg-french-blue-950 dark:border  dark:border-french-blue-800">
            <ResultVotos />
          </div>
        </div>
      </section>

      <Footertw />
    </div>
  );
}