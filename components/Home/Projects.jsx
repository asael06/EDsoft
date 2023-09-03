import Link from "next/link";
import Project from "./Project";

const Projects = ({ data }) => {
  return (
    <section className="section-container last-projects">
      <h2>Últimos proyectos</h2>
      <div className="content-wrapper">
        {data.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.src}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
