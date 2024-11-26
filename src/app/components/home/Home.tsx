"use client";
import Title from "../title/Title";
import { ArrowBigDownDash } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./home.module.scss";

export default function Home() {
  const titleText = `I'm Pavlo Krobynets\nfront-end developer`;
  return (
    <section className={styles.home} id="home">
      <Title anchor="Let's get in touch!" title={titleText} />
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
        className={styles.download}
      >
        Download CV <ArrowBigDownDash />
      </motion.a>
    </section>
  );
}
