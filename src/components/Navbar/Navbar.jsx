import React ,{useState} from 'react';

import styles from './Navbar.module.css';





const Navbar = () => {
    const[menuOpen,setMenuOpen]=useState(false);

  return (
   <nav className={styles.navbar}>
    <a className={styles.title} href="/">Portfolio</a>
    
    <div className={styles.menu}>
        <img className={styles.menubtn} src={menuOpen?'public/nav/wrongmark.svg':'public/nav/bars.svg'} onClick={()=>setMenuOpen(!menuOpen)} />
        <ul className={`${styles.items} ${menuOpen&&styles.menuopen}`} onClick={()=>setMenuOpen(false)} >
            <li><a href="/about">About</a></li>
            <li><a href="/Projects">Projects</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </div>
   </nav>
  )
}

export default Navbar;
