import React from "react";
import styles from "../styles/Contact.module.scss"
import Git from "../img/logo/github.svg"
import Medium from "../img/logo/icons8-medium(1).svg"
import LinkedIn from "../img/logo/icons8-linkedin(2).svg"
import mail from "../img/logo/icons8-gmail.svg"
import phone from "../img/social/phone.svg"
import { Element } from "react-scroll";
export default function Contact() {
    return(
        <Element name="contact">
        <section className={styles.main}>
            <div className={styles.Section}>
            <div className={styles.title}>Contact</div>
            </div>
            <div className={styles.content}>
                <div>
                    <a href="#">
                    <img  src={phone} alt="" />
                    </a>
                    <span>+91 - 6379056704</span>
                </div>
                <div>
                    <a href="mailto:k.saikrishna78@gmail.com"
              rel="noreferrer"
              className={styles.link}
              target="_blank">
                    <img src={mail} alt="" />
                    </a>
                    <span>kotakrishna@kotakreddy.com</span>
                </div>
                <div>
                    <a href="https://github.com/kotakrishna" target="_blank">
                    <img  src={Git} alt="" />
                    </a>
                    <span>kotakrishna</span>
                </div>
                <div>
                    <a href="https://k-saikrishna78.medium.com/" target="_blank">
                    <img src={Medium} alt="" />
                    </a>
                    <span>Medium</span>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/kota-sai-krishna-reddy-7a234a11b/" target="_blank">
                    <img src={LinkedIn} alt="" />
                    </a>
                    <span>LinkedIn</span>
                </div>
            </div>
        </section>
        </Element>
    )
}