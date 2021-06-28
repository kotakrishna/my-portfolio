import React from "react";
import HTML from "../img/skills/icons8-html-5.svg";
import JS from "../img/skills/icons8-javascript.svg";
import MUI from "../img/skills/icons8-material-ui.svg";
import PY from "../img/skills/icons8-python.svg";
import Rct from "../img/skills/icons8-react.svg";
import Ty from "../img/skills/icons8-typescript.svg";
import Njs from "../img/skills/Nextjs-logo.svg";
import Css from "../img/skills/icons8-css3(1).svg";
import NPM from "../img/skills/icons8-npm.svg";
import EX from "../img/skills/expressjs-ar21.svg";
import NodeJS from "../img/skills/icons8-nodejs.svg";
import MDB from "../img/skills/mongodb-ar21.svg";
import STC from "../img/skills/styledcomponents.png";
import SCSS from "../img/skills/sass-lang-ar21.svg";
import REDUX from "../img/skills/icons8-redux.svg";
import "../App.css";
import SQL from "../img/skills/icons8-mysql-logo-1.svg";

import styles from "../styles/Skills.module.scss";

export default function Skills() {
  return (
    <section className={styles.section}>
      <h5 className={styles.skills}>SKILLS</h5>
      <div className={styles.holder}>
        <div className={styles.news}>
          <img src={HTML} alt="HTML" />
          <img src={Css} alt="HTML" />
          <img src={JS} alt="HTML" />
          <img src={Rct} alt="HTML" />
          <img src={Njs} alt="HTML" />
          <img src={PY} alt="HTML" />
          <img src={NodeJS} alt="" />
          <img src={MDB} alt="" />
        </div>
      </div>
      <div className={styles.holder}>
        <div className={styles.news}>
          <img src={NPM} alt="" />
          <img src={Ty} alt="HTML" />
          <img src={SCSS} alt="" />
          <img className={styles.STC} src={STC} alt="" />
          <img src={MUI} alt="" />
          <img src={EX} alt="" />
          <img src={SQL} alt="" />
          <img src={REDUX} alt="" />
        </div>
      </div>
    </section>
  );
}
