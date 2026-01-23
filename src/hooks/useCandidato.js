import { set } from "mongoose";
import { useState, useEffect } from "react";
//imprptando datos  local
//import candidatosLocal from "../pages/api/dataCandidatos"

const useCandidato = () => {

  const [ candidatos, setCandidatos ] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
 

    const loadCandidato= async()=>{
    
      try {
      //  const URL = `https://app-votos-cnnb.onrender.com/api/candidatos/`;
        const URL =`${process.env.NEXT_PUBLIC_API_URL}/candidatos/`;
        const response = await fetch(URL);
        const resultado = await response.json();
        console.log('API result fuera :', resultado);
        setCandidatos(resultado.candidatos)
        if(candidatos){
           setLoading(false);
        }
        console.log('candidatos resulat :', candidatos);
      } catch (error) {
           setError(error);
        return console.log('hubo un Error tipo:',error);
      }
  
    }
    loadCandidato();
   
  }, []); //El ar ray vacío asegura que useEffect se ejecute solo una vez

 return { candidatos: candidatos, loading, error };
}

export default useCandidato