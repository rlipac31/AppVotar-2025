import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../../public/votos/vote.svg'
import style from  './header.module.css'

 const Header = () => {
  return (
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
        <li className={style.menu__links__link}> <Link href={'/#resultados'}>Resultados</Link></li>
        <li className={style.menu__links__link}> <Link href={'/candidatos'}>Candidatos</Link></li>
        <li className={style.menu__links__link}> <Link href={'/#como-funciona'}>Como funciona</Link></li>
        <li className={style.menu__links__link}> <Link href={'#'}>About</Link></li>
      </ul>
    </div>
  )
}
export  default Header;
