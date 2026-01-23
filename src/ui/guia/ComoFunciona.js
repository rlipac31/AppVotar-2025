'use client';
import { montserrat, roboto } from '../../lib/fonts'
import { ShieldCheck, MousePointer2, BarChart2 } from 'lucide-react';

export default function ComoFuncionaCards() {
  const pasos = [
    {
      titulo: '1. Elige tu candidato',
      descripcion: 'Explora los perfiles presidenciales 2026 y selecciona la opción que mejor te represente.',
      icon: <MousePointer2 className="w-6 h-6" />,
    },
    {
      titulo: '2. Validación Segura',
      descripcion: 'Tu DNI valida que eres un ciudadano único. Se encripta y se descarta tras procesar el voto DNI: 2345...=*/*7>/*$$$%%%$$.',
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      titulo: '3. Resultados Reales',
      descripcion: 'Tu voto se suma al conteo nacional permitiendo ver estadísticas sin manipulación mediática.',
      icon: <BarChart2 className="w-6 h-6" />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className={`${montserrat.className} text-3xl md:text-4xl font-black text-french-blue-950 dark:text-white mb-4`}>
          ¿Cómo funciona el proceso?
        </h2>
        <div className="w-20 h-1.5 transition duration-500 bg-french-blue-200  dark:bg-french-blue-600 mx-auto rounded-full" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pasos.map((paso, index) => (
          <div 
            key={index} 
            className="group p-8 bg-slate-50 border border-gray-100 rounded-3xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-french-blue-900/20 dark:border-french-blue-800"
          >
            <div className="w-12 h-12 mb-6 rounded-xl bg-french-blue-50 text-french-blue-600 flex items-center justify-center transition-colors group-hover:bg-french-blue-600 group-hover:text-white dark:bg-french-blue-900">
              {paso.icon}
            </div>
            <h3 className={`${montserrat.className} text-xl font-bold mb-3 text-french-blue-900 dark:text-white`}>
              {paso.titulo}
            </h3>
            <p className={`${roboto.className} text-french-blue-700 dark:text-french-blue-100 leading-relaxed`}>
              {paso.descripcion}
            </p>
          </div>
        ))}
      </div>
    </div>   
  );
}