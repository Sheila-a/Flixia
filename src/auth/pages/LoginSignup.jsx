import React from "react";
import Navbar from "../components/Navbar";
// import "mdbootstrap/css/bootstrap.css";
// import "mdbootstrap/css/mdb.min.css";
// import "mdb-ui-kit/css/mdb.min.css";
import "../styles/LoginSignup.css";

const LoginSignup = () => {
  // const Logintext = document.querySelector(".LStitle-text.Login");

  // const Loginform = document.querySelector("form.Login");

  // const Loginbtn = document.querySelector("label.Login");

  // const signupbtn = document.querySelector("label Signup");

  // const signuplink = document.querySelector("Form.Signup-link a");

  // signupbtn(() => {
  //   Loginform.style.marginLeft = "-50%";
  //   Logintext.style.marginLeft = "-50%";
  // });

  // Loginbtn(() => {
  //   Loginform.style.marginLeft = "0%";
  //   Logintext.style.marginLeft = "0%";
  // });

  // signuplink(() => {
  //   signupbtn.click();
  //   return false;
  // });
  return (
    <div>
      <Navbar />
      <div className="LSwrapper Login-form">
        <div className="LStitle-text">
          <div className="LStitle Login"> Login Form</div>{" "}
          <div className="LStitle Signup"> </div>{" "}
        </div>
        <div className="LSform-container">
          {/* <div className="LSslide-controls">
            <input type="radio" name="slide" id="Login" checked />
            <input type="radio" name="slide" id="Signup" checked />
            <label htmlFor="Login" className="LSslide">
              Login
            </label>
            <label htmlFor="Signup" className="LSslide Signup">
              Sign Up
            </label>
            <div className="LSslide-tab"></div>
          </div> */}
        </div>
        <div className="LSForm-inner">
          <form action="..." className="Login">
            <div className="LSfield">
              <input
                type="text"
                className="loginInput LI1"
                placeholder="Email Address"
                required
              />
            </div>
            <div className="LSfield">
              <input
                type="password"
                className="loginInput"
                placeholder="Password"
                required
              />
            </div>
            <div className="LSpass-link">
              <a href="...">Forgot password</a>
            </div>
            <div className="LSfield btn">
              <div className="btn-layer"></div>
              <input
                type="submit"
                value="Login"
                className="loginBTN"
                // onClick={Loginbtn}
              />
            </div>
            <div className="Signup-link">
              Not a member?{" "}
              <a
                href="..."
                // onClick={signuplink}
              >
                SignUp now
              </a>
            </div>
          </form>
          {/* <form action="..." className="Signup">
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
              <input
                type="submit"
                value="Signup"
                // onClick={signupbtn}
              />
            </div>
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
