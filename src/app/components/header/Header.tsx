import { MessageCircleMore } from "lucide-react";
import Link from "next/link";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="#about">About Me</Link>
          </li>
          <li>
            <Link href="#education">Education</Link>
          </li>
          <li>
            <Link href="#contacts">Contacts</Link>
          </li>
        </ul>
      </nav>

      <Link className={styles.btn} href="mailto:krobynetspavel@gmail.com">
        <button>
          Let's talk <MessageCircleMore className={styles.icon} />
        </button>
      </Link>
    </header>
  );
}
