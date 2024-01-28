import styles from "../styles/BackGround.module.scss";
import { Element } from "react-scroll";

export default function BackGround() {
  return (
    <Element name="background">
      <section className={styles.Section}>
        <div className={styles.title}>My Philosophy</div>
        <div className={styles.content}>
          <p>
            Freelancing isn't just a job for me; it's a lifestyle. I'm all about{" "}
            <span>#RemoteWork</span> and believe in the power of working from
            anywhere (be it a beach, a coffee shop, or my living room). For me,
            freedom trumps stressed-out growth. I aim to grow, learn, and
            innovate at my own pace, without the traditional 9-5 constraints.
          </p>
          <p>
            I collaborate with teams and solo projects, thriving in environments where <span> freedom and responsibility </span> go hand in hand.
          </p>
          
          <p>
            As a software engineer, I enjoy bridging the gap between engineering
            and design — combining my technical knowledge with my keen eye for
            design to create a beautiful product. My goal is to always build
            applications that are scalable and efficient under the hood while
            providing engaging, great user experiences.
          </p>
          {/* <p>
            During my College life I was involved in NCC as Cadet participated
            in National and State level events. My fitness enthusiasm lead me to
            athletics and being a Marathon runner.
          </p> */}
          <p>
            <span> When I'm not in front of a computer screen </span>, I'm
            probably cycling, battling on chess.com, or crossing off another
            item on my bucket list.
          </p>
        </div>
      </section>
    </Element>
  );
}
