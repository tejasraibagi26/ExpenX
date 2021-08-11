import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import "../CSS/signup.css";
import { useHistory } from "react-router-dom";

let users = require("../Data/users.json");
console.log(users.users.length);

export default function SignIn() {
  let history = useHistory();
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");
  const [status, setStatus] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  var onValueChanged = (e) => {
    console.log(users[1]);
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

    for (var i = 0; i <= users.users.length - 1; i++) {
      console.log(i);
      if (uname === users.users[i]["user"]) {
        if (pass === users.users[i]["pass"]) {
          console.log("Verified");
          localStorage.setItem("user", uname);
          sendDetails(i);
        }
      }
    }
  };

  var sendDetails = (i) => {
    //Send Deeds
    setStatus(true);
    history.push(`/user/${i}`);
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
