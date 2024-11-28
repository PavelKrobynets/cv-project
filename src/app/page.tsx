import Main from "./components/main/Main";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <ProfileCard />
      <Main />
    </div>
  );
}
