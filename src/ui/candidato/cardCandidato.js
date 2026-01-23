'use client'
import { inter } from '../../lib/fonts';
import Image from 'next/image';
import Link from 'next/link';
/* 
--color-french-blue-800: #022964;
*/
const CardCandidato = ({ candidato }) => {
  const { nameCandidato, surname, imagen, political_party, _id } = candidato;
  const { url, alt } = imagen || {};

  return (
    <div className={`
      ${inter.className}
      group relative flex flex-col  md:w-60  w-[97vw] overflow-hidden rounded-xl bg-white shadow-md
      transition-all duration-300 hover:shadow-lg
      dark:bg-french-blue-950  ml-1.5
    `}>

      {/* Contenedor de Imagen con el "Corte Angular" del diseño original */}
      <div className="relative md:h-64 h-[55vh] w-full overflow-hidden bg-french-blue-50 dark:bg-french-blue-900 ">
        {url ? (
          <Image
            src={url}
            fill
            alt={alt || "Candidato"}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 350px"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-french-blue-200">Sin foto</div>
        )}
        
        {/* El polígono blanco que hace el efecto visual inferior (como en tu imagen) */}
        <div 
          className="absolute bottom-0 left-0 w-full h-10 bg-white dark:bg-french-blue-950" 
          style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 50% 100%, 0 0)' }}
        ></div>
      </div>

      {/* Información del Candidato */}
      <div className="flex flex-col items-center p-6 text-center">
        
        {/* 1. Nombre del Candidato */}
        <h4 className="text-xl font-bold text-french-blue-900 dark:text-french-blue-50 leading-tight">
          {nameCandidato.firstName} {surname.paternal}
        </h4>

        {/* 2. Bloque de Partido (Nombre y Logo) */}
        <div className="mt-4 mb-6 flex items-center justify-center gap-4 w-full min-h-[50px]">
          <p className="text-sm font-semibold text-gray-500 dark:text-french-blue-300">
            {political_party.name}
          </p>
          {political_party.imgeUrl && (
            <div className="relative h-10 w-10 flex-shrink-0  rounded-xl overflow-hidden border-2 border-french-blue-900">
              <Image
                src={political_party.imgeUrl}
                fill
                alt="Logo Partido"
                className="object-contain"
              />
            </div>
          )}
        </div>

        {/* 3. Botón Votar (Estilo original ajustado) */}
        <Link
          href={`/candidato/${_id}`}
          className="
            w-full max-w-[160px] rounded-lg bg-french-blue-800 py-3 text-sm font-bold text-white uppercase tracking-widest
            transition-all duration-200 hover:bg-french-blue-700 active:scale-95
            dark:bg-french-blue-600 dark:hover:bg-french-blue-500
            shadow-sm
          "
        >
          votar
        </Link>
      </div>
    </div>
  );
};

export default CardCandidato;