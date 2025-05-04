import styles from './card.module.css'
import {  inter, lusitana  } from '../fonts';
//import SafeImage from '../candidato/SafeImage';//genera conflictos
import Image from 'next/image';
import Boton from '../boton/Boton';
import Link from 'next/link';

const CardCandidato = ({candidato}) => {
  const { nameCandidato, surname, imagen, political_party, biography, _id }= candidato;
  const { url } = imagen;

  return (
    <>
      <div className={styles.card}>
              { url ?
              <Image
              className={styles.card__image}
                src={url || null}
                width={90}
                height={120}
                alt={imagen.alt}   
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              
            /> 
                : 
                null  
            }
          
          <article className={`${styles.card__article} ${inter.className} `}>
          <h4 className={`${styles.card__article__title} ${inter.className} `}>{nameCandidato.firstName} {surname.paternal} </h4>
            <div className={styles.card__article__items}>
                <p className={`${styles.card__article__items__parrafo}  `}>{political_party.name}</p>

                {political_party.imgeUrl ? 
                  <Image
                  src={political_party.imgeUrl}
                  
                  width={40}
                  height={40}
                  alt={`imagen Partido candidato`}
                  sizes="(max-width: 768px) 3rem, (max-width: 1200px) 4rem" 
                />  
                 : null}

            </div>

            <Link
                className={styles.card__article__enlace}              
                href={`/candidato/${_id}`} 
             >
              <Boton
                texto={'mas info'}
                textColor={'#ffffff'} 
                bgColor={ 'var(--primary-color)'}
                size={'medium'}
              />

          </Link>
           </article>
         
      </div>
    </>
  )
}

export default CardCandidato