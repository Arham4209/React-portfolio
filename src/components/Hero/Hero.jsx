import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";


export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}> Hi,<span class={styles.wave}>👋</span> I'm Saad!   
    
        </h2>
        <p className={styles.description}>
          I'm a frontend developer with 3 months of experience using JavaScript & React! I am curently learning some more tecnologies.
        </p>
        <a href="mailto:arhamikram900@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/hero.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
