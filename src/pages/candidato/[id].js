import Sidebar from '../../ui/layout/sidebar';
import { notFound } from 'next/navigation';
import styles from '../../styles/Home.module.css';
import styles2 from './candidatoId.module.css'
import Image from 'next/image';
import Formulario from '../../ui/formulario/Formulario';
import NavMenu from '../../ui/layout/menu/NavMenu';
import HeaderTw from '../../ui/layout/header/HeaderTw';
import Link from 'next/link';
import Footer from '../../ui/layout/footer/Footer';
import { montserrat, roboto } from '../../lib/fonts'
export async function getServerSideProps(context) {
  const { id } = context.params;

  //const res = await fetch(`http://localhost:5000/api/candidatos/${id}`);

  const res = await fetch(`https://app-votos-cnnb.onrender.com/api/candidatos/${id}`);

  const { candidato } = await res.json();
  const candidatoId = candidato;
  if (!candidatoId) {
    return { notFound: true };
  }

  return {

    props: { candidatoId }
  };
}

export default function Candidato({ candidatoId }) {

  if (candidatoId != null) {
    const { nameCandidato, surname, imagen, political_party, biography, _id } = candidatoId;
    //const { url } = imagen;
    return (
      <div className={styles.main}>
         <div className={styles.header__movile}>
        {/*   <NavMenu /> */}
          <HeaderTw />
        </div>
        <Sidebar />
       
        {
          !candidatoId ? <p>No ahy canddidato</p>
            :
            <div className={styles2.container__candidato}>

              <div className={styles2.container__candidato__info}>
                <div className={styles2.container__candidato__info__datos}>
                  <Image
                    className={styles2.container__candidato__info__image}
                    src={imagen.url}
                    width={200}
                    height={300}
                    alt={imagen.alt}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"

                  />
                      <div className={styles2.info__datos__container}>
                           <div className={styles2.info__datos__container__names}>
                              <p>Nombres:<br></br>
                              {nameCandidato.firstName} {nameCandidato.lastName}</p>
                              <p>Apellidos:<br></br> 
                                {surname.paternal} {surname.maternal}</p>
                            </div>
                            <div className={styles2.info__datos__container__partido}>                       
                              
                                  <Image
                                    src={political_party.imgeUrl}
                                    width={170}
                                    height={170}
                                    alt={`imagen Partido candidato`}
                                  />
                                  <p>Partido Politico: {political_party.name}</p>
                            </div>
                      </div>
                </div>
                <div className={`${styles2.container__candidato__info__reseña} ${roboto.className}`}>
                  <p><strong> Reseña Biografica: </strong> {biography.resumenBio}</p>
                 
                  <Link  href={biography.link_wiki}>saber mas</Link>
                </div>

              </div>
              <div className={styles2.container__candidato__formulario}>
                <Formulario />
              </div>
           
            </div>

        }
        
          <Footer/>
      </div>

    )
  }

}
