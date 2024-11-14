import { MessageCircleMore } from "lucide-react";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <ul>
        <li>Home</li>
        <li>Portfolio</li>
        <li>About Me</li>
        <li>Experience</li>
        <li>Contacts</li>
      </ul>

      <button>
        Let's talk <MessageCircleMore className={styles.icon} />
      </button>
    </div>
  );
}
