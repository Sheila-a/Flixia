import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.css";
import Logo from "../assets/img/Logo.png";
import Profile from "../assets/img/profile.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light landing-nav"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src={Logo}
              alt=""
              width="145"
              height="40"
              className="d-inline-block align-text-top landing-logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item landing-li">
                <a className="nav-link active" aria-current="page" href="...">
                  Home
                </a>
              </li>
              <li className="nav-item landing-li">
                <a className="nav-link" href="...">
                  Movies
                </a>
              </li>
              <li className="nav-item landing-li">
                <a className="nav-link" href="...">
                  Series
                </a>
              </li>
              <li className="nav-item landing-li">
                <a className="nav-link" href="...">
                  Trends
                </a>
              </li>
              <li className="nav-item landing-li">
                <a className="nav-link" href="...">
                  Popular
                </a>
              </li>
            </ul>
            <div
              className="d-flex landing-right"
              style={{ alignItems: "center" }}
            >
              <img
                src={Profile}
                alt=""
                width="40"
                height="40"
                className="me-2 d-inline-block align-text-top  landing-profile"
              />
              <div className="landing-profile_text_container">
                <span className="landing-profile_text">Profile</span>
                <i
                  className="fa-solid fa-sort-down"
                  //   style={{ marginTop: "-2vh" }}
                ></i>
              </div>
              <div className="landing-toggle toggle landingToggle me-2">
                <i className="fa-solid fa-moon landing-tIcon"></i>
                <i className="fa-solid fa-sun landing-tIcon"></i>
                <div className="landing-toggle_ball"></div>
              </div>
              <Link to="/login" className="me-2 linkNav">
                Login
              </Link>
              <Link to="/signup" className="me-2 linkNav">
                Signup
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
