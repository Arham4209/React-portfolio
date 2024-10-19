import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/about.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>HTML, CSS Developer</h3>
              <p>
              I have 8 monts of experience using Html, Css & Animated Libraries.. Make responsive Pages..
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>JavaScript Developer</h3>
              <p>
              I have 3 monts of experience in JavaScript Development..I have multiple projects using JS, you can checkout on my Github Acc..
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>React Developer</h3>
              <p>
              I have designed multiple projects by using React.. I have 3 months of experience ..
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
