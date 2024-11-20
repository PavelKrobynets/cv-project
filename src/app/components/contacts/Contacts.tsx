import Title from "../title/Title";
import { Phone, Mail, Linkedin, Github, Send } from "lucide-react";
import styles from "./contacts.module.scss";

export default function Contacts() {
  return (
    <div className={styles.contacts}>
      <Title anchor="Contacts" title="Let's connect!" />
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
      <div className={styles.text}>
        Whether you have a question, want to collaborate, or just want to say
        hello, feel free to reach out. I’d love to hear from you and will get
        back to you as soon as possible!
      </div>
      <hr />
      <dl>
        <dt>Location:</dt>
        <dd>Uzhhorod, Ukraine</dd>
        <dt>Specialization:</dt>
        <dd>Frontend developer</dd>
        <dt>Email</dt>
        <dd>krobynetspavel@gmail.com</dd>
      </dl>
    </div>
  );
}
