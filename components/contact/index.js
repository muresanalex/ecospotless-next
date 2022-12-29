import React from "react";
import { Wrapper } from "@googlemaps/react-wrapper";
import Map from "../map/map";
import Marker from "../map/marker";

const ContactSection = () => (
  <section className="contact" id="contact">
    <div className="general-container">
      <h2>Ne gasiti la:</h2>
      <div className="contact-box">
        <h4>Adresa</h4>
        <p>str. Sucevei, 6A, Bistrita</p>
      </div>
      <div className="contact-box">
        <h4>Telefon</h4>
        <a href="tel:+40749111079">
          <span>+4 0749 111 079</span>
        </a>
      </div>
      <div className="contact-box">
        <h4>E-mail</h4>
        <a href="mailto:spotlessbistrita@gmail.com">
          <span>spotlessbistrita@gmail.com</span>
        </a>
      </div>
    </div>
    <div className="google-maps-wrapper">
      <Wrapper apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}>
        <Map center={{ lat: 47.143753, lng: 24.507595 }} zoom={16}>
          <Marker position={{ lat: 47.143753, lng: 24.507595 }} />
        </Map>
      </Wrapper>
    </div>
  </section>
);

export default ContactSection;
