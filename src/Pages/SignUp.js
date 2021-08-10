import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "../CSS/signup.css";

export default function SignUp() {
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");
  const [status, setStatus] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  var onValueChanged = (e) => {
    setErr("");
    switch (e.target.name) {
      case "uname":
        setUname(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "pass":
        setPass(e.target.value);
        break;
      default:
        break;
    }
  };

  var onSubmitDetails = () => {
    if (uname === "" || email === "" || pass === "")
      return setErr("Error validating. Please try again.");
    if (!validateEmail()) return setErr("Incorrect Email Format.");

    sendDetails();
  };

  var validateEmail = () => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  var sendDetails = () => {
    //Send Deeds
    setStatus(true);
  };

  return (
    <>
      <Navbar setNavOpen={setNavOpen} navOpen={navOpen} />
      <section id="signup">
        <div className="container">
          <h1 className="title">Create Account</h1>
          <div className="form">
            <div className="inp">
              <label className="lable">
                Username
                <input
                  placeholder="Enter Username"
                  onChange={onValueChanged}
                  name="uname"
                  className="textfield"
                  type="text"
                  required
                />
              </label>
            </div>
            <div className="inp">
              <label className="lable">
                Email
                <input
                  onChange={onValueChanged}
                  name="email"
                  placeholder="Enter Email"
                  className="textfield"
                  type="email"
                  required
                />
              </label>
            </div>
            <div className="inp">
              <label className="lable">
                Password
                <input
                  onChange={onValueChanged}
                  name="pass"
                  placeholder="Enter Password"
                  className="textfield"
                  type="password"
                  required
                />
              </label>
            </div>
          </div>
        </div>
        <div className="btn" onClick={onSubmitDetails}>
          <div className="btn-title">
            {status ? "Creating Account, please wait." : "Sign Up"}
          </div>
        </div>
        <div className="err">{err}</div>
      </section>
    </>
  );
}
