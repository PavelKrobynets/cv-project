"use client";
import { useState } from "react";
import styles from "./projectCard.module.scss";

interface Props {
  img: string;
  tags: string[];
  title: string;
  caption: string;
}

export default function ProjectCard({ img, tags, title, caption }: Props) {
  const [modal, setModalOpen] = useState(false);

  const handleImageClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const modalWindow = (
    <div className={styles.modalOverlay} onClick={handleCloseModal}>
      <div className={styles.modalClose} onClick={handleCloseModal}>
        x
      </div>
      <img className={styles.modalImg} src={img} alt={title} />
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h5 className={styles.modalTitle}>{title}</h5>
        <div className={styles.modalTags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.modalTag}>
              {tag}
            </span>
          ))}
        </div>
        <p className={styles.modalCaption}>{caption}</p>
      </div>
    </div>
  );

  return (
    <div>
      <figure className={styles.card} onClick={handleImageClick}>
        <img src={img} alt={title} />
        <figcaption className={styles.description}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </figcaption>
      </figure>

      {modal && modalWindow}
    </div>
  );
}
