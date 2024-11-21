import Title from "../title/Title";
import { ArrowBigDownDash } from "lucide-react";
import styles from "./home.module.scss";

export default function Home() {
  const titleText = `I'm Pavlo Krobynets\nfront-end developer`;
  return (
    <div className={styles.home} id="home">
      <Title anchor="Let's get in touch!" title={titleText} />
      <a
        download
        href="/Pavlo_Krobynets_Frontend_Developer_CV..pdf"
        className={styles.download}
      >
        Download CV <ArrowBigDownDash />
      </a>
    </div>
  );
}
