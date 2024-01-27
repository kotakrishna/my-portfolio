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
import { Element } from "react-scroll";
import styles from "../styles/Skills.module.scss";

export default function Skills() {
  let p = 11;
  return p % 2 ? (
    <Element name="skills">
      <section id="skills" className={styles.Section}>
        <h5 className={styles.skills}>SKILLS</h5>
        <div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img src={HTML} alt="HTML" />
            <span>HTML</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img src={Css} alt="HTML" />
            <span>CSS</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img src={JS} alt="HTML" />
            <span>Javascript</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img src={Ty} alt="HTML" />
            <span>Typescript</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img src={PY} alt="HTML" />
            <span>Python</span>
          </div>
        </div>
        <div className={styles.middle}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img src={Rct} alt="HTML" />
            <span>React</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img src={REDUX} alt="" />
            <span>Redux</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img src={Njs} alt="HTML" />
            <span>Next.js</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img src={EX} alt="" />
            <span>Express</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img src={MDB} alt="" />
            <span>MongoDB</span>
          </div>
        </div>
        <div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img src={SCSS} alt="" />
            <span>SCSS</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img className={styles.STC} src={STC} alt="" />
            <span>Styled Components</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img src={MUI} alt="" />
            <span>Material UI</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img src={SQL} alt="" />
            <span>MySQL</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img src={NPM} alt="" />
            <span>NPM</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/512px-Stripe_Logo%2C_revised_2016.svg.png"
              alt=""
            />
            <span>Stripe</span>
          </div>
        </div>
      </section>
    </Element>
  ) : (
    <Element name="skills">
      <section id="skills" className={styles.section}>
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
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/512px-Stripe_Logo%2C_revised_2016.svg.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </Element>
  );
}
