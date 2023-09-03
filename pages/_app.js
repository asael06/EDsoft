import "@/styles/normalize.css";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NextSeo } from "next-seo";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title="Este es el sitio de prueba EDSoft"
        description="This example uses more of the available config options."
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: "https://www.url.ie/a",
          title: "EDSoft Company",
          description: "Esta es la descripción de nuestra compañía",
          images: [
            {
              url: "/images/project-01.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
            {
              url: "/images/project-02.jpg",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
              type: "image/jpeg",
            },
            { url: "/images/project-03.jpg" },
            { url: "/images/project-04.jpg" },
          ],
          siteName: "EDSoft",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
