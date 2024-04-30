import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

 const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sai Harshitha</h1>
        <p className={styles.description}>

"I'm an enthusiastic full-stack web developer with experience building websites and projects. I'm always eager to learn and grow in the world of web development."</p>
        <a href="https://drive.google.com/file/d/19ryXpOUuH2Sl__5AWSjfwnVGhEIWb_5t/view?usp=sharing" className={styles.contactBtn}>
          Resume
        </a>
      </div>
      <img
        src={getImageUrl("profiles/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero
