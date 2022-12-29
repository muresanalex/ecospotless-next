import React from "react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const AboutUsSection = () => {
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
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://www.facebook.com/100063713541927/videos/344940509658120"
            height="100%"
            width="100%"
            controls
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
