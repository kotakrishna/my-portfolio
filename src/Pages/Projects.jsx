import React from "react";
import styles from "../styles/Projects.module.scss";
import MUI from "../img/skills/icons8-material-ui.svg";
export default function Projects() {
  return (
    <section className={styles.Section}>
      <div className={styles.title}>Featured Projects</div>
      <div className={styles.content}>
        <div className={styles.project}>
          <img src={MUI} alt="" />
          <div>
            <span>Title</span>
            <br />
            <span>content</span>
          </div>
        </div>
      </div>
    </section>
  );
}
