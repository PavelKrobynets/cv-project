"use client";
import { motion } from "framer-motion";
import Title from "../title/Title";
import Socials from "../socials/Socials";
import styles from "./contacts.module.scss";

export default function Contacts() {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 70,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 1.2 },
      }}
      className={styles.contacts}
      id="contacts"
    >
      <Title anchor="Contacts" title="Let's connect!" />
      <Socials />
      <motion.div className={styles.text}>
        Whether you have a question, want to collaborate, or just want to say
        hello, feel free to reach out. I’d love to hear from you and will get
        back to you as soon as possible!
      </motion.div>
      <hr />
      <dl>
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1.2 },
          }}
        >
          <dt>Location</dt>
          <dd>Uzhhorod, Ukraine</dd>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1.3 },
          }}
        >
          <dt>Specialization</dt>
          <dd>Frontend developer</dd>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 70,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1.4 },
          }}
        >
          <dt>Email</dt>
          <dd>krobynetspavel@gmail.com</dd>
        </motion.div>
      </dl>
    </motion.section>
  );
}
