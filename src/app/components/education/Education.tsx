import Title from "../title/Title";
import List from "../list/List";
import Tools from "../favTools/Tools";
import { education } from "../../data/education";
import { experience } from "../../data/experience";
import styles from "./education.module.scss";

export default function Education() {
  return (
    <section className={styles.education} id="education">
      <Title anchor="Education" title="Education and practical experience" />
      <List headline="My education" list={education} />
      <List headline="Work experience" list={experience} />
      <Tools />
    </section>
  );
}
