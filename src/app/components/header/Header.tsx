"use client";
import { useState, useEffect } from "react";
import { MessageCircleMore } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./header.module.scss";

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.7,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -50,
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 1.2 },
      }}
      className={styles.header}
    >
      <nav>
        <ul>
          <li className={activeSection === "home" ? styles.active : ""}>
            <Link href="#home">Home</Link>
          </li>
          <li className={activeSection === "about" ? styles.active : ""}>
            <Link href="#about">About Me</Link>
          </li>
          <li className={activeSection === "portfolio" ? styles.active : ""}>
            <Link href="#portfolio">Portfolio</Link>
          </li>
          <li className={activeSection === "education" ? styles.active : ""}>
            <Link href="#education">Education</Link>
          </li>
          <li className={activeSection === "contacts" ? styles.active : ""}>
            <Link href="#contacts">Contacts</Link>
          </li>
        </ul>
      </nav>

      <Link className={styles.btn} href="mailto:krobynetspavel@gmail.com">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Let's talk <MessageCircleMore className={styles.icon} />
        </motion.button>
      </Link>
    </motion.header>
  );
}
