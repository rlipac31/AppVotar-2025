'use client'
import { useEffect, useState } from 'react';
import { ElectionResults } from './ElectionCharts.js';

const ResultVotos = ({ votosCandidato, nameCandidatos }) => {
 //  const [chartData, setChartData] = useState(votosCandidato || []);
//  const [chartLabels, setChartLabels] = useState(nameCandidatos || []);
  const [dataApi, setDataApi] = useState([]);
  const [mesageError, setMensageError]=useState('');

  useEffect(() => {
    const fetchData = async () => {
      console.log("Iniciando fetch de datos...");
      try {
        const URL = `${process.env.NEXT_PUBLIC_API_URL}/votos/result-votos`;
        const res = await fetch(URL);
      //  console.log("Respuesta recibida del servidor votos:", res);
        if(!res.ok){
          setMensageError('Error al obtener los datos');
            <div className='bg-red-200 text-2xl text-red-950'>{mesageError}</div>
        }
        const data = await res.json();
      //  console.log("Datos recibidos del servidor Data   votos:", data);
        setDataApi(data);
      //  console.log("Estado dataApi actualizado:", dataApi);
      //  console.log("Datos actualizados recibidos Desde Result Votos:", dataApi);
      /*   if (data.votosCandidato) {
          console.log("Datos actualizados recibidos Desde Result Votos:", data.nameCandidatos, data.votosCandidato);
          setChartData(data.votosCandidato);
          setChartLabels(data.nameCandidatos.nombre);
        } */
      } catch (error) {
        console.error("Error actualizando datos:", error);
      }
    };

    // Actualización automática cada 30 segundos para ser "tiempo real"
    fetchData();
    const interval = setInterval(fetchData, 600000);
     () => clearInterval(interval);
    
    
  }, []);

   if (!dataApi.length < 0) {
    return (
      <div className=" flex items-center justify-center min-h-screen bg-french-blue-50 text-french-blue-900
       dark:bg-french-blue-950 dark:text-french-blue-100">
        <p className="animate-pulse">Cargando resultados oficiales...</p>
      </div>
    );
  } 

  return (
    <main className="w-[94vw]  md:w-full px-0 md:border-green-600 min-h-screen bg-white dark:bg-french-blue-900 p-4 md:p-8 "
    style={{
      position:'relative',
      right:'12px'
    }}
    >
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-extrabold text-white tracking-tight bg-french-blue-900 
          dark:bg-french-blue-900 px-6 py-4 rounded-lg inline-block">
            Vota<span className="text-french-blue-500 dark:text-french-blue-400">Libre</span>
          </h1>
          <p className="text-french-blue-300">Conteo de votos en tiempo real - Elecciones Presidenciales</p>
        </header>

      {/* Pasamos directamente el array resultadoVotos de tu API */}
      <ElectionResults resultadoVotos={dataApi.resultadoVotos} />
        <footer className="text-center text-french-blue-500 text-sm">
          © 2026 VotaLibre - Sistema de Transparencia Electoral
        </footer>
      </div>
    </main>
  );
};

export default ResultVotos;