"use client";
import { motion } from "framer-motion";
import { tools } from "../../data/tools";
import styles from "./tools.module.scss";

export default function Tools() {
  return (
    <div className={styles.tools}>
      <motion.h5
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1.2 },
        }}
        className={styles.headline}
      >
        My favorite tools
      </motion.h5>
      <ul className={styles.tools__list}>
        {tools.map((tool, index) => (
          <motion.li
            initial={{
              opacity: 0,
              y: 50 + index * index,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.7 + index * 0.1 },
            }}
            key={tool.title}
            className={styles.tools__item}
          >
            <img src={tool.icon} alt={tool.title} />
            <div className={styles.tools__title}>{tool.title}</div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
