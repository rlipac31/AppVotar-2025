import React from 'react'
import { useState, useEffect } from 'react';

const useVotos = () => {
  
    const [ votos, setVotos ] = useState(null);
    const [ loading, setLoading ] = useState(false);
  
    useEffect(() => {
      const loadVotos= async()=>{
  
        try {
          const URL =`https://app-votos-cnnb.onrender.com/api/votos/rresult-votos`;
          const urlLocal=`http://localhost:5000/api/votos/result-votos`;
          const response = await fetch(URL);
          const resultado = await response.json();
         // console.log('API result:', resultado);
          setVotos(resultado)
          setLoading(false);
        } catch (error) {
          return console.log('hubo un Error tipo:',error);
        }
    
      }
      loadVotos();
     
    }, []); //El array vacío asegura que useEffect se ejecute solo una vez
    
  return (

      // proppiedates
      votos
  )
}

export default useVotos