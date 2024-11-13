import ProfileCard from "./components/ProfileCard/ProfileCard";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <ProfileCard />
    </div>
  );
}
