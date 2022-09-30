import React from "react";

import Navbar from "../components/Navbar";

const Signup = () => {
  return (
    <div>
      <Navbar />
      <div className="LSwrapper Login-form">
        <div className="LStitle-text">
          <div className="LStitle Login"> Signup Form</div>{" "}
          <div className="LStitle Signup"> </div>{" "}
        </div>
        <div className="LSform-container"></div>
        <div className="LSForm-inner">
          {/* <form action="..." className="Login">
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
          </form> */}
          <form action="..." className="Signup">
            <div className="LSfield">
              <input
                type="text"
                placeholder="Email Address"
                required
                className="loginInput LI1"
              />
            </div>
            <div className="LSfield">
              <input
                type="password"
                placeholder="Password"
                required
                className="loginInput"
              />
            </div>
            <div className="LSfield">
              <input
                type="password"
                placeholder="Confirm Password"
                required
                className="loginInput"
              />
            </div>
            <div className="LSfield btn">
              <div className="btn-layer"></div>
              <input
                type="submit"
                value="Signup"
                className="loginBTN"
                // onClick={signupbtn}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
