import { set } from "mongoose";
import { useState, useEffect } from "react";

const useCandidato = () => {

  const [ candidatos, setCandidatos ] = useState(null);
 
   const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    const loadCandidato= async()=>{
      console.log('precesss.env>> ', process.env.NEXT_PUBLIC_API_URL);

      try {
       // const URL = `https://app-votos-cnnb.onrender.com/api/candidatos/`;
        const URL =`${process.env.NEXT_PUBLIC_API_URL}/candidatos/`;
        const response = await fetch(URL);
        const resultado = await response.json();
       // console.log('API result:', resultado);ss
        setCandidatos(resultado.candidatos)
        setLoading(false);
      } catch (error) {
        return console.log('hubo un Error tipo:',error);
      }
  
    }
    loadCandidato();
   
  }, []); //El ar ray vacío asegura que useEffect se ejecute solo una vez

  

  return (
   // proppiedates
      candidatos

   //metodos
  )
}

export default useCandidato