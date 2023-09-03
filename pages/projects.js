import Project from "@/components/Home/Project";
import axios from "axios";
import { NextSeo } from "next-seo";

const Projects = ({ projects }) => {
  return (
    <>
      <NextSeo
        title="Proyectos | EDSoft"
        description="Proyectos de la empresa EDSoft"
      />
      <main className="main">
        <section className="projects-section section-container">
          <h1>Nuestros Proyectos</h1>
          <div className="content-wrapper">
            {projects.map((project) => (
              <Project
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.src}
                url={project.url}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export const getServerSideProps = async () => {
  const response = await axios.get(`${process.env.PROJECTS_API}`);
  const projects = response.data;
  return { props: { projects } };
};

export default Projects;
