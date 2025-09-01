import React from 'react'

import styles from './Hero.module.css'

const hero = () => {
  return (
   <section className={styles.container}>
    <div className={styles.content}>
    <h1 className={styles.title}>Hi, I'm geeta</h1>
    <p className={styles.desc}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, et?
    </p>
    <a href="mailto:geetasaunshi9@gmail.com" className={styles.contact}>Contact Me</a>
    </div>

    <img src="public/hero/portselfphoto.jpg" className={styles.heroimg}/>
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>

  </section>
    );
};

export default hero
