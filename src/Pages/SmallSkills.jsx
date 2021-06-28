import React from "react";
import styles from "../styles/SmallSkills.module.scss";
export default function SmallSkills() {
  return (
    <section className={styles.section}>
      <div className={styles.title} style={{ fontWeight: "800" }}>
        SKILLS
      </div>
      <div className={styles.content}>
        <div className={styles.sub}>
          <p className={styles.subTitle}>LANGUAGES</p>

          <p> JavaScript (ES6)</p>
          <p>TypeScript</p>
          <p>HTML</p>
          <p>CSS/Sass</p>
          <p>Python</p>
          <p>SQL</p>
        </div>
        <div className={styles.sub}>
          <p className={styles.subTitle}>FRAMEWORKS</p>
          <p>Node Js</p>
          <p>React Js</p>
          <p>Next Js</p>
          {/* <p>Material UI</p> */}
        </div>
        <div className={styles.sub}>
          <p className={styles.subTitle}>TOOLS</p>

          <p>Bash</p>
          <p>Git & Github</p>
          <p>Redux</p>
          <p>React Router Dom</p>
          <p>Chrome DevTools</p>
          <p>Postman</p>
          <p>MongoDB</p>
          <p>npm</p>
        </div>
        <div className={styles.sub}>
          <p className={styles.subTitle}>TESTING</p>
          <p>Jest</p>
          <p>Cypress</p>
        </div>
      </div>
    </section>
  );
}
