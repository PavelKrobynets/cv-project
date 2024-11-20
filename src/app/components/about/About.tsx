import Title from "../title/Title";
import { ArrowBigDownDash } from "lucide-react";
import styles from "./about.module.scss";

export default function About() {
  return (
    <div className={styles.about}>
      <Title
        anchor="About me"
        title="Crafting clean code and intuitive interfaces"
      />
      <div className={styles.content}>
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
          <li className={styles.list_item}>
            <h5 className={styles.list_item__title}>5+</h5>
            <p className={styles.list_item__descr}>Projects done</p>
          </li>
          <li className={styles.list_item}>
            <h5 className={styles.list_item__title}>2+</h5>
            <p className={styles.list_item__descr}>
              Years in wordpress development
            </p>
          </li>
        </ul>
      </div>
      <button className={styles.btn}>
        Download CV <ArrowBigDownDash />
      </button>
    </div>
  );
}
