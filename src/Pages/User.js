import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import "../CSS/user.css";

export default function User() {
  const [navOpen, setNavOpen] = useState(false);
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    var today = new Date();
    var currentHr = today.getHours();

    if (currentHr < 12) setGreeting("Good Morning");
    else if (currentHr < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");
  }, []);
  return (
    <>
      <Navbar navOpen={navOpen} setNavOpen={setNavOpen} isUserLoggedIn={true} />
      <h1>User Dashboard</h1>
      <section id="user-dash">
        <h1 className="greeting">{greeting}, Tejas Raibagi.</h1>
        <div className="container">
          <div className="left-container">
            <div className="cont-title">Transcations</div>
          </div>
          <div className="right-container">
            <div className="cont-title">Categories</div>
          </div>
        </div>
      </section>
    </>
  );
}
