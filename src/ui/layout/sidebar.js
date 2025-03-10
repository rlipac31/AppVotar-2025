import ResultVotos from '../result/ResultVotos'

import styles from './sidebar.module.css'
import NavMenu from './menu/NavMenu'



const Sidebar = () => {
  return (
    <div className={styles.main__container__sidebar}>
          <NavMenu />
           <ResultVotos />
     </div>
  )
}

export default Sidebar