import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import "../CSS/signup.css";
import { useHistory } from "react-router-dom";

export default function SignIn() {
  let history = useHistory();
  const [uname, setUname] = useState("");
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
      case "pass":
        setPass(e.target.value);
        break;
      default:
        break;
    }
  };

  var onSubmitDetails = () => {
    if (uname === "" || pass === "")
      return setErr("Error validating. Please try again.");

    sendDetails();
  };

  var sendDetails = () => {
    //Send Deeds
    setStatus(true);
    history.push("/user/1");
  };

  return (
    <>
      <Navbar setNavOpen={setNavOpen} navOpen={navOpen} />
      <section id="signup">
        <div className="container">
          <h1 className="title">Sign In</h1>
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
        <p align="start">
          <div className="btn" onClick={onSubmitDetails}>
            <div className="btn-title">
              {status ? "Logging In, please wait." : "Login"}
            </div>
          </div>
        </p>
        <div className="err">{err}</div>
      </section>
    </>
  );
}
