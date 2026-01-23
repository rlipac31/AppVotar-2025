'use client'
import Sidebar from '../../ui/layout/sidebar';
import Image from 'next/image';
import Formulario from '../../ui/formulario/Formulario';
import HeaderTw from '../../ui/layout/header/HeaderTw';
import Link from 'next/link';
import Footertw from '../../ui/layout/footer/Footertw';
import { roboto, inter } from '../../lib/fonts'; // Usando inter para consistencia

export async function getServerSideProps(context) {
  const { id } = context.params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/candidatos/${id}`);// ruta valida solo con "use client"

 // const res = await fetch(`https://app-votos-cnnb.onrender.com/api/candidatos/${id}`);

  const { candidato } = await res.json();

  const candidatoId = candidato;
  if (!candidatoId) {
    return { notFound: true };
  }
//  console.log("candidato encontado:>>>>>>> ", candidatoId)


  return {

    props: { candidatoId }
  };



}



export default function Candidato({ candidatoId }) {
  if (!candidatoId) return null;

  const { nameCandidato, surname, imagen, political_party, biography, _id } = candidatoId;

  return (
    <div className={`min-h-screen bg-gray-50 flex flex-col md:ml-50 ml-0 ${inter.className}`}>
      {/* Header Movil */}
      <div className="lg:hidden">
        <HeaderTw />
      </div>

      <div className="flex flex-1">
        {/* Sidebar Desktop */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        <main className="bg-french-blue-50 dark:bg-french-blue-900 flex-1 p-4 md:p-8 lg:p-12">
          <div className="max-w-6xl mx-auto">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Columna Izquierda: Perfil del Candidato (4/12) */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100  dark:bg-french-blue-950 dark:border-french-blue-800">
                  
                  {/* Imagen y Nombres Principales */}
                  <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                    <div className="relative w-full lg:w-48 lg:h-64 h-96 flex-shrink-0 overflow-hidden rounded-2xl shadow-lg border-4 border-french-blue-50
                     dark:border-french-blue-900 ">
                      {imagen ? (
                        <Image
                          src={imagen.url}
                          fill
                          alt={imagen.alt}
                          className="object-cover"
                          priority
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">No foto</div>
                      )}
                    </div>

                    <div className="flex-1 text-center md:text-left">
                      <h1 className="text-3xl font-black text-french-blue-900 dark:text-french-blue-50 leading-tight">
                        {nameCandidato} <span className="block">{surname}</span>
                      </h1>
                      <div className="mt-4 flex lg:flex-col flex-row-reverse gap-18 items-center md:items-start lg:gap-2">
                        <div className="relative h-16 w-16">
                           <Image src={political_party.imgeUrl} fill className="object-contain" alt="Partido" />
                        </div>
                        <p className="text-sm font-bold text-gray-500 dark:text-french-blue-300 uppercase tracking-tighter">
                          {political_party.name}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Reseña Biográfica */}
                  <div className={`mt-8 p-2 rounded-xl bg-french-blue-50 dark:bg-french-blue-900/40 ${roboto.className}`}>
                    <h3 className="text-sm font-bold text-french-blue-700 dark:text-french-blue-300 mb-2 uppercase">Biografía Resumida</h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-4 text-[14px]">
                      {biography.resumenBio}...
                    </p>
                       <p className='mt-4 dark:bg-french-blue-900/40 dark:text-french-blue-900/40 text-[4px] dark:hover:bg-french-blue-800
                         dark:hover:text-french-blue-50 hover:text-[14px] rounded rounded-2xl p-2
                         transition transition-all'> !es posible que algunos candidatos no tengan informacion 
                         disponible en Wikipedia</p>
                    <Link 
                      href={biography.link_wiki} 
                      target="_blank"
                      className="inline-block mt-6 text-french-blue-600 font-bold hover:underline dark:text-french-blue-400"
                    >
                     
                      Seguir leyendo en Wikipedia →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Columna Derecha: Formulario y Mensaje de Confianza (7/12) */}
              <div className="lg:col-span-7 my-8 ">
                  <Formulario />
               {/* 
                */}
              </div>

            </div>
          </div>
        </main>
      </div>

      <Footertw />
    </div>
  );
}