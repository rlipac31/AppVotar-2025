// app/page.tsx
//import Sidebar from '../ui/layout/sidebar';
import { montserrat,  roboto } from '../lib/fonts';
import style from '../styles/Home.module.css'
import Image from 'next/image';
import logo from '../../public/votos/vote.svg'
import Link from 'next/link';
import colage from '../../public/votos/colage.png'
import ResultVotos from '../ui/result/ResultVotos';
import ComoFuncionaCards from '../ui/guia/ComoFunciona';
import Footer from '../ui/layout/footer/Footer';
import HeaderTw from '../ui/layout/header/HeaderTw';

//s
export default function Home() {
/*   const colage = `https://res.cloudinary.com/rlipac/image/upload/v1746284696/lima-costa_1920_etpbpg.jpghttps://res.cloudinary.com/rlipac/image/upload/v1746284696/lima-costa_1920_etpbpg.jpg`; */
  return (
  
     <div className={style.main__container}>
      <header className={style.main__container__header}>
       <HeaderTw/>
      </header>
      <section className={style.main__container__hero}>
        <h2 className='font-monse font-medium text-4xl'>Encuestas reales sin intereses politicos.</h2>
        <div className={style.container__hero}>
          
              <div className={style.hero__mascara}>       
                    <article className={`${style.mascara__article} ${montserrat.className}`}>
                      <p className={style.article__slogan}>Encuestas reales, <span>sin</span> intereses politicos. </p>
                        <p className={style.article__slogan}>Votas tú, <span>no </span>los medios.</p>
                        <p className={`${style.mascara__article__parrafo} ${roboto.className}`}>Validamos con DNI para evitar fraudes, sin guardar datos personales.
                        Solo contamos lo que de verdad piensa el país.
                        Sin manipulación, sin filtros, solo tu opinión real.
                        Tus datos no se almacenan ni se comparten. Solo tu voz construye el resultado</p>
                    </article>
                </div>
           <div className={style.hero__mascara}>     
            
           <ResultVotos />
            </div>
       </div>     
      </section>
      <section className={style.main__container__comofunciona}   id="como-funciona">
        <ComoFuncionaCards />
      </section>
     <Footer/>
    </div>
 
  
  );
}