import React from "react";
import Image from "next/image";

const Footer = () => (
  <footer>
    <div className="general-container">
      <section className="contact">
        <h3>Contact</h3>
        <a href="tel:+40749111079">
          <i className="fas fa-phone-alt"></i>
          <span>+4 0749 111 079</span>
        </a>
        <a href="mailto:spotlessbistrita@gmail.com">
          <i className="fas fa-envelope"></i>
          <span>spotlessbistrita@gmail.com</span>
        </a>
        <div className="address">
          <p>Sucevei, 6A</p>
          <p>Bistrita, Bistrita-Nasaud, Romania</p>
        </div>
      </section>
      <section className="details">
        <h3>Detalii</h3>
        <div className="delivery">
          <i className="fas fa-truck"></i>
          <span>Preluare si livrare la domiciliu</span>
        </div>
        <div className="hours">
          <i className="far fa-clock"></i>
          Luni-Vineri 8:00-18:00
        </div>
        <div className="hours">
          <i className="far fa-clock"></i>
          Sambata 9:00-12:00
        </div>
        <h4>Urmariti-ne pe:</h4>
        <a
          href="https://www.facebook.com/spotlesslaundryspecialist/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
      </section>
      <section className="navigation">
        <h3>Sectiuni</h3>
        <nav>
          <ul>
            <li>
              <a href="#about-us">Despre noi</a>
            </li>
            <li>
              <a href="#technology">Tehnologie</a>
            </li>
            <li>
              <a href="#prices">Preturi</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </section>
      <section className="logo">
        <a href="#" className="logo">
          <Image src="/logo.png" alt="logo" width={99} height={50} />
        </a>
        <div>
          &copy; <span className="year"></span> Spotless. All rights reserved.
        </div>
      </section>
    </div>
  </footer>
);

export default Footer;
