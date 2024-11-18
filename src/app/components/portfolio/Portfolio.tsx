import Title from "../title/Title";
import styles from "./portfolio.module.scss";

export default function Portfolio() {
  return (
    <div className={styles.portfolio}>
      <Title anchor="Portfolio" title="Take a look at my latest projects" />
    </div>
  );
}
