import React from "react";
import styles from "../styles/Home.module.scss";
import BackGround from "./BackGround";
import { Element } from "react-scroll";
// import TextImage from "../Components/TextImage/TextImage";
// import nameCard from "../img/personal/GitnMail.svg";
import Skills from "./Skills";
import SmallSkills from "./SmallSkills";
import Projects from "./Projects";
import Contact from "./Contact"
export default function Home() {
  return (
    <>
    
    <section id="home" className={styles.scroll_snap,styles.Section}>
        
        <div>
          <h1 className={styles.hey}>
            Hey! <span className={styles.wavingHand}></span>
          </h1>
        </div>
        <div>
          <h3 className={styles.description}>
            I'm <span className={styles.Name}> Kota Sai Krishna Reddy</span>, a
            Full-Stack Web Developer focused on creating wonderful user
            experience
            <span className={styles.experience}> </span>
          </h3>
        </div>
        <div>
          <h3 className={styles.touch}>
            Get in touch <span className={styles.touchIcon}></span>{" "}
            <a
              href="mailto:k.saikrishna78@gmail.com"
              rel="noreferrer"
              className={styles.link}
              target="_blank"
              // style={{ color: "white" }}
            >
              kotakrishna@kotakreddy.com{" "}
            </a>
          </h3>
        </div>
        <div className={styles.ResumeDownload}>
            <a download="Resume-FullStack Web Developer(Kota Sai Krishna Reddy).pdf" href={`${process.env.PUBLIC_URL}/Resume-FullStack Web Developer(Kota Sai Krishna Reddy).pdf`}>Download Resume</a>
        </div>
      </section>
      <BackGround />
      <Skills />
      <SmallSkills />
      <Projects />
      <Contact />
      {/* <div
        style={{
          width: "500px",
          display: "grid",
          placeContent: "center",
          margin: "auto",
        }}
      >
        <img width="320px" src={nameCard} alt="the name card" />
      </div> */}
      {/* <TextImage /> */}
      </>
  );
}
