import React from "react";

const PricesSection = () => (
  <section class="prices" id="prices">
    <h2>Preturi</h2>
    <div class="general-container">
      <div class="price-box">
        <i class="fas fa-tshirt"></i>
        <h3>Haine</h3>
        <h4>spalat &bull; curatat &bull; calcat</h4>
        <p>de la</p>
        <p class="price">
          7<span>lei</span>
        </p>
        <p>pe bucata</p>
      </div>
      <div class="price-box">
        <i class="fas fa-bed"></i>
        <h3>Lenjerii</h3>
        <h4>spalat &bull; curatat &bull; calcat</h4>
        <p>de la</p>
        <p class="price">
          4<span>lei</span>
        </p>
        <p>pe bucata</p>
      </div>
      <div class="price-box">
        <i class="fas fa-feather"></i>
        <h3>Articole delicate</h3>
        <h4>spalat &bull; curatat &bull; calcat</h4>
        <p>de la</p>
        <p class="price">
          33<span>lei</span>
        </p>
        <p>pe bucata</p>
      </div>
    </div>
    <div class="details">
      <p>
        Pentru mai multe preturi ne puteti contacta telefonic, pe e-mail sau la
        spalatorie.
      </p>
    </div>
  </section>
);

export default PricesSection;
