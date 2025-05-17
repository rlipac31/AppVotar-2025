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
//import Footer from '../ui/layout/footer/Footer';
import HeaderTw from '../ui/layout/header/HeaderTw';
import Footer from '../ui/layout/footer/Footertw';
import Footertw from '../ui/layout/footer/Footertw';
//s
export default function Home() {
/*   const colage = `https://res.cloudinary.com/rlipac/image/upload/v1746284696/lima-costa_1920_etpbpg.jpghttps://res.cloudinary.com/rlipac/image/upload/v1746284696/lima-costa_1920_etpbpg.jpg`; */
  return (
  
     <div className={style.main__container}>
      <header className={style.main__container__header}>
       <HeaderTw/>
      </header>
      <section className={style.main__container__hero}>
       
        <div className={style.container__hero}>       
              <div className={style.hero__mascara}>       
                    <article className={`${style.mascara__article} ${montserrat.className}`}>
                      <p className={style.article__slogan}>Encuestas reales, <span>sin</span> intereses politicos. </p>
                        <p className={style.article__slogan}>Votas tú, <span>no </span>los medios.</p>
                        <p className={`${style.mascara__article__parrafo} ${roboto.className}`}>Validamos con DNI para evitar fraudes, sin guardar datos personales.
                        Solo contamos lo que de verdad piensa el país.
                        Sin manipulación, sin filtros, solo tu opinión real.
                        Tus datos no se almacenan ni se comparten. Solo tu voz construye el resultado</p>
                      <Link href={'/candidatos'}target="_blank">
                        <button
                          
                          className=" my-2 bg-blue-700 hover:bg-blue-800 text-xl text-white font-semibold py-2 px-8 rounded-xl shadow-md transition duration-300 cursor-pointer"
                        >Vota ya</button>
                      </Link>
                       
                    </article>
                </div>
        
       </div>     
      </section>
      <section className={style.main__container__comofunciona}   id="como-funciona">
        <ComoFuncionaCards />
      </section>
      <div className={style.main__container__resultados} id="resultados">   
          <h2 className=' text-center text-slate-800 my-10 text-3xl font-semibold'>Resultados</h2>   
           <ResultVotos />
      </div>
    {/*  <Footer/> */}
    <Footertw/>
    </div>
 
  
  );
}