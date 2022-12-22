import Head from "next/head";
import Header from "../components/header";
import Script from "next/script";
import HeroSection from "../components/hero";
import AboutUsSection from "../components/about";
import TechnologiesSection from "../components/technologies";
import PricesSection from "../components/prices";
import ContactSection from "../components/contact";
import Footer from "../components/footer";

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="description"
          content="Spotless Bistrita este o spalatorie ecologica de haine care foloseste tehnologia wet-cleaning si detergenti biodegradabili."
        />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link rel="preconnect" href="https://kit-free.fontawesome.com" />
        <title>Homepage | Spotless Laundry Specialist</title>
      </Head>
      <Script src="https://kit.fontawesome.com/e462a55469.js" async />
      <Header />
      <main>
        <HeroSection />
        <AboutUsSection />
        <TechnologiesSection />
        <PricesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
