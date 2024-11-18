import { HeartHandshake } from "lucide-react";
import styles from "./title.module.scss";

interface TitleProps {
  anchor: string;
  title: string;
}

export default function Title({ anchor, title }: TitleProps) {
  return (
    <div className={styles.block}>
      <div className={styles.anchor}>
        <HeartHandshake />
        {anchor}
      </div>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}
