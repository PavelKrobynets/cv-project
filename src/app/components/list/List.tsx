import styles from "./list.module.scss";

export default function List() {
  return (
    <div className={styles.list}>
      <h4 className={styles.headline}>My education</h4>
      <ul className={styles.listItems}>
        <li className={styles.listItem}>
          <div className={styles.year}>2022-2024</div>
          <div className={styles.title}>
            Master of Science in Computer Science
          </div>
          <div className={styles.description}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </li>
      </ul>
    </div>
  );
}
