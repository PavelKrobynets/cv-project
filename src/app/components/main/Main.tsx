import { Header, Home } from "./index";
import styles from "./main.module.scss";

export default function Main() {
  return (
    <div>
      <Header />
      <div className={styles.home}>
        <Home />
      </div>
    </div>
  );
}
