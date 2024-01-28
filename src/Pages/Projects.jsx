import styles from "../styles/Projects.module.scss";
import JoompaTech from "../img/Projects/Joompa-tech.gif";
import Taskbroz from "../img/Projects/Taskbroz.gif";
import SPCargo from "../img/Projects/SP-cargo.gif";
import { Element } from "react-scroll";
import Dijkstra from "../img/Projects/Dijkstra-GIF.gif";
export default function Projects() {
  return (
    <Element name="projects">
      <section className={styles.Section}>
        <div className={styles.title}>Featured Projects</div>
        <div className={styles.content}>
          <div className={styles.project}>
            <div className={styles.ImageHolder}>
              <img src={JoompaTech} alt="JoompaTech" />
            </div>
            <div className={styles.projectDetails}>
              <p className={styles.projectTitle}>Joompa Tech</p>
              <span className={styles.projectContent}>
                Fitness Coaching Platform, users can learn Yoga, Boxing and Exercise after purchase subscription (Stripe), If the user is interested he/she can become an Instructor and create a Profile of his/her expertise.
              </span>
              <div className={styles.techStack}>
                <span>Angular</span>
                <span>Django</span>
                <span>Ruby on Rails</span>
                <span>Digital Ocean</span>
                <span>Postgres SQL</span>
                <span>Native Apps</span>
                <span>Stripe</span>
              </div>
              <div className={styles.projectLinks}>
                <a
                  rel="noreferrer"
                  href="https://www.joompatech.com/"
                  target="_blank">
                  <span>Website</span>
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div className={styles.project}>
            <div className={styles.ImageHolder}>
              <img src={SPCargo} alt="Sp Cargo" />
            </div>
            <div className={styles.projectDetails}>
              <p className={styles.projectTitle}>SP Cargo</p>
              <span className={styles.projectContent}>
                Logistics, Where Employees can login and enter the shipment details. User for Data Analytics, Tracking, Frequent Updates.
              </span>
              <div className={styles.techStack}>
                <span>React</span>
                <span>Appwrite</span>
                <span>Digital Ocean</span>
              </div>
              <div className={styles.projectLinks}>
                <a
                  rel="noreferrer"
                  href="https://www.myspcargo.com/"
                  target="_blank">
                  <span>Website</span>
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div className={styles.project}>
            <div className={styles.ImageHolder}>
              <img src={Dijkstra} alt="Dijkstra" />
            </div>
            <div className={styles.projectDetails}>
              <p className={styles.projectTitle}>Shortest Path (Dijkstra)</p>
              {/* <br /> */}
              <span className={styles.projectContent}>
                Dijkstra's Algo is the shortest pathfinding logic used between
                graphs and nodes. It was conceived by computer scientist Edsger
                W. Dijkstra in 1956. It was build using React for Visual
                understanding of the algorithm.
              </span>
              <div className={styles.techStack}>
                <span>React</span>
                <span>JavaScript</span>
                <span>SCSS</span>
                {/* <span>Stripe</span> */}
              </div>
              <div className={styles.projectLinks}>
                <a
                  rel="noreferrer"
                  href="https://finding-shortest-path-kotakrishna.vercel.app/"
                  target="_blank">
                  <span>Website</span>
                </a>
                <a
                  rel="noreferrer"
                  href="https://github.com/kotakrishna/dijkstra-pathfinder"
                  target="_blank">
                  <span>Git</span>
                </a>
              </div>
            </div>
          </div>
          <hr />
          
          <div className={styles.project}>
            <div className={styles.ImageHolder}>
              <img src={Taskbroz} alt="TaskBroz" />
            </div>
            <div className={styles.projectDetails}>
              <p className={styles.projectTitle}>Taskbroz</p>
              {/* <br /> */}
              <span className={styles.projectContent}>
                User can post task that will be open for bidding.
                Other Users can bid on those, and owner can assign it to anyone one user.
                Once task is marked completed the payment will be transferred to there accounts.
              </span>
              <div className={styles.techStack}>
                <span>Angular</span>
                <span>Native Apps</span>
                <span>Stripe</span>
                <span>Stripe</span>
                {/* <span>SCSS</span> */}
                {/* <span>Stripe</span> */}
              </div>
              <div className={styles.projectLinks}>
                <a
                  rel="noreferrer"
                  href="https://www.taskbroz.com/"
                  target="_blank">
                  <span>Website</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}
