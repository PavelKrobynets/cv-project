import Title from "../title/Title";
import { ArrowBigDownDash } from "lucide-react";
import styles from "./home.module.scss";

export default function Home() {
  const titleText = `I'm Pavlo Krobynets\nfront-end developer`;
  return (
    <div className={styles.home}>
      <Title anchor="Let's get in touch!" title={titleText} />
      <div className={styles.download}>
        Download CV <ArrowBigDownDash />
      </div>
    </div>
  );
}
