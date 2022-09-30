import React from "react";
import FT1 from "../assets/img/f-t-1.png";
import "../styles/Bodyy.css";

const Bodyy = () => {
  return (
    <div className="Boddy-font">
      <div className="landing-sidebar">
        <i class="bodyy-iconss fa-solid fa-magnifying-glass"></i>
        <i class="bodyy-iconss fa-solid fa-house"></i>
        <i class="bodyy-iconss fa-solid fa-user"></i>
        <i class="bodyy-iconss fa-solid fa-bookmark"></i>
        <i class="bodyy-iconss fa-solid fa-tv"></i>
        <i class="bodyy-iconss fa-solid fa-hourglass-start"></i>
        <i class="bodyy-iconss fa-solid fa-cart-shopping"></i>
      </div>
      <div className="landing-body_container">
        <div className="body-content_container">
          <div className="featurred">
            <img className="feature-cover_title" src={FT1} alt="" />
            <p className="feature-cover_desc Bodyy-font">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              ab. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Culpa, ab. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Culpa, ab. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Culpa, ab.
            </p>
            <button className="feature-cover_btn">
              WATCH<span className="fas fa-chevron-right"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bodyy;
