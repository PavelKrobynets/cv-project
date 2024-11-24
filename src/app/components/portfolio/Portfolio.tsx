import Title from "../title/Title";
import ProjectCard from "../projectCard/ProjectCard";
import { projects } from "../../data/projects";
import styles from "./portfolio.module.scss";

export default function Portfolio() {
  return (
    <section className={styles.portfolio} id="portfolio">
      <Title anchor="Portfolio" title="Take a look at my latest projects" />
      <div className={styles.portfolio__container}>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
