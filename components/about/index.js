import React, { useRef, useEffect } from "react";

const AboutUsSection = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    function setIframeHeight() {
      var ratio = 500 / 280;
      var width = iframeRef.current.getBoundingClientRect().width;
      var height = width / ratio;
      iframeRef.current.style.height = height + "px";
    }

    setIframeHeight();
    window.addEventListener("resize", setIframeHeight);

    return () => {
      window.removeEventListener("resize", setIframeHeight);
    };
  }, []);

  return (
    <section className="about-us" id="about-us">
      <div className="general-container">
        <h2>Despre noi</h2>
        <p>
          Ne-am propus sa ne remarcam prin servicii de calitate superioara pe
          care sa le punem la dispozitia clientilor nostri, motiv pentru care am
          implementat un proiect de curatare de ultima generatie fara solventi
          chimici, prietenos cu o varietate larga de tesaturi si materiale
          (langa, casmir, matase natural, vascoza, etc.) cat si cu mediul
          inconjurator.
        </p>
        <p>
          Suntem prima optiune cand aveti nevoie rapid de un costum impecabil, o
          camasa fara cute, sau lenjerii ingrijite. Alege mereu un serviciu de
          curatare profesionist si de incredere, doar asa vei avea garantia
          celor mai bune rezultate.
        </p>
        <iframe
          ref={iframeRef}
          src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fspotlesslaundryspecialist%2Fvideos%2F344940509658120%2F&width=500&show_text=false&height=280&appId&mute=0"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          allow="encrypted-media"
          allowFullScreen={true}
          title="Facebook video"
        ></iframe>
      </div>
    </section>
  );
};

export default AboutUsSection;
