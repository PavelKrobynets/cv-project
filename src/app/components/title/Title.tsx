"use client";
import { HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./title.module.scss";

interface TitleProps {
  anchor: string;
  title: string;
}

export default function Title({ anchor, title }: TitleProps) {
  return (
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
      className={styles.block}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 1.2 },
        }}
        className={styles.anchor}
      >
        <HeartHandshake />
        {anchor}
      </motion.div>
      <h1 className={styles.title}>{title}</h1>
    </motion.div>
  );
}
