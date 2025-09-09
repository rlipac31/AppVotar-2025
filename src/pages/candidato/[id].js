import Sidebar from '../../ui/layout/sidebar';
import { notFound } from 'next/navigation';
import styles from '../../styles/Home.module.css';
import styles2 from './candidatoId.module.css'
import Image from 'next/image';
import Formulario from '../../ui/formulario/Formulario';
import NavMenu from '../../ui/layout/menu/NavMenu';
import HeaderTw from '../../ui/layout/header/HeaderTw';
import Link from 'next/link';
import Footertw from '../../ui/layout/footer/Footertw';
import { montserrat, roboto } from '../../lib/fonts'
export async function getServerSideProps(context) {
  const { id } = context.params;

  const res = await fetch(`${process.env.SERVER_API_BASE_URL}/candidatos/${id}`);// ruta valida solo con "use client"

 // const res = await fetch(`https://app-votos-cnnb.onrender.com/api/candidatos/${id}`);

  const { candidato } = await res.json();

  const candidatoId = candidato;
  if (!candidatoId) {
    return { notFound: true };
  }
  console.log("candidato encontado:>>>>>>> ", candidatoId)


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
          !candidatoId ?
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="size-40 w-60 bg-gray-200 mx-auto"></div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"></div>
                <div className="col-span-1 h-2 rounded bg-gray-200"></div>
              </div>
              <div className="px-6 pt-4 pb-2">
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                    <div className="col-span-1 h-2 rounded bg-gray-200"></div>
                  </div>
                  <div className="h-2 rounded bg-gray-200"></div>
                </div>
              </div>
            </div>
            :
            <div className={styles2.container__candidato}>

              <div className={styles2.container__candidato__info}>
                <div className={styles2.container__candidato__info__datos}>
                  {imagen ?
                    <Image
                      className={styles2.container__candidato__info__image}
                      src={imagen.url}
                      width={200}
                      height={300}
                      alt={imagen.alt}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"

                    /> : <div className="size-40 w-60 bg-gray-200 mx-auto"></div>}

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
                        width={150}
                        height={150}
                        alt={`imagen Partido candidato`}
                      />
                      <p>Partido Politico: {political_party.name}</p>
                    </div>
                  </div>
                </div>
                <div className={`${styles2.container__candidato__info__reseña} ${roboto.className}`}>
                  <p><strong> Reseña Biografica: </strong> {biography.resumenBio}...</p>

                  <Link href={biography.link_wiki} target="_blank"
                    className="text-blue-700 font-medium hover:text-blue-900 hover:font-bold"
                  >saber mas</Link>
                </div>

              </div>
              <div className={styles2.container__candidato__formulario}>
                <Formulario />
              </div>

            </div>

        }

        {/*  <Footer/> */}
        <Footertw />
      </div>

    )
  }

}
