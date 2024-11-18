import { Header, Home, Portfolio } from "./index";
import styles from "./main.module.scss";

export default function Main() {
  return (
    <div className={styles.main}>
      <Header />
      <Home />
      <Portfolio />
    </div>
  );
}
