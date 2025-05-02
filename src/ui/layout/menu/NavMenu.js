import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './nav-menu.module.css'
import logoVote from '../../../../public/votos/vote.svg'
//import Boton from '../../boton/Boton'
import AlertPopup from '../../alert/Popup'
const NavMenu = () => {
  return (
    <div className={styles.menu__container}>
      <Image
        src={logoVote}
        width={60}
        height={100}
      />  
      <nav>
          <ul className={styles.menu__container__links}>
            <Link href={'/'}>Home</Link>
            <Link href={'/candidatos'}>Candidatos</Link>
            <Link href={'#'}>About</Link>
              <Link href={'#'}> 
              {/* 
                    <Boton
                        texto={"Login"}
                        textColor={"#ffffff"}
                        bgColor={'var(--primary-color)'}
                        size={'medium'}
                   />
                     */}
                    <AlertPopup/>
                 
                </Link>

          </ul>
         
      </nav>
    </div>
  )
}

export default NavMenu  