import React from 'react'
import style from './footer.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
       <footer className={style.footer}>
      <div className={style.footer__container}>
        <p>web Desarrrollada por &copy; 2024 rlipac31@gmail.com Todos los derechos reservados.</p>
        <Link href={'https://github.com/rlipac31'}>GitHub:rlipac31</Link> 
      </div>
        
      </footer>
  )
}

export default Footer