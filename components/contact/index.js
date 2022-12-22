import React from "react";

const ContactSection = () => (
  <section class="contact" id="contact">
    <div class="general-container">
      <h2>Ne gasiti la:</h2>
      <div class="contact-box">
        <h4>Adresa</h4>
        <p>str. Sucevei, 6A, Bistrita</p>
      </div>
      <div class="contact-box">
        <h4>Telefon</h4>
        <a href="tel:+40749111079">
          <span>+4 0749 111 079</span>
        </a>
      </div>
      <div class="contact-box">
        <h4>E-mail</h4>
        <a href="mailto:spotlessbistrita@gmail.com">
          <span>spotlessbistrita@gmail.com</span>
        </a>
      </div>
    </div>
    <iframe
      title="Locatia pe Google Maps"
      width="100%"
      height="450"
      frameborder="0"
      style={{ border: 0 }}
      src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_KEY}&q=47.143753,24.507595`}
      allowFullscreen
    ></iframe>
  </section>
);

export default ContactSection;
