"use client";
import { useState, useEffect } from "react";
import { Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./projectCard.module.scss";

interface Props {
  img: string;
  tags: string[];
  title: string;
  caption: string;
  link?: string;
  animationDuration: number;
}

export default function ProjectCard({ ...project }: Props) {
  const [modal, setModalOpen] = useState(false);
  const [randomY, setRandomY] = useState(0);

  useEffect(() => {
    const randomValue = Math.floor(Math.random() * (120 - 30 + 1) + 30);
    setRandomY(randomValue);
  }, []);

  const handleImageClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const modalWindow = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={styles.modalOverlay}
      onClick={handleCloseModal}
    >
      <div className={styles.modalClose} onClick={handleCloseModal}>
        x
      </div>
      <img className={styles.modalImg} src={project.img} alt={project.title} />
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={styles.modalContent}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        <div className={styles.modalTop}>
          <h5 className={styles.modalTitle}>{project.title}</h5>
          {project.link ? (
            <Link
              href={project.link}
              className={styles.modalLink}
              target="_blank"
            >
              <LinkIcon />
            </Link>
          ) : null}
        </div>
        <div className={styles.modalTags}>
          {project.tags.map((tag, index) => (
            <span key={index} className={styles.modalTag}>
              {tag}
            </span>
          ))}
        </div>
        <p className={styles.modalCaption}>{project.caption}</p>
      </motion.div>
    </motion.div>
  );

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: randomY,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: project.animationDuration },
      }}
    >
      <figure className={styles.card} onClick={handleImageClick}>
        <img src={project.img} alt={project.title} />
        <figcaption className={styles.description}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </figcaption>
      </figure>

      {modal && modalWindow}
    </motion.div>
  );
}
