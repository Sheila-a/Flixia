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
      <nav class="navbar navbar-expand-lg navbar-light bg-light landing-nav">
        <div class="container-fluid">
          <a class="navbar-brand" href="...">
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
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item landing-li">
                <a class="nav-link active" aria-current="page" href="...">
                  Home
                </a>
              </li>
              <li class="nav-item landing-li">
                <a class="nav-link" href="...">
                  Movies
                </a>
              </li>
              <li class="nav-item landing-li">
                <a class="nav-link" href="...">
                  Series
                </a>
              </li>
              <li class="nav-item landing-li">
                <a class="nav-link" href="...">
                  Trends
                </a>
              </li>
              <li class="nav-item landing-li">
                <a class="nav-link" href="...">
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
                  class="fa-solid fa-sort-down"
                  //   style={{ marginTop: "-2vh" }}
                ></i>
              </div>
              <div className="landing-toggle me-2">
                <i class="fa-solid fa-moon landing-tIcon"></i>
                <i class="fa-solid fa-sun landing-tIcon"></i>
                <div className="landing-toggle_ball"></div>
              </div>
              <Link to="/login-signup" className="me-2">
                Login/Signup
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
