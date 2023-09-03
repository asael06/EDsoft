import Link from "next/link";
import React from "react";
import { NextSeo } from "next-seo";

const Contact = () => {
  return (
    <>
      <NextSeo
        title="Contacto | EDSoft"
        description="Contacto con la empresa EDSoft"
      />
      <main className="main">
        <section className="contact-section section-container">
          <h1>Contacto</h1>
          <div className="content-wrapper">
            <div>
              <h3>¿Tienes algo que decir?</h3>
              <div>
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fyouwinbo&tabs=messages&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId=268863463136938"
                  width="340"
                  height="500"
                  scrolling="no"
                  frameborder="0"
                  allowTransparency="true"
                  allow="encrypted-media"
                />
              </div>
            </div>

            <address>
              <div className="contact-item">
                <h4>Teléfono</h4>
                <p>
                  <span className="jam jam-phone"></span>
                  <Link href="tel:1234567890">(123) - 456 - 7890</Link>
                </p>
              </div>

              <div className="contact-item">
                <h4>Correo electrónico</h4>
                <p>
                  <span className="jam jam-newsletter"></span>
                  <Link href="mailto:contacto@edsoft.com">
                    contacto@edsoft.com
                  </Link>
                </p>
              </div>

              <div className="contact-item">
                <h4>Redes sociales</h4>
                <div className="social-networks">
                  <Link href="#">
                    <span className="jam jam-twitter"></span>
                  </Link>
                  <Link href="#">
                    <span className="jam jam-facebook"></span>
                  </Link>
                  <Link href="#">
                    <span className="jam jam-whatsapp"></span>
                  </Link>
                  <Link href="#">
                    <span className="jam jam-instagram"></span>
                  </Link>
                </div>
              </div>

              <div className="contact-item">
                <h4>Dirección</h4>
                <p>
                  <span className="jam jam-map-marker"></span>
                  <Link
                    href="https://www.google.com/maps/place/Groenlandia/@67.8825871,-73.8807304,3z/data=!3m1!4b1!4m5!3m4!1s0x4ea20dbbe3c07715:0x34cf9d830114e218!8m2!3d65.8747247!4d-46.1425781"
                    target="_blank"
                  >
                    Calle Falsa #123, Springfield, Óregon, Estados Unidos.
                  </Link>
                </p>
              </div>

              <iframe
                className="map-ubcation"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24611878.567421794!2d-73.88073035826869!3d67.88258712523397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ea20dbbe3c07715%3A0x34cf9d830114e218!2sGroenlandia!5e0!3m2!1ses!2smx!4v1589145084108!5m2!1ses!2smx"
                frameborder="0"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              />
            </address>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
