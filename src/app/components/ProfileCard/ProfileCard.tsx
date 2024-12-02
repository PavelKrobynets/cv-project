"use client";
import Socials from "../socials/Socials";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./profileCard.module.scss";

export default function ProfileCard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -50,
      }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { duration: 1.2 },
      }}
      className={styles.card}
    >
      <h4 className={styles.name}>
        Pavlo
        <br /> Krobynets
      </h4>
      <img src="./profile.webp" alt="my-photo" className={styles.image} />
      <dl>
        <dt>Specialization:</dt>
        <dd>Frontend developer</dd>
        <dt>Location:</dt>
        <dd>Uzhhorod, Ukraine</dd>
      </dl>
      <Socials />
      <Link href="#contacts">
        <button className={styles.btn}>Let's work together</button>
      </Link>
    </motion.div>
  );
}
