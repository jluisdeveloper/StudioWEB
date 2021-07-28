import { useState, useEffect } from 'react'
import styles from './styles/Navigation.module.scss'
import SocialBar from './social'

const Navbar = () => {
  const [status, setStatus] = useState(false)

  const handleChangeMenu = () => {
    setStatus(!status)
  }

  return (
    <header className={ styles.header_main }>
      <div className={ styles.header_container } >
        <div className={ styles.navigation } style={{ height: "100vh" }} > {/* esto debe actualizarse cuando se baje el scroll y bajar de 100VH a 100 px */}
          <div className={ styles.toggle_menu } style={{ height: "153px" }} onClick={()=> handleChangeMenu() } >  {/* esto debe actualizarse cuando se baje el scroll y bajar de 153 a 100 px */}
            <div className={ styles.animation } >
              <div className={ styles.icon } >
                <div className={ status ? styles.activeMenuLines : styles.lines } >
                </div>
              </div>
            </div>
          </div>
          <SocialBar/>
        </div>

        <div className={ status ? styles.menu_out_active : styles.menu_out } style={{ height: "100vh" }} > { /* esto debe cambiar cuando hay scroll abajo scroll a 0px */ }
          <div className={ status ? styles.menu_overlay_active : styles.menu_overlay } onClick={ ()=>handleChangeMenu() } > </div>

          <div className={ styles.menu_inner } >
            { /* a => logo studio checar mas adelante */ }
            <nav>
              <div className={ status ? styles.menu_item_container_active : styles.menu_item_container }>
                <a href="#" className={ status ? styles.menu_item_active : styles.menu_item } > Inicio </a>
              </div>
              <div className={ status ? styles.menu_item_container_active : styles.menu_item_container }>
                <a href="#" className={ status ? styles.menu_item_active : styles.menu_item } > Proyectos Realizados </a>
              </div>
              <div className={ status ? styles.menu_item_container_active : styles.menu_item_container }>
                <a href="#" className={ status ? styles.menu_item_active : styles.menu_item } > Blog </a>
              </div>
              <div className={ status ? styles.menu_item_container_active : styles.menu_item_container }>
                <a href="#" className={ status ? styles.menu_item_active : styles.menu_item } > Contacto </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
      
    </header>
    
  )
}

export default Navbar
