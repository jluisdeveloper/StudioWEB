import { useState, useEffect } from 'react'
import styles from './styles/Navigation.module.scss'
import SocialBar from './social'

const Navbar = (props) => {
  const { navOpen } = props

  const [status, setStatus] = useState(false)

  const handleChangeMenu = () => {
    setStatus(!status)
  }

  return (
    <header className={ styles.header_main }>
      <div className={ styles.header_container } >
        <div className={ styles.navigation } style={ navOpen ? { height: "100vh" } : { height: "100px" } } > 
          <div className={ styles.toggle_menu } style={ navOpen ? { height: "153px" } : { height: "100px" } } onClick={()=> handleChangeMenu() } > 
            <div className={ styles.animation } >
              <div className={ styles.icon } >
                <div className={ status ? styles.activeMenuLines : styles.lines } >
                </div>
              </div>
            </div>
          </div>
          <SocialBar/>
        </div>

        <div className={ status ? styles.menu_out_active : styles.menu_out } style={ navOpen ? { height: "100vh" } : { height: "0px" } } > 
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
