import { Phone, Mail, Linkedin, Github, Send } from "lucide-react";
import styles from "./profileCard.module.scss";

export default function ProfileCard() {
  return (
    <div className={styles.card}>
      <h4 className={styles.name}>
        Pavlo
        <br /> Krobynets
      </h4>
      <img src="/profile.webp" alt="my-photo" className={styles.image} />
      <dl>
        <dt>Specialization:</dt>
        <dd>Frontend developer</dd>
        <dt>Location:</dt>
        <dd>Uzhhorod, Ukraine</dd>
      </dl>
      <ul>
        <li>
          <Phone />
        </li>
        <li>
          <Mail />
        </li>
        <li>
          <Linkedin />
        </li>
        <li>
          <Github />
        </li>
        <li>
          <Send />
        </li>
      </ul>
      <button className={styles.btn}>Let's work together</button>
    </div>
  );
}
