import { tools } from "../../data/tools";
import styles from "./tools.module.scss";

export default function Tools() {
  return (
    <div className={styles.tools}>
      <h5 className={styles.headline}>My favorite tools</h5>
      <ul className={styles.tools__list}>
        {tools.map((tool) => (
          <li key={tool.title} className={styles.tools__item}>
            <img src={tool.icon} alt={tool.title} />
            <div className={styles.tools__title}>{tool.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
