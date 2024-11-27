"use client";
import Title from "../title/Title";
import { ArrowBigDownDash } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./about.module.scss";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <Title
        anchor="About me"
        title="Crafting clean code and intuitive interfaces"
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1.2 },
        }}
        className={styles.content}
      >
        <p className={styles.text}>
          Hi, I’m Pavlo, a passionate front-end developer from Ukraine with 2+
          years of experience in creating dynamic and responsive websites on
          Wordpress. My expertise includes HTML, CSS, JavaScript, React,
          TypeScript, and modern tools like Sass, Git.
          <br />
          <br /> I’ve worked on different projects ranging from WordPress
          development to complex applications, always focusing on clean code and
          user-centric designs. Beyond coding, I enjoy solving problems,
          learning new technologies, and bringing creative ideas to life.
        </p>
        <ul className={styles.list}>
          <motion.li
            initial={{
              opacity: 0,
              y: 65,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1.2 },
            }}
            className={styles.list_item}
          >
            <h5 className={styles.list_item__title}>5+</h5>
            <p className={styles.list_item__descr}>Projects done</p>
          </motion.li>
          <motion.li
            initial={{
              opacity: 0,
              y: 70,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1.2 },
            }}
            className={styles.list_item}
          >
            <h5 className={styles.list_item__title}>2+</h5>
            <p className={styles.list_item__descr}>
              Years in wordpress development
            </p>
          </motion.li>
        </ul>
      </motion.div>
      <motion.a
        initial={{
          opacity: 0,
          y: 70,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1.3 },
        }}
        download
        href="/Pavlo_Krobynets_Frontend_Developer_CV..pdf"
        className={styles.btn}
      >
        Download CV <ArrowBigDownDash />
      </motion.a>
    </section>
  );
}
