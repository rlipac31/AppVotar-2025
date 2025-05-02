
import { useState, useEffect } from "react";

import styles from "../../styles/Home.module.css";
import Sidebar from "../../ui/layout/sidebar";
import useCandidato from "../../hooks/useCandidato";
import CardCandidato from "../../ui/candidato/cardCandidato";


//
export default function CandiatoPage() {
const candidatos = useCandidato();


  return (
    <>
       <div className={styles.main}>
          
              <Sidebar />
              <div className={styles.main__container}>
                  <h1 className={styles.main__container__title}>Lista de Candidatos  2026</h1>
              
                <div className={styles.main__container__card}>
                    {
                      candidatos && candidatos.length > 0 ? (
                        candidatos.map(candidato => (                                
                          <CardCandidato key={candidato._id} candidato={candidato} />                           
                          ))
                        ) : (
                          <p>No hay candidatos disponibles</p>
                        )
                    }  
                </div>

              </div>
         </div>
    </>
  );
}
 