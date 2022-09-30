import React from "react";
import Navbar from "../components/Navbar";
// import "mdbootstrap/css/bootstrap.css";
// import "mdbootstrap/css/mdb.min.css";
// import "mdb-ui-kit/css/mdb.min.css";
import "../styles/LoginSignup.css";

const LoginSignup = () => {
  return (
    <div>
      <Navbar />
      <div className="LSwrapper Login-form">
        <div className="LStitle-text">
          <div className="LStitle Login"> Login Form</div>{" "}
          <div className="LStitle Signup"> </div>{" "}
        </div>
        <div className="LSform-container">
          <div className="LSslide-controls">
            <input type="radio" name="slide" id="Login" checked />
            <input type="radio" name="slide" id="Signup" checked />
            <label htmlFor="Login" className="LSslide">
              Login
            </label>
            <label htmlFor="Signup" className="LSslide Signup">
              Sign Up
            </label>
            <div className="LSslide-tab"></div>
          </div>
        </div>
        <div className="LSForm-inner">
          <form action="..." className="Login">
            <div className="LSfield">
              <input type="text" placeholder="Email Address" required />
            </div>
            <div className="LSfield">
              <input type="password" placeholder="Password" required />
            </div>
            <div className="LSpass-link">
              <a href="...">Forgot password</a>
            </div>
            <div className="LSfield btn">
              <div className="btn-layer"></div>
              <input type="submit" value="Login" />
            </div>
            <div className="Signup-link">
              Not a member? <a href="...">SignUp now</a>
            </div>
          </form>
          <form action="..." className="Signup">
            <div className="LSfield">
              <input type="text" placeholder="Email Address" required />
            </div>
            <div className="LSfield">
              <input type="password" placeholder="Password" required />
            </div>
            <div className="LSfield">
              <input type="password" placeholder="Confirm Password" required />
            </div>
            <div className="LSfield btn">
              <div className="btn-layer"></div>
              <input type="submit" value="Signup" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
