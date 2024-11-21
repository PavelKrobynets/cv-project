import Title from "../title/Title";
import styles from "./education.module.scss";

export default function Education() {
  return (
    <section className={styles.education} id="education">
      <Title anchor="Education" title="Education and practical experience" />
    </section>
  );
}
