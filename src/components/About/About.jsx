import React from 'react'

import styles from './about.module.css';

const about = () => {
  return (
   <section className={styles.container}>
    <h1>About</h1>
    <div className={styles.content}>
     <p className={styles.intro}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ipsum delectus odit rem eaque maxime vitae adipisci est quaerat, illum rerum, perferendis facilis, ut minus earum fuga! Corrupti, rem voluptate.
     </p>

     <div className={styles.skills}>
        <p className={styles.tech} > <img src="/public/skills/html.png" alt="" /> HTML</p>
         <p className={styles.tech}> <img src="/public/skills/css.png" alt="" /> CSS </p>
     <p className={styles.tech}> <img src="/public/skills/js.png" alt="" /> JavaScript </p>
     <p  className={styles.tech}> <img src="/public/skills/nodejs.png" alt=""  /> node.js </p>
     <p  className={styles.tech}> <img src="/public/skills/react.png" alt="" /> react.js</p>
    <p  className={styles.tech}> <img src="/public/skills/socket.png" alt="" /> socket.io </p>
    <p  className={styles.tech}><img src="/public/skills/mongodb.webp" alt="" />mongoDB</p>
    </div>

      </div>

   </section>
  )
}

export default about
