'use client'
import { useState } from 'react';
import styles from './card.module.css'
import { inter } from '../../lib/fonts';
//import SafeImage from '../candidato/SafeImage';//genera conflictos
import Image from 'next/image';
import Boton from '../boton/Boton';
import Link from 'next/link';

import { RiGeminiFill } from "react-icons/ri";
import ReactMarkdown from "react-markdown";
  import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
 import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'



import { infoCandidato } from '../../utils/consultaIA'
const CardCandidato = ({ candidato }) => {
  const { nameCandidato, surname, imagen, political_party, biography, _id } = candidato;
  const { url } = imagen;
  const [respuestaIA, setRespuestaIA] = useState(null);
  const [open, setOpen] = useState(false)



  const handleClick = async () => {
    try {
        const claveSecreta =process.env.NEXT_PUBLIC_MI_PALABRA_SECRETA_PROMPT;
     // const claveSecreta = "MelitonCarvala-#@$"
      console.log('mi palabra secreta:', claveSecreta)
      const prompt = `hola puedes operar como un agente informativo sobre candidatos a la presidencia del Peru para este 2026.

      Reglas:
      1.  El usuario te pasará una clave secreta primero. La clave es ${claveSecreta}.
      2.  Si la clave proporcionada **NO** es ${claveSecreta} o está ausente, debes responder con el siguiente texto exacto: "Palabra secreta incorrecta".
      3.  Si la clave es correcta(no deves comentar ni escibir nada que no sea referente al candidato), el usuario te pasará el nombre de un candidato.
      4.  Tu tarea es responder con información resumida y relevante sobre el candidato, incluyendo:
          -   Logros (académicos, empresariales, sociales, etc.).
          -   Cuestionamientos políticos, denuncias o sospechas de corrupción. En este punto, debes citar reportajes o publicaciones que respalden dichas afirmaciones.

      ---

     Ahora, estoy listo para recibir la clave y el nombre del candidato.

     Clave secreta: ${claveSecreta}
     
     Nombre del candidato:${nameCandidato.firstName} ${nameCandidato.lastName} ${surname.paternal}`
       setOpen(true); // 👈 Abre el modal
      const texto = await infoCandidato(prompt);
      setRespuestaIA(texto);
     
    } catch (error) {
      console.error("Error al consultar IA:", error);
    }
  };


  return (
    <>
      <div className={styles.card}>
        {url ?
          <Image
            className={styles.card__image}
            src={url || null}
            width={90}
            height={120}
            alt={imagen.alt}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

          />
          :
          null
        }

        <article className={`${styles.card__article} ${inter.className} `}>
          <h4 className={`${styles.card__article__title} ${inter.className} `}>{nameCandidato.firstName} {surname.paternal} </h4>
          <div className={styles.card__article__items}>
            <p className={`${styles.card__article__items__parrafo}  `}>{political_party.name}</p>

            {political_party.imgeUrl ?
              <Image
                src={political_party.imgeUrl}

                width={40}
                height={40}
                alt={`imagen Partido candidato`}
                sizes="(max-width: 768px) 3rem, (max-width: 1200px) 4rem"
              />
              : null}

          </div>
          <div className='flex flex-row  w-full gap-2 justify-around'>
            <Link
              className={` bg-slate-800  hover:bg-slate-950 transition duration-300 px-4 ${styles.card__article__enlace}`}
              href={`/candidato/${_id}`}
            >
              <Boton
                texto={'votar'}
                textColor={'#ffffff'}
                /* bgColor={ 'var(--primary-color)'} */
                size={'medium'}
              />
            </Link>
            <button className=" w-full h-11  text-indigo-700  border-2 border-indigo-700 hover:border-indigo-800 
            hover:bg-indigo-50  rounded-md flex flex-row text-center justify-around items-center"
              onClick={handleClick}
            ><strong className=' text-sm'>Info IA</strong> <RiGeminiFill className='text-xl' />
            </button>

          </div>

          {/* Renderiza el Markdown con estilos */}
         

        </article>
        {/* Modal */}
     

            
                <div className='md:min-w-full'>
        
                   

                  <Dialog open={open} onClose={setOpen} className="relative z-10">
                    <DialogBackdrop
                      transition
                      className="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in "
                    />
                      hola 1
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                          transition
                          className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                        >
                          hola 2
                          <div className="bg-gray-50 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="">
                                  <Image
                                    src={url}
                                    width={200}
                                    height={150}
                                    className='mx-auto mb-2 rounded-sm'
                                  />
                              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                              
                                <div className="mt-2 prose prose-sm">

                                   {/*  <ReactMarkdown>{respuestaIA}</ReactMarkdown> */}
                                         {/* Renderiza la respuesta con estilos */}
                                    {!respuestaIA && (
                                        <div class="mx-auto w-full max-w-sm rounded-md  p-4">
                                          <div class="flex animate-pulse space-x-4">
                                           
                                            <div class="flex-1 space-y-6 py-1">
                                              <div className='text-gray-300 text-xl'>
                                           <RiGeminiFill className='text-xl text-blue-600' /> cargando....</div>
                                              <div class="h-2 rounded bg-gray-200"></div>
                                              <div class="space-y-3">
                                                <div class="grid grid-cols-3 gap-4">
                                                  <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                                                  <div class="col-span-1 h-2 rounded bg-gray-200"></div>
                                                </div>
                                                <div class="h-2 rounded bg-gray-200"></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                             
                                    )}
                                      <ReactMarkdown>{respuestaIA}</ReactMarkdown>
                                  
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray-700/25 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                          
                            <button
                              type="button"
                              data-autofocus
                              onClick={() => setOpen(false)}
                              className="mt-3 inline-flex w-full justify-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20 sm:mt-0 sm:w-auto"
                            >
                              Cerrar
                            </button>
                          </div>
                        </DialogPanel>
                      </div>
                    </div>
                  </Dialog>
                </div>
             
            

        {/* fin  Modal */}

      </div>
    </>
  )
}

export default CardCandidato