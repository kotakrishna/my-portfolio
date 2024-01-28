import JS from "../img/skills/icons8-javascript.svg";
import MUI from "../img/skills/icons8-material-ui.svg";
import PY from "../img/skills/icons8-python.svg";
import Rct from "../img/skills/icons8-react.svg";
import Ty from "../img/skills/icons8-typescript.svg";
import Njs from "../img/skills/Nextjs-logo.svg";
import EX from "../img/skills/expressjs-ar21.svg";
import NodeJS from "../img/skills/icons8-nodejs.svg";
import MDB from "../img/skills/mongodb-ar21.svg";
import STC from "../img/skills/styledcomponents.png";
import SCSS from "../img/skills/sass-lang-ar21.svg";
import REDUX from "../img/skills/icons8-redux.svg";
import Angular from "../img/skills/angular.svg";
import AppWrite from "../img/skills/Appwrite.svg";
import Django from "../img/skills/djangoproject.svg";
import Rails from "../img/skills/rails.svg";
import Ruby from "../img/skills/ruby-lang-horizontal.svg";
import PostgresSql from "../img/skills/postgresql-vertical.svg";
import docker from "../img/skills/docker-tile.svg";
import Godot from "../img/skills/godot-logo.svg";
import "../App.css";
import SQL from "../img/skills/icons8-mysql-logo-1.svg";
import { Element } from "react-scroll";
import styles from "../styles/Skills.module.scss";

export default function Skills() {
  let p = Math.floor(Math.random() * (20) + 1);
  return p%2 ? (
    <Element name="skills">
      <section id="skills" className={styles.Section}>
        <h5 className={styles.skills}>SKILLS</h5>
        <div>
          {/* <div style={{ display: "flex", flexDirection: "column" }}>
            <img src={HTML} alt="HTML" />
            <span>HTML</span>
          </div> */}
          {/* <div style={{ display: "flex", flexDirection: "column" }}>
            <img src={Css} alt="HTML" />
            <span>CSS</span>
          </div> */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img src={JS} alt="HTML" />
            <span>Javascript</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img src={Ty} alt="HTML" />
            <span>Typescript</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img src={Ruby} alt="Ruby" />
            <span>Ruby</span>
          </div>
          {/* <div style={{ display: "flex", flexDirection: "column" }}>
            <img src={SCSS} alt="Ruby" />
            <span>SCSS</span>
          </div> */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img src={PY} alt="PY" />
            <span>Python</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img src={SQL} alt="SQL" />
            <span>MY SQL</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img src={PostgresSql} alt="PostgresSql" />
            <span>Postgres SQL</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img src={MDB} alt="PostgresSql" />
            <span>Mongo DB</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img src={Godot} alt="Godot" />
            <span>Godot</span>
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
            <img src={Django} alt="HTML" />
            <span>Django</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img src={EX} alt="" />
            <span>Express</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img src={Rails} alt="" />
            <span>Rails</span>
          </div>
        </div>
        <div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img src={AppWrite} alt="" />
            <span>Appwrite</span>
          </div>
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
          {/* <div style={{ display: "flex", flexDirection: "column" }}>
            <img src={SQL} alt="" />
            <span>MySQL</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img src={NPM} alt="" />
            <span>NPM</span>
          </div> */}
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
            <img src={JS} alt="JS" />
            <img src={Ty} alt="typescript" />
            <img src={SCSS} alt="SCSS" />
            <img src={NodeJS} alt="NodeJS" />
            <img src={PY} alt="Python" />
            <img src={Ruby} alt="Ruby" />
            <img src={SQL} alt="mysql" />
            <img src={PostgresSql} alt="Postgressql" />
            <img src={MDB} alt="MongoDB" />
            {/* <img src={Rails} alt="Django" /> */}
            {/* <img src={Rct} alt="React" /> */}
            {/* <img src={Njs} alt="NextJS" />
            <img src={MDB} alt="MongoDB" />
            <img src={Angular} alt="Angular" />
            <img src={AppWrite} alt="Appwrite" /> */}
          </div>
        </div>
        <div className={styles.holder}>
          <div className={styles.news}>
            {/* <img src={JS} alt="JS" /> */}
            <img src={Rct} alt="React" />
            <img src={Njs} alt="NextJS" />
            <img src={Angular} alt="Angular" />
            <img src={EX} alt="" />
            <img src={AppWrite} alt="Appwrite" />
            <img src={Django} alt="Django" />
            <img src={Rails} alt="Django" />
          </div>
        </div>
        <div className={styles.holder}>
          <div className={styles.news}>
            {/* <img src={NPM} alt="" /> */}

            {/* <img src={SCSS} alt="SCSS" /> */}
            <img className={styles.STC} src={STC} alt="" />
            <img src={MUI} alt="" />
            {/* <img src={EX} alt="" /> */}

            <img src={REDUX} alt="Redux" />
            <img src={docker} alt="docker" />
            <img src={Godot} alt="docker" />
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
