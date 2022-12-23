import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const shortDays = ["Duminica", "Lu", "Ma", "Mi", "Jo", "Vi", "Sa"];
const workingHours = [
  {
    day: 1,
    opens: 8,
    closes: 18,
  },
  {
    day: 2,
    opens: 8,
    closes: 18,
  },
  {
    day: 3,
    opens: 8,
    closes: 18,
  },
  {
    day: 4,
    opens: 8,
    closes: 18,
  },
  {
    day: 5,
    opens: 8,
    closes: 18,
  },
  {
    day: 6,
    opens: 9,
    closes: 12,
  },
  {
    day: 0,
    opens: null,
    closes: null,
  },
];

function buildWorkingHoursInterval(currentDay) {
  if (!currentDay.opens) {
    return "";
  }
  return currentDay.opens + ":00 - " + currentDay.closes + ":00";
}

function getPixelValue(value) {
  return parseInt(value.split("px")[0], 10);
}

function getCurrentIndex(top, elementHeight) {
  if (top === 0) {
    return 0;
  }
  return -(top / elementHeight);
}

const Header = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const uspContainerRef = useRef(null);
  const today = new Date();
  const day = today.getDay();
  const hour = today.getHours();
  const currentDay = workingHours.filter((item) => item.day === day)[0];
  const isStoreOpen =
    currentDay.opens && hour > currentDay.opens && hour < currentDay.closes;
  const workingHoursInterval = buildWorkingHoursInterval(currentDay);

  function toggleHamburger() {
    setIsHamburgerOpen((currentState) => !currentState);
  }

  function closeHamburger() {
    setIsHamburgerOpen(false);
  }

  useEffect(() => {
    let interval;
    let isRotatorRunning = false;

    const startRotator = () => {
      if (window.innerWidth > 1000) {
        if (uspContainerRef.current.children.length === 4) {
          uspContainerRef.current.removeChild(
            uspContainerRef.current.children[
              uspContainerRef.current.children.length - 1
            ]
          );
          isRotatorRunning = false;
          clearInterval(interval);
        }
        return;
      }

      if (isRotatorRunning) {
        return;
      }

      isRotatorRunning = true;
      const firstChildClone =
        uspContainerRef.current.children[0].cloneNode(true);
      uspContainerRef.current.appendChild(firstChildClone);
      uspContainerRef.current.style.top = "0px";

      interval = setInterval(function () {
        if (window.innerWidth > 1000) {
          uspContainerRef.current.removeChild(
            uspContainerRef.current.children[
              uspContainerRef.current.children.length - 1
            ]
          );
          uspContainerRef.current.style.top = "0px";
          isRotatorRunning = false;
          clearInterval(interval);
        }
        const uspElementHeight = 40;
        const top = getPixelValue(uspContainerRef.current.style.top);
        const numberOfElements = uspContainerRef.current.children.length;
        const lastElementIndex = numberOfElements - 1;
        const currentIndex = getCurrentIndex(top, uspElementHeight);

        if (currentIndex === lastElementIndex - 1) {
          setTimeout(function () {
            uspContainerRef.current.style.transition = "top 0s";
            uspContainerRef.current.style.top = "0px";
          }, 500);
        }
        uspContainerRef.current.style.transition = "top 0.5s";
        const newTop = top - uspElementHeight;
        uspContainerRef.current.style.top = newTop + "px";
      }, 4000);
    };
    startRotator();
    window.addEventListener("resize", startRotator);
    window.addEventListener("orientationchange", startRotator);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", startRotator);
      window.removeEventListener("orientationchange", startRotator);
    };
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 999,
        width: "100vw",
      }}
    >
      <div className="usp-header">
        <div className="general-container" ref={uspContainerRef}>
          <div className="delivery">
            <i className="fas fa-truck"></i>
            <span>Preluare si livrare la domiciliu</span>
          </div>
          <div className="open-hours">
            <i className="far fa-clock"></i>
            <span className={`state ${!isStoreOpen && "closed"}`}>
              {isStoreOpen ? "Deschis " : "Inchis "}
            </span>
            <span className="day">{shortDays[day]} </span>
            <span className="hours">{workingHoursInterval}</span>
          </div>
          <div className="phone">
            <a href="tel:+40749111079">
              <i className="fas fa-phone-alt"></i>
              <span>+4 0749 111 079</span>
            </a>
          </div>
        </div>
      </div>
      <nav className={isHamburgerOpen ? "open" : ""}>
        <div className="general-container">
          <a href="https://ecospotless.ro" className="logo">
            <Image src="/logo.png" alt="logo" width={83} height={50} priority />
          </a>
          <div className="toggle-navbar">
            <a href="tel:+40749111079">
              <i className="fas fa-phone-alt"></i>
            </a>
            <div onClick={toggleHamburger} className="container">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </div>
          <ul>
            <li onClick={closeHamburger}>
              <a href="#about-us">Despre noi</a>
            </li>
            <li onClick={closeHamburger}>
              <a href="#technology">Tehnologii</a>
            </li>
            <li onClick={closeHamburger}>
              <a href="#prices">Preturi</a>
            </li>
            <li onClick={closeHamburger}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
