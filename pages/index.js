import styles from '../styles/Home.module.css'

import SeoComponent from '../components/seo/SeoComponent'

import Navbar from '../components/navigation/navbar'

export default function Home() {
  return (
    <div className="container-fluid">
      <SeoComponent/>

      <main className="row">
        <Navbar />
      </main>

      <footer className={styles.footer}>        
      </footer>
    </div>
  )
}
