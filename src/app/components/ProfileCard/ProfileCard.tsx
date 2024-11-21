import Socials from "../socials/Socials";
import Link from "next/link";
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
      <Socials />
      <Link href="#contacts">
        <button className={styles.btn}>Let's work together</button>
      </Link>
    </div>
  );
}
