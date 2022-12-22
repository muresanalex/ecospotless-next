import React from "react";

const PricesSection = () => (
  <section className="prices" id="prices">
    <h2>Preturi</h2>
    <div className="general-container">
      <div className="price-box">
        <i className="fas fa-tshirt"></i>
        <h3>Haine</h3>
        <h4>spalat &bull; curatat &bull; calcat</h4>
        <p>de la</p>
        <p className="price">
          7<span>lei</span>
        </p>
        <p>pe bucata</p>
      </div>
      <div className="price-box">
        <i className="fas fa-bed"></i>
        <h3>Lenjerii</h3>
        <h4>spalat &bull; curatat &bull; calcat</h4>
        <p>de la</p>
        <p className="price">
          4<span>lei</span>
        </p>
        <p>pe bucata</p>
      </div>
      <div className="price-box">
        <i className="fas fa-feather"></i>
        <h3>Articole delicate</h3>
        <h4>spalat &bull; curatat &bull; calcat</h4>
        <p>de la</p>
        <p className="price">
          33<span>lei</span>
        </p>
        <p>pe bucata</p>
      </div>
    </div>
    <div className="details">
      <p>
        Pentru mai multe preturi ne puteti contacta telefonic, pe e-mail sau la
        spalatorie.
      </p>
    </div>
  </section>
);

export default PricesSection;
