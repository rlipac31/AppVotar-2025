import { useState, useEffect } from "react";

const useCandidato = () => {

  const [ candidatos, setCandidatos ] = useState(null);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    const loadCandidato= async()=>{

      try {
        //const URL = `https://app-votos-cnnb.onrender.com/api/candidatos/`;
        const URL =`http://localhost:5000/api/candidatos/`;
        const response = await fetch(URL);
        const resultado = await response.json();
       // console.log('API result:', resultado);
        setCandidatos(resultado.candidatos)
        setLoading(false);
      } catch (error) {
        return console.log('hubo un Error tipo:',error);
      }
  
    }
    loadCandidato();
   
  }, []); //El array vacío asegura que useEffect se ejecute solo una vez
  

  return (
   // proppiedates
      candidatos

   //metodos
  )
}

export default useCandidato