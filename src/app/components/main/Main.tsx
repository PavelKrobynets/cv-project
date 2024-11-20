import { Header, Home, Portfolio, About, Education, Contacts } from "./index";
import styles from "./main.module.scss";

export default function Main() {
  return (
    <div className={styles.main}>
      <Header />
      <Home />
      <Portfolio />
      <About />
      <Education />
      <Contacts />
    </div>
  );
}
