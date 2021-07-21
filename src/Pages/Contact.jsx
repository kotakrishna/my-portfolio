import React from "react";
import styles from "../styles/Contact.module.scss"
import Git from "../img/logo/github.svg"
import Medium from "../img/logo/icons8-medium(1).svg"
import LinkedIn from "../img/logo/linkedin.svg"
import { Element } from "react-scroll";
export default function Contact() {
    return(
        <Element name="contact">
        <section>
            <div className={styles.Section}>
            <div className={styles.title}>Contact</div>
            </div>
            <div className={styles.content}>
                <div>
                    <a href="https://github.com/kotakrishna" target="_blank">
                    <img  src={Git} alt="" />
                    </a>
                </div>
                <div>
                    <a href="https://k-saikrishna78.medium.com/" target="_blank">
                    <img src={Medium} alt="" />
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/kota-sai-krishna-reddy-7a234a11b/" target="_blank">
                    <img src={LinkedIn} alt="" />
                    </a>
                </div>
            </div>
        </section>
        </Element>
    )
}