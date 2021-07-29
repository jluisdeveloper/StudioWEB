import styles from './HomePage.module.scss'

const HomePage = () => {
  return (
    <div className="">
      <div className={ styles.home_wrapper } >
        <div className={ styles.content } >
          <div className={ styles.left_section } >
            { /* ACA EMPIEZA EL PARALLAX CHECAR AMS ADELANTE */ }
            <div className={ styles.description_container } style={ { "transform": "matrix(1, 0, 0, 1, 2.058, -8.512)" } } >
              <h3 className={ styles.description_title }>
                Lleva tu Negocio a otro <br />  Nivel
              </h3>
              <p  className={ styles.description_text }>
                Tener una web hoy, no es una alternativa es una necesidad y en Studioaqp lo sabemos, es por ello que trabajamos constantemente en ofrecerte servicios acorde a tus requerimientos.
              </p>
              <a target="_blank" rel="noopener noreferrer" href="#" className={ styles.fast_link } > Enterate cómo </a>
            </div>
            <div  className={ styles.bg_left_section } >
            </div>
            { /* ACA TERMINA EL PARALLAX */ }            
          </div>
          <div className={ styles.right_section }>
              <div className={ styles.message_container } >
                <div className={ styles.message_text } >
                  <h2 className={ styles.message_text_inner }>
                    Crezcamos Juntos. <br />
                    Despegar, Crecer. <br />
                    Lanzar.
                  </h2>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
