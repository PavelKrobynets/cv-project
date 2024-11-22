import { ListItem } from "../../types/types";
import styles from "./list.module.scss";

interface Props {
  headline: string;
  list: ListItem[];
}

export default function List({ headline, list }: Props) {
  return (
    <div className={styles.list}>
      <h4 className={styles.headline}>{headline}</h4>
      <ul className={styles.listItems}>
        {list.map((item) => (
          <li className={styles.listItem} key={item.title}>
            <div className={styles.year}>{item.year}</div>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.description}>{item.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
