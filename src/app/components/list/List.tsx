"use client";
import { motion } from "framer-motion";
import { ListItem } from "../../types/types";
import styles from "./list.module.scss";

interface Props {
  headline: string;
  list: ListItem[];
}

export default function List({ headline, list }: Props) {
  return (
    <div className={styles.list}>
      <motion.h4
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
        {headline}
      </motion.h4>
      <ul className={styles.listItems}>
        {list.map((item, index) => (
          <motion.li
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.7 + index * 0.1 },
            }}
            className={styles.listItem}
            key={item.title}
          >
            <div className={styles.year}>{item.year}</div>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.description}>{item.description}</div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
