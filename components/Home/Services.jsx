import Service from "./Service";

const Services = ({ data = [] }) => {
  return (
    <section className="services-section section-container">
      <h2>Nuestros servicios</h2>
      <div className="content-wrapper">
        {data.map((service, index) => (
          <Service
            key={service.id}
            name={service.name}
            detail={service.detail}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
