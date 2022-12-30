import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const TechnologiesSection = () => {
  const [imagesLoaded, setImagesLoaded] = useState({
    wetCleaning: false,
    ecoFriendly: false,
    detergenti: false,
  });
  const technologiesRef = useRef(null);
  useEffect(() => {
    if (
      imagesLoaded.wetCleaning &&
      imagesLoaded.ecoFriendly &&
      imagesLoaded.detergenti
    ) {
      function setBorders() {
        const technologies = Array.prototype.slice.call(
          technologiesRef.current.children
        );

        technologies.forEach(function (technology) {
          const triangles = Array.prototype.slice.call(
            technology.querySelectorAll(".triangle")
          );
          const imageSection = technology.querySelector(".image-section");
          const image = technology.querySelector("img");
          const imageHeight =
            image.getBoundingClientRect().height > 343
              ? image.getBoundingClientRect().height
              : 343;

          imageSection.style.height = imageHeight + "px";

          triangles.forEach(function (triangle) {
            const classNames = triangle.className;
            if (classNames.indexOf("top") > -1) {
              const borderTop = imageHeight / 2 + "px solid #fff";
              triangle.style.borderTop = borderTop;
            } else {
              const borderBottom = imageHeight / 2 + "px solid #fff";
              triangle.style.borderBottom = borderBottom;
            }
          });
        });
      }
      setBorders();
      window.addEventListener("resize", setBorders);
      return () => {
        window.removeEventListener("resize", setBorders);
      };
    }
  }, [imagesLoaded]);

  return (
    <section className="general-container technologies-section" id="technology">
      <h2>Tehnologii</h2>
      <div className="technologies" ref={technologiesRef}>
        <div className="technology">
          <div className="image-section">
            <div className="triangle top-right-triangle"></div>
            <div className="triangle bottom-right-triangle"></div>
            <Image
              onLoad={() => {
                setImagesLoaded((state) => ({ ...state, wetCleaning: true }));
              }}
              fill
              src="/wet-cleaning.jpg"
              alt="wet cleaning"
              style={{ objectFit: "cover" }}
            />
          </div>
          <article className="text-section">
            <h3>Wet cleaning</h3>
            <p>
              Ca o varianta la curatatoria chimica, Grupul Electrolux Laundry
              System impreuna cu compania WOOLMARK a dezvoltat sistemul ecologic
              de curatare umeda Electrolux lagoon® Advanced Care. Sistemul este
              acreditat de catre Woolmark Company si Hohenstein Institutes.{" "}
            </p>
          </article>
        </div>
        <div className="technology">
          <article className="text-section">
            <h3>Eco friendly</h3>
            <p>
              Sistemul de curatatre umeda Electrolux lagoon® Advanced Care se
              bazeaza pe echipamente si detergenti ecologici destinate sa
              „curete umed” articolele pretentioase destinate in mod clasic
              procesarii in curatatorii chimice. Este unicul sistem de curatare
              umeda care poate procesa (spalat, uscat si finisat) articolele
              delicate in mai putin de o ora.
            </p>
          </article>
          <div className="image-section">
            <div className="triangle top-left-triangle"></div>
            <div className="triangle bottom-left-triangle"></div>
            <Image
              onLoad={() => {
                setImagesLoaded((state) => ({ ...state, ecoFriendly: true }));
              }}
              src="/eco-friendly.jpg"
              alt="eco friendly"
              style={{ objectFit: "cover" }}
              fill
            />
          </div>
        </div>
        <div className="technology">
          <div className="image-section">
            <div className="triangle top-right-triangle"></div>
            <div className="triangle bottom-right-triangle"></div>
            <Image
              onLoad={() => {
                setImagesLoaded((state) => ({ ...state, detergenti: true }));
              }}
              src="/detergenti.jpg"
              alt="detergenti"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <article className="text-section">
            <h3>Detergenti</h3>
            <p>
              Gama de detergenti pe care o folosim este ECOLAB (unul din liderii
              mondiali in domeniul detergentilor si solutiilor profesionale
              folosite in aceasta industrie). Impreuna cu echipa de specialisti
              ai diviziei Textil Care, din cadrul companiei ECOLAB, am gasit
              intotdeauna solutii la provocarile aparute, in procesele
              tehnologice, din cadrul spalatoriei.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
