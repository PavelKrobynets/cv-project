import { Phone, Mail, Linkedin, Github, Send } from "lucide-react";
import styles from "./socials.module.scss";

export default function Socials() {
  return (
    <div className={styles.socials}>
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
    </div>
  );
}
