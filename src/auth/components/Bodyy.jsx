import React from "react";
import FT1 from "../assets/img/f-t-1.png";
import "../styles/Bodyy.css";

const Bodyy = () => {
  return (
    <div className="Boddy-font">
      <div
        className="landing-sidebar"
        // data-aos="fade-right"
        // data-aos-easing="linear"
        // data-aos-duration="1500"
      >
        <i
          className="bodyy-iconss fa-solid fa-magnifying-glass"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        ></i>
        <i
          className="bodyy-iconss fa-solid fa-house"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        ></i>
        <i
          className="bodyy-iconss fa-solid fa-user"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        ></i>
        <i
          className="bodyy-iconss fa-solid fa-bookmark"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        ></i>
        <i
          className="bodyy-iconss fa-solid fa-tv"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        ></i>
        <i
          className="bodyy-iconss fa-solid fa-hourglass-start"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        ></i>
        <i
          className="bodyy-iconss fa-solid fa-cart-shopping"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        ></i>
      </div>
      <div
        className="landing-body_container"
        // data-aos="zoom-out-up"
        // data-aos-easing="linear"
        // data-aos-duration="1500"
      >
        <div className="body-content_container">
          <div className="featurred">
            <img
              className="feature-cover_title"
              src={FT1}
              alt=""
              data-aos="zoom-out-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
            />
            <p
              className="feature-cover_desc Bodyy-font"
              data-aos="zoom-out-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              Flixia, a movie streaming application that helps you organise your
              movies, categorically display them by genre and provides optimum
              video quality. Culpa, ab. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Culpa, ab. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Culpa, ab.
            </p>
            <button
              className="feature-cover_btn"
              data-aos="zoom-out-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              WATCH<span className="fas fa-chevron-right"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bodyy;
