'use client';
import { GrValidate } from "react-icons/gr";
import style from './guia.module.css'

export default function ComoFuncionaCards() {
  const pasos = [
    {
      titulo: '1. Elige tu candidato',
      descripcion: 'Accede a la lista de postulantes presidenciales y selecciona por quién deseas votar.',
    },
    {
      titulo: '2. Valida tu voto con DNI',
      descripcion: 'Usamos tu número de DNI solo para evitar votos duplicados. No guardamos tu identidad.',
    },
    {
      titulo: '3. Tu voto cuenta',
      descripcion: 'Sumamos tu voto de forma anónima y actualizamos en tiempo real los resultados.',
    },
  ];

  return (
  <div className={style.guia}>
    <h3>Como Funciona?</h3>
    
    <div className={style.guia__container}>
      {pasos.map((paso, index) => (
        <div key={index} className={style.guia__container__card}>
          <div className={style.card__title__container}>
          <h3 className="text-xl font-semibold mb-2 text-blue-600">{paso.titulo}</h3>
          <GrValidate
          className={style.title__container__icon}
          />
          </div>
         
          <p className="text-gray-700">{paso.descripcion}</p>
        </div>
      ))}
    </div>
    </div>   
  );
}
