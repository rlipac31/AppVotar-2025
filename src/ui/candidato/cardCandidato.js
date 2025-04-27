import styles from './card.module.css'
import {  inter, lusitana  } from '../fonts';
import Image from 'next/image';
import Boton from '../boton/Boton';
import Link from 'next/link';

const CardCandidato = ({candidato}) => {
  const { nameCandidato, surname, imagen, political_party, biography, _id }= candidato;
  return (
    <>
      <div className={styles.card}>
      <Image
            className={styles.card__image}
              src={imagen.url}
              width={90}
              height={120}
              alt={imagen.alt}
          />  
          <article className={`${styles.card__article} ${inter.className} `}>
          <h4 className={`${styles.card__article__title} ${inter.className} `}>{nameCandidato.firstName} {surname.paternal} </h4>
            <div className={styles.card__article__items}>
                <p className={`${styles.card__article__items__parrafo}  `}>{political_party.name}</p>
                  <Image
                  src={political_party.imgeUrl}
                  width={40}
                  height={40}
                  alt={`imagen Partido candidato`}
                />  
            </div>

            <Link
                className={styles.card__article__enlace}              
                href={`/candidato/${_id}`} 
             >
              <Boton
                texto={'mas info'}
                textColor={'#ffffff'} 
                bgColor={ 'var(--primary-color)'}
                size={'small'}
              />

          </Link>
           </article>
         
      </div>
    </>
  )
}

export default CardCandidato