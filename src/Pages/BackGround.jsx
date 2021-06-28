import React from "react";
import styles from "../styles/BackGround.module.scss";

export default function BackGround() {
  return (
    <section className={styles.Section}>
      <div className={styles.title}>BACKGROUND</div>
      <div className={styles.content}>
        <p>
          I'm currently up-skilling as Full Stack Developer at{" "}
          <span> Masai School </span>
          building skills for the world with some awesome people. I graduated
          from <span> St.Martin's Engineering College </span> after completing
          Electrical and Electronics Engineering.
        </p>
        <p>
          As a software engineer, I enjoy bridging the gap between engineering
          and design — combining my technical knowledge with my keen eye for
          design to create a beautiful product. My goal is to always build
          applications that are scalable and efficient under the hood while
          providing engaging, pixel-perfect user experiences.
        </p>
        <p>
          <span> When I'm not in front of a computer screen </span>, I'm
          probably cycling, battling on chess.com, or crossing off another item
          on my bucket list.
        </p>
      </div>
    </section>
  );
}
