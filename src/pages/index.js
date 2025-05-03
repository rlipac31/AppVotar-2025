// app/page.tsx
//import Sidebar from '../ui/layout/sidebar';
import style from '../styles/Home.module.css'
import Image from 'next/image';
import logo from '../../public/votos/vote.svg'
import Link from 'next/link';
import colage from '../../public/votos/colage.png'
import ResultVotos from '../ui/result/ResultVotos';
import ComoFuncionaCards from '../ui/guia/ComoFunciona';
//
export default function Home() {
  return (
  
     <div className={style.main__container}>
      <header className={style.main__container__header}>
        <div className={style.header__menu}>
          <div className={style.header__menu__logo}>
           <Link className={style.logo} href={'/'}>
          
           <Image
              src={logo}
              width={60}
              height={60}
            />
          <p>AppVotar</p> 
           </Link> 
          </div>
          <ul className={style.menu__links}>
            <li className={style.menu__links__link}> <Link href={'/'}>Home</Link></li>
            <li className={style.menu__links__link}> <Link href={'#'}>Resultados</Link></li>
            <li className={style.menu__links__link}> <Link href={'/candidatos'}>Candidatos</Link></li>
            <li className={style.menu__links__link}> <Link href={'#como-funciona'}>Como funciona</Link></li>
            <li className={style.menu__links__link}> <Link href={'#'}>About</Link></li>
          </ul>
        </div>
      </header>
      <section className={style.main__container__hero}>
        <div className={style.container__hero}>
              <div className={style.hero__mascara}>       
                    <article className={style.mascara__article}>
                      <p className={style.article__slogan}>Encuestas reales, <span>sin</span> intereses politicos. </p>
                        <p className={style.article__slogan}>Votas tú, <span>no </span>los medios.</p>
                        <p className={style.mascara__article__parrafo}>Validamos con DNI para evitar fraudes, sin guardar datos personales.
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
      <footer className={style.footer}>
      
        <p>web Desarrrollada por &copy; 2024 rlipac31@gmail.com Todos los derechos reservados.</p>
        <Link href={'https://github.com/rlipac31'}>GitHub:rlipac31</Link>
      </footer>
    </div>
 
  
  );
}