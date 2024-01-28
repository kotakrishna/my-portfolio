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
          {/* <p>HTML</p> */}
          <p>Sass</p>
          <p>Python</p>
          <p>Ruby</p>
          <p>SQL</p>
        </div>
        <div className={styles.sub}>
          <p className={styles.subTitle}>FRAMEWORKS</p>
          {/* <p>Node Js</p> */}
          <p>React Js</p>
          <p>Angular</p>
          <p>Next Js</p>
          <p>Express</p>
          <p>Django</p>
          <p>Ruby on Rails</p>
          {/* <p>Material UI</p> */}
        </div>
        <div className={styles.sub}>
          <p className={styles.subTitle}>TOOLS</p>
          <p>Bash</p>
          <p>Git & Github</p>
          <p>Redux-Toolkit</p>
          <p>Jira</p>
          <p>Trello</p>
          <p>Notion</p>
        </div>
        <div className={styles.sub}>
          <p className={styles.subTitle}>TESTING</p>
          <p>Jest</p>
          <p>Cypress</p>
          <p>Playwright</p>
        </div>
      </div>
    </section>
  );
}
