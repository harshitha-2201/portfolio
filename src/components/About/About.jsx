import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

 const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("profiles/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <p className= {styles.aboutdescription}>
          "I completed my graduation in 2021 but took a break due to health issues. Now, I'm excited to restart my career in web development,
           a field I've been passionate about since before my graduation. I underwent full-stack developer training at X Institute, gaining hands-on experience
            in frontend, backend, databases, and various tools and frameworks. I also have a basic understanding of version control and Hoisting the websites.
             Throughout my course, I successfully applied these skills to complete my own projects and took on an unpaid internship to further enhance my practical knowledge. 
             Additionally, I've earned certifications in various web technologies and continue to expand my expertise.Throughout my course, I successfully applied these skills to complete mini-projects and tackle logic-based challenges on platforms like HackerRank."
</p>
      </div>
    </section>
  );
};

export default About