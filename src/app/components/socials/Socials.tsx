import { Mail, Linkedin, Github, Send } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./socials.module.scss";

export default function Socials() {
  return (
    <div className={styles.socials}>
      <ul>
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link href="mailto:krobynetspavel@gmail.com">
            <Mail />
          </Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link
            href="https://www.linkedin.com/in/pavlo-krobynets/"
            target="_blank"
          >
            <Linkedin />
          </Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link href="https://github.com/PavelKrobynets" target="_blank">
            <Github />
          </Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link href="https://t.me/Krobynets_Pavel" target="_blank">
            <Send />
          </Link>
        </motion.li>
      </ul>
    </div>
  );
}
