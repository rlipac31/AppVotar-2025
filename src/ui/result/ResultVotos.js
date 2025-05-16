
'use client'

import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';
//import PieChart from './PieChart'
import BarChart from './BartChart'
import styles from './result.module.css'


export async function getServerSideProps() {
  // 1. Configura la URL correctamente (usa variables de entorno)
 /*  const API_URL = process.env.NODE_ENV === 'production'
    ? 'https://app-votos-cnnb.onrender.com/api/votos/result-votos'
    : 'http://localhost:5000/api/votos/result-votos'; */
     const API_URL = 'https://app-votos-cnnb.onrender.com/api/votos/result-votos';
  try {
    // 2. Añade headers y configuración importante
    const res = await fetch(API_URL, {
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store' // Importante para SSR
    });

    // 3. Verificación exhaustiva de la respuesta
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      console.error('Error en la API:', {
        status: res.status,
        statusText: res.statusText,
        errorData
      });
      return {
        props: {
          votosCandidato: null,
          error: `Error ${res.status}: ${res.statusText}`
        }
      };
    }

    // 4. Procesamiento de datos seguro
    const data = await res.json();

    if (!data.votosCandidato) {
      throw new Error('La propiedad votosCandidato no existe en la respuesta');
    }

    // 5. Retorna los props
    return {
      props: {
        votosCandidato: data.votosCandidato || [],
        nameCandidatos: data.nameCandidatos || []
      }
    };

  } catch (error) {
    // 6. Manejo detallado de errores
    console.error('Error en getServerSideProps:', error.message);
    return {
      props: {
        votosCandidato: null,
        error: error.message
      }
    };
  }
}



const ResultVotos =  ({ votosCandidato, nameCandidatos }) => {

  const [chartData, setChartData] = useState(votosCandidato);
  const [chartLabels, setChartLabels] = useState(nameCandidatos);
  

   useEffect(() => {
      const fetchData = async () => {
      /*   const URL = process.env.NODE_ENV === 'production'
        ? 'https://app-votos-cnnb.onrender.com/api/votos/result-votos'
        : 'http://localhost:5000/api/votos/result-votos'; */
       const URL = 'https://app-votos-cnnb.onrender.com/api/votos/result-votos'; 
      const res = await fetch(URL);
      const { votosCandidato, nameCandidatos } = await res.json();
      setChartData(votosCandidato);
      setChartLabels(nameCandidatos);    
    };
    fetchData();
  }, []);
  
  return (
    <div className={styles.char__container}>
      <BarChart
        data={chartData}
        labels={chartLabels} />
    </div>
  );
};

export default ResultVotos;
