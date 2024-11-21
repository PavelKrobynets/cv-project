import { Mail, Linkedin, Github, Send } from "lucide-react";
import Link from "next/link";
import styles from "./socials.module.scss";

export default function Socials() {
  return (
    <div className={styles.socials}>
      <ul>
        <li>
          <Link href="mailto:krobynetspavel@gmail.com">
            <Mail />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/pavlo-krobynets/"
            target="_blank"
          >
            <Linkedin />
          </Link>
        </li>
        <li>
          <Link href="https://github.com/PavelKrobynets" target="_blank">
            <Github />
          </Link>
        </li>
        <li>
          <Link href="https://t.me/Krobynets_Pavel" target="_blank">
            <Send />
          </Link>
        </li>
      </ul>
    </div>
  );
}
