import React, { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";

const TechnologiesSection = () => {
  const [imagesLoaded, setImagesLoaded] = useState({
    wetCleaning: false,
    ecoFriendly: false,
    detergenti: false,
  });
  const technologiesRef = useRef(null);
  useLayoutEffect(() => {
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
          const imageHeight = image.getBoundingClientRect().height;

          imageSection.style.height = imageHeight + "px";

          triangles.forEach(function (triangle) {
            const classes = triangle.className;
            if (classes.indexOf("top") > -1) {
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
    <section class="general-container technologies-section" id="technology">
      <h2>Tehnologii</h2>
      <div class="technologies" ref={technologiesRef}>
        <div class="technology">
          <div class="image-section">
            <div class="triangle top-right-triangle"></div>
            <div class="triangle bottom-right-triangle"></div>
            <Image
              onLoad={() => {
                setImagesLoaded((state) => ({ ...state, wetCleaning: true }));
              }}
              width="100%"
              height="auto"
              srcset="/wet-cleaning-mobile.jpg 769w, /wet-cleaning-tablet.jpg 959w"
              alt="wet cleaning"
            />
          </div>
          <article class="text-section">
            <h3>Wet cleaning</h3>
            <p>
              Ca o constianta la curatatoria chimica, Grupul Electrolux Laundry
              System impreuna cu compania WOOLMARK a dezvoltat sistemul ecologic
              de curatare umeda Electrolux lagoon® Advanced Care. Sistemul este
              acreditat de catre Woolmark Company si Hohenstein Institutes.{" "}
            </p>
          </article>
        </div>
        <div class="technology">
          <article class="text-section">
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
          <div class="image-section">
            <div class="triangle top-left-triangle"></div>
            <div class="triangle bottom-left-triangle"></div>
            <Image
              onLoad={() => {
                setImagesLoaded((state) => ({ ...state, ecoFriendly: true }));
              }}
              width="100%"
              height="auto"
              srcset="/eco-friendly-mobile.jpg 769w, /eco-friendly-tablet.jpg 959w"
              alt="eco friendly"
            />
          </div>
        </div>
        <div class="technology">
          <div class="image-section">
            <div class="triangle top-right-triangle"></div>
            <div class="triangle bottom-right-triangle"></div>
            <Image
              onLoad={() => {
                setImagesLoaded((state) => ({ ...state, detergenti: true }));
              }}
              width="100%"
              height="auto"
              srcset="/detergenti-mobile.jpg 769w, /detergenti-tablet.jpg 959w"
              alt="detergenti"
            />
          </div>
          <article class="text-section">
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
