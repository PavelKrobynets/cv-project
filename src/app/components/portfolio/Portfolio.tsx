import Title from "../title/Title";
import ProjectCard from "../projectCard/ProjectCard";
import { projects } from "../../data/projects";
import styles from "./portfolio.module.scss";

export default function Portfolio() {
  const initialDuration = 1.2;
  return (
    <section className={styles.portfolio} id="portfolio">
      <Title anchor="Portfolio" title="Take a look at my latest projects" />
      <div className={styles.portfolio__container}>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            {...project}
            animationDuration={initialDuration + index * 0.1}
          />
        ))}
      </div>
    </section>
  );
}
