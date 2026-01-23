'use client'
import { useState, useEffect } from "react";

import styles from "../../styles/Home.module.css";
import Sidebar from "../../ui/layout/sidebar";
import useCandidato from "../../hooks/useCandidato";
import CardCandidato from "../../ui/candidato/cardCandidato";
//import NavMenu from "../../ui/layout/menu/NavMenu";
import HeaderTw from "../../ui/layout/header/HeaderTw";
import Footertw from "../../ui/layout/footer/Footertw";

import dataCandidatos from "../api/dataCandidatos"

//
export default function CandiatoPage() {

const [miCandidatos, setMiCandidatos] = useState([]); // Inicializa con un array vacío
  const { candidatos: candidatos, loading, error } = useCandidato(); // Obtén los datos de la API y el estado de carga
  const candidatosAleatorios = dataCandidatos.sort(() => Math.random() - 0.5);
  useEffect(() => {
    // Al montar el componente, carga los datos locales inmediatamente
    setTimeout(() => {
           setMiCandidatos(candidatosAleatorios);
    console.log('Candidatos Locales Cargados:', dataCandidatos);
    }, 500);
 
  }, []); // El array vacío asegura que esto se ejecute solo una vez al montar

  useEffect(() => {
    // Cuando los datos de la API terminen de cargar (y no haya error), actualiza miCandidatos
    
      if (loading && !error && candidatos) {
        setTimeout(() => {
      setMiCandidatos(candidatos);
      console.log('Candidatos de API Cargados:', candidatos);
       }, 1000);
    }
   
    
  }, [candidatos, loading, error]); // Se ejecuta cuando cambian candidatosAPI, loading o error
console.log('Mi Candidatos para renderizar:', miCandidatos);

  // Muestra el esqueleto de carga si no hay datos en miCandidatos
  // y si la API aún está cargando o si hay un error y no se cargaron los datos locales inicialmente


  // Muestra un mensaje de error si la API falló y no hay datos locales para mostrar
  if (error && miCandidatos.length === 0) {
    return (
      <div className="text-center mt-20 text-red-600">
        Error al cargar los candidatos: {error.message}
      </div>
    );
  }

    // Esta variable auxiliar te permite decidir qué lista de candidatos renderizar
  // Si miCandidatos está vacío y la API aún está cargando o hubo un error,
  // podríamos considerar renderizar un esqueleto de carga para los datos locales.
  const showSkeleton = miCandidatos.length === 0 && (loading || error);

  return (
    <>
      <div className={styles.main}>
        <Sidebar />
        <div className={styles.header__movile}>
          <HeaderTw />
        </div>
        <div className={styles.main__container}>
          <h1 className="ml-[34rem] my-6 text-3xl font-extrabold text-french-blue-900 dark:text-french-blue-50">Lista de Candidatos 2026</h1>
        
        
          <div className={styles.main__container__card}>
            {showSkeleton ? (
              // Parte TRUE del ternario: Muestra un esqueleto de carga
              // Podrías mapear dataCandidatos para crear múltiples esqueletos
              // o simplemente mostrar un esqueleto genérico.
              // Usaremos el esqueleto genérico que ya tenías.
              // Si quieres un esqueleto por cada dataCandidato, entonces:
              dataCandidatos.map((candidato, index) => (
              
                  <div key={candidato._id || index}className="max-w-sm rounded overflow-hidden shadow-lg">
                  <div className="size-40 w-60 bg-french-blue-100 mx-auto"></div>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2"></div>
                    <div className="col-span-1 h-2 rounded bg-french-blue-100"></div>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <div className="space-y-3">
                      <div className="grid grid-cols-3 gap-2">
                        <div className="col-span-2 h-2 rounded bg-french-blue-100"></div>
                        <div className="col-span-1 h-2 rounded bg-french-blue-100"></div>
                      </div>
                      <div className="h-2 rounded bg-gray-200"></div>
                    </div>
                  </div>
                </div>  
              ))
            ) : (
              // Parte FALSE del ternario: Muestra los candidatos reales
              <>
             {/*    {miCandidatos.map((candidato) => (
                  <CardCandidato key={candidato._id} candidato={candidato} />
                ))} */}

                {/* Contenedor Grid Responsivo */}
             
                  <div className="flex flex-row  justify-between flex-wrap gap-6">
                    {miCandidatos.map((candidato) => (
                      <CardCandidato key={candidato._id} candidato={candidato} />
                    ))}
                  </div>      

                {/* Mensajes opcionales de carga/error, si ya se están mostrando datos */}
                {loading && miCandidatos.length > 0 && (
                  <p className="text-center text-gray-500 mt-4 col-span-full">Cargando datos más recientes...</p>
                )}
                {error && miCandidatos.length > 0 && (
                  <p className="text-center text-red-500 mt-4 col-span-full">Error al obtener datos de la API. Mostrando datos locales.</p>
                )}
              </>
            )}
          </div>
        </div>
        <Footertw />
      </div>
    </>
  );
}

