import React from "react";
import styles from "../styles/Projects.module.scss";
import MUI from "../img/skills/icons8-material-ui.svg";
import LinkedIn from "../img/Projects/LinkedIn-learning.gif"
import { Element } from "react-scroll";
import Uboric from "../img/Projects/Uboric.gif"
import TimeCamp from "../img/Projects/TimeCampClone.gif"
import HappyFox from "../img/Projects/HappyFox-Clone.gif"
export default function Projects() {
  return (
    <Element name="projects">
    <section className={styles.Section}>
      <div className={styles.title}>Featured Projects</div>
      <div className={styles.content}>
        <div className={styles.project}>
          <div className={styles.ImageHolder}>
          <img src={LinkedIn} alt="LinkedIn Learning" />
          </div>
          <div className={styles.projectDetails}>
            <p className={styles.projectTitle}>LinkedIn - Learning Clone</p>
            {/* <br /> */}
            <span className={styles.projectContent}>Edu - Tech Platform, users can learn courses after purchase subscription (Stripe), If the user is interested he/she can become an Instructor and create a Course of his/her expertise and upload the video to AWS(Cloud).</span>
            <div className={styles.techStack}>
              <span className={styles.stackTitle}>Tech Stack</span>
              <span>React</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>S3-AWS</span>
              <span>Stripe</span>
            </div>
            <div className={styles.projectLinks}>
              <span > <a href="https://linkedinlearningclone-kotakrishna.vercel.app/" target="_blank" >
                 Website
                </a>
                 </span>
              <span> <a href="https://github.com/ashish8796/linkedin-learning-clone" target="_blank">
                 Git
                </a>
                  </span>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.project}>
          <div className={styles.ImageHolder}>
          <img src={Uboric} alt="Uboric" />
          </div>
          <div className={styles.projectDetails}>
            <p className={styles.projectTitle}>Uboric Clone</p>
            {/* <br /> */}
            <span className={styles.projectContent}>Uboric is an e-commerce platform where users can find different kinds of utility products from various categories. Users can add as many as products cart and place the order.</span>
            <div className={styles.techStack}>
              <span className={styles.stackTitle}>Tech Stack</span>
              <span>HTML</span>
              <span>JavaScript</span>
              <span>CSS</span>
              <span>REST API</span>
              {/* <span>Stripe</span> */}
            </div>
            <div className={styles.projectLinks}>
              <span> 
                <a href="https://kotakrishna.github.io/Uboric-clone/" target="_blank">
                Website
                </a>
                </span>
              <span> 
                <a href="https://github.com/kotakrishna/Uboric-clone" target="_blank">
                 Git
                </a>
                   </span>
            </div>
          </div>
        </div>
        <hr />

        <div className={styles.project}>
          <div className={styles.ImageHolder}>
          <img src={TimeCamp} alt="Time Camp Clone" />
          </div>
          <div className={styles.projectDetails}>
            <p className={styles.projectTitle}>Time Camp Clone</p>
            {/* <br /> */}
            <span className={styles.projectContent}>Time camp Clone is a Productivity and Time Management Tool, helps users to know the overall time spent on the project by the members and also specific tasks.</span>
            <div className={styles.techStack}>
              <span className={styles.stackTitle}>Tech Stack</span>
              <span>React</span>
              <span>Material UI</span>
              <span>Redux</span>
              <span>SCSS</span>
              {/* <span>Stripe</span> */}
            </div>
            <div className={styles.projectLinks}>
              <span>
                <a href="https://unit-3-time-camp-clone.vercel.app/" target="_blank">
                Website
                </a>
                </span>
              <span> 
                <a href="https://github.com/kotakrishna/unit-3-time-camp-clone" target="_blank">
                 Git
                </a>
                   </span>
            </div>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.ImageHolder}>
          <img src={HappyFox} alt="Happy Fox Clone" />
          </div>
          <div className={styles.projectDetails}>
            <p className={styles.projectTitle}>Happy Fox Clone</p>
            {/* <br /> */}
            <span className={styles.projectContent}>Static Web Page Built using basic HTML and CSS with limited knowledge on working of other DOM manipulations, was an trial project built with in 4days.</span>
            <div className={styles.techStack}>
              <span className={styles.stackTitle}>Tech Stack</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>GIT</span>
              {/* <span>SCSS</span> */}
              {/* <span>Stripe</span> */}
            </div>
            <div className={styles.projectLinks}>
              <span>
                <a href="https://happy-fox-clone.netlify.app/" target="_blank">
                Website
                </a>
                </span>
              <span> 
                <a href="https://github.com/kotakrishna/happy-fox-clone" target="_blank">
                 Git
                </a>
                   </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Element>
  );
}
