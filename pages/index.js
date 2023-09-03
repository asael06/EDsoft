import AboutUs from "@/components/Home/AboutUs";
import Banner from "@/components/Home/Banner";
import Jobs from "@/components/Home/Jobs";
import Projects from "@/components/Home/Projects";
import Services from "@/components/Home/Services";
import axios from "axios";
import { NextSeo } from "next-seo";

const Home = ({ services, projects }) => {
  return (
    <>
      <NextSeo
        title="Página de inicio"
        description="Página de inicio de nuestro sitio EDSoft"
      />
      <main>
        <Banner />
        <Services data={services} />
        <AboutUs />
        <Projects data={projects} />
        <Jobs />
      </main>
    </>
  );
};

export const getServerSideProps = async () => {
  const srvResponse = await axios.get(`${process.env.SERVICES_API}`);
  const services = srvResponse.data;
  const prjResponse = await axios.get(`${process.env.LAST_PROJECTS_API}`);
  const projects = prjResponse.data;
  return { props: { services, projects } };
};

export default Home;
