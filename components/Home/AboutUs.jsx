import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <section className="section-container about-section">
      <div className="content-wrapper">
        <h2 className="title">Sobre nosotros</h2>
        <p>Este es el sitio web de nuestra agencia de desarrollo.</p>
        <Link href="/proyectos.html" className="button white ghost">
          Ver experiencia
        </Link>
      </div>
      <Image
        className="background"
        src="/images/bg-section.jpg"
        alt="Alumnos estudiando"
        layout="fill"
      />
    </section>
  );
};

export default AboutUs;
