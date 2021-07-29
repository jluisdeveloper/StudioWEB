import { useState, useEffect } from 'react'

import styles from '../styles/Home.module.css'

import SeoComponent from '../components/seo/SeoComponent'

import Navbar from '../components/navigation/navbar'
import HomePage from '../components/home/index'


export default function Home() {
  const [scrollDir, setScrollDir] = useState("scrolling down");
  const [navOpen, setNavOpen] = useState(true);

  const updateShowNav = () => {
    setNavOpen(window.pageYOffset > 0 ? false : true);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", updateShowNav);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", updateShowNav);
    };
  });

  return (
    <div className="">
      <SeoComponent/>
      <Navbar 
          navOpen= { navOpen }
        />
      <main className="">
        <HomePage/>
        
      </main>

      <footer className={styles.footer}>        
      </footer>
    </div>
  )
}



  // useEffect(() => {
  //   const threshold = 0;
  //   let lastScrollY = window.pageYOffset;
  //   let ticking = false;

  //   console.log(lastScrollY)

  //   // const updateScrollDir = () => {
  //   //   const scrollY = window.pageYOffset;

  //   //   if (Math.abs(scrollY - lastScrollY) < threshold) {
  //   //     ticking = false;
  //   //     return;
  //   //   }
  //   //   setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up");
  //   //   lastScrollY = scrollY > 0 ? scrollY : 0;
  //   //   ticking = false;
  //   // };

  //   const onScroll = () => {
  //     if (!ticking) {
  //       window.requestAnimationFrame(updateScrollDir);
  //       ticking = true;
  //     }
  //   };

  //   window.addEventListener("scroll", onScroll);
  //   console.log(scrollDir);

  //   return () => window.removeEventListener("scroll", onScroll);
  // }, [scrollDir]);