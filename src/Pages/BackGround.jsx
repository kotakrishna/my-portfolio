import React from "react";
import styles from "../styles/BackGround.module.scss";
import { Element } from "react-scroll";

export default function BackGround() {
  return (
    <Element name="background">
    <section className={styles.Section}>
      <div className={styles.title}>BACKGROUND</div>
      <div className={styles.content}>
        <p>
           I graduated
          from <span> St.Martin's Engineering College </span> after completing
          Electrical and Electronics Engineering.
        </p>
        <p>
          During my College life I was involved in NCC as Cadet participated in National and State level events. My fitness enthusiasm lead me to athletics and being a Marathon runner.
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
        </Element>
  );
}
