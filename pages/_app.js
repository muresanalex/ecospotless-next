import { Roboto } from "@next/font/google";

import "../styles/general.css";
import "../styles/nav.css";
import "../styles/topBanner.css";
import "../styles/uspHeader.css";
import "../styles/aboutUs.css";
import "../styles/contact.css";
import "../styles/footer.css";
import "../styles/prices.css";
import "../styles/technologies.css";

const roboto = Roboto({
  weight: ["100", "300", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        * {
          font-family: ${roboto.style.fontFamily}, sans-serif;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
