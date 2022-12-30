import React, { useEffect, useState } from "react";
import Image from "next/image";

const AboutUsSection = () => {
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  useEffect(() => {
    setShowVideoPlayer(window.innerWidth > 1000);
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
        {showVideoPlayer && (
          <div className="player-wrapper">
            <video controls>
              <source src="/about-video.mp4" type="video/mp4" />
            </video>
          </div>
        )}
        {!showVideoPlayer && (
          <div className="thumbnail-wrapper">
            <button
              onClick={() => {
                setShowVideoPlayer(true);
              }}
            >
              <div className="arrow" />
            </button>
            <Image
              src="/thumbnail.jpeg"
              alt="thumbnail"
              style={{ objectFit: "cover" }}
              fill
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutUsSection;
