import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './nav-menu.module.css'
import logoVote from '../../../../public/votos/vote.svg'
import Boton from '../../boton/Boton'
//import AlertPopup from '../../alert/Popup'
import { montserrat} from '../../../lib/fonts'
const NavMenu = () => {
  return (
    <div className={styles.menu__container}>
      <Image
        src={logoVote}
        width={60}
        height={100}
        alt={'logo-AppVotar'}
        sizes="(max-width: 768px) 2rem, (max-width: 1200px) 4rem" 
      />  
      <nav>
          <ul className={`${styles.menu__container__links}  ${montserrat.className}`}>
            <Link href={'/'}>Home</Link>
            <Link href={'/candidatos'}>Candidatos</Link>
            <Link href={'#'}>Resultados</Link>
            <Link href={'#'}> 
            
                    <Boton
                        texto={"Login"}
                        textColor={"#ffffff"}
                        bgColor={'var(--primary-color)'}
                        size={'medium'}
                   />
                     
                    
                 
                </Link>

          </ul>
         
      </nav>
    </div>
  )
}

export default NavMenu  