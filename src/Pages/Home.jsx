import styles from "../styles/Home.module.scss";
import BackGround from "./BackGround";
import Skills from "./Skills";
import SmallSkills from "./SmallSkills";
import Projects from "./Projects";
import Contact from "./Contact";
export default function Home() {
  return (
    <>
      <section id="home" className={`${styles.scroll_snap}, ${styles.Section}`}>
        <div>
          <h1 className={styles.hey}>
            Hello World! <span className={styles.wavingHand}></span>
          </h1>
        </div>
        <div>
          <p className={styles.description}>
            I'm <span className={styles.Name}>Kota Sai Krishna Reddy</span>, a
            seasoned Full-Stack Developer with a passion for coding, creativity,
            and caffeine. With over 7 years of experience, I've navigated the
            digital seas of
            <span className={styles.Name}>
              {" "}
              Healthcare, E-Commerce, Logistics and Content Management{" "}
            </span>
            building robust web and native applications that stand the test of
            time (and traffic).
            {/* I'm <span className={styles.Name}>Kota Sai Krishna Reddy</span>, a
            Full-Stack Web Developer, with 7+ years of hands-on experience
            designing, developing, and implementing applications and solutions
            using varies technologies and programming languages. */}
            <span className={styles.experience}> </span>
          </p>
        </div>
        <div className={styles.ResumeDownload}>
          <span>
            Get to know better <span className={styles.touchIcon}></span>{" "}
          </span>
          <a
            attributes-list
            download="Resume-FullStack Web Developer(Kota Sai Krishna Reddy).pdf"
            href={`${process.env.PUBLIC_URL}/Resume-FullStack Web Developer(Kota Sai Krishna Reddy).pdf`}>
            Download Resume
          </a>
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
