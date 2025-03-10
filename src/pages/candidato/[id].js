import Sidebar from '../../ui/layout/sidebar';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from '../../styles/Home.module.css';
import styles2 from './candidatoId.module.css'
import Image from 'next/image';
import Formulario from '../../ui/formulario/Formulario';
export default function Candidato() {
  const { query } = useRouter();
  const { id } = query;
  const [candidatoId, setCandidatoId] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadCandidato = async () => {
      try {
        const  URL = `https://app-votos-cnnb.onrender.com/api/candidatos/${id}`;
       // const urlLocal = `http://localhost:5000/api/candidatos/${id}`;
        const response = await fetch(URL);
        const {candidato} = await response.json();
        setCandidatoId(candidato);
        setLoading(false);
      } catch (error) {
        return console.log('hubo un Error tipo:', error);
      }

    }
    loadCandidato();

  }, []); //El array vacío asegura que useEffect se ejecute solo una vez

  if(candidatoId != null){
    const { nameCandidato, surname, imagen, political_party, biography, _id }=candidatoId;
    return (
      <div className={styles.main}>
        <Sidebar />
        {
          loading ? <p>No ahy canddidato</p>
            :
            <div className={styles2.container__candidato}>
              
                <div className={styles2.container__candidato__info}>            
                   <div className={styles2.container__candidato__info__datos}>                     
                          <Image
                          className={styles2.container__candidato__info__image}
                            src={imagen.url}
                            width={200}
                            height={300}
                            alt={`imagen Partido candidato`}
                          />
                          <div className={styles2.info__datos__container}>
                            <div className={styles2.info__datos__container__names}>
                              <p>Nombre: {nameCandidato.firstName}</p>
                              <p>{surname.paternal} {surname.maternal}</p>
                            </div>                        
                               <p>Partido Politico: {political_party.name}</p>
                               <Image
                                  
                                    src={political_party.imageUrl}
                                    width={200}
                                    height={250}
                                    alt={`imagen Partido candidato`}
                                  />                          
                          </div>
                      </div>
                 <div className={styles2.container__candidato__info__reseña}>
                     <p><strong> Reseña Biografica: </strong> {biography.resumenBio}</p>
                     < a  href={biography.link_wiki}>saber mas</a>
                 </div>
                  
                </div>
            <div className={styles2.container__candidato__formulario}>

              <Formulario/>
            </div>
         </div>
  
  }
      </div>
  
    )
  }
  
}
