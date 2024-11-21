import Title from "../title/Title";
import Socials from "../socials/Socials";
import styles from "./contacts.module.scss";

export default function Contacts() {
  return (
    <section className={styles.contacts} id="contacts">
      <Title anchor="Contacts" title="Let's connect!" />
      <Socials />
      <div className={styles.text}>
        Whether you have a question, want to collaborate, or just want to say
        hello, feel free to reach out. I’d love to hear from you and will get
        back to you as soon as possible!
      </div>
      <hr />
      <dl>
        <div>
          <dt>Location</dt>
          <dd>Uzhhorod, Ukraine</dd>
        </div>
        <div>
          <dt>Specialization</dt>
          <dd>Frontend developer</dd>
        </div>
        <div>
          <dt>Email</dt>
          <dd>krobynetspavel@gmail.com</dd>
        </div>
      </dl>
    </section>
  );
}
