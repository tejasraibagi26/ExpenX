import React, { useState } from "react";
import "../CSS/home.css";
import LandingImg from "../Images/img.svg";

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <a href="#" className="nav-logo">
            ExpenX.
          </a>
          <ul
            className={navOpen ? "nav-menu active" : "nav-menu"}
            id="nav-mobile-menu"
          >
            <li className="nav-item">
              <a href="#" className="nav-link">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
          <div
            className={navOpen ? "hamburger active" : "hamburger"}
            id="ham"
            onClick={() => setNavOpen(!navOpen)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
      <section id="home">
        <div className="container">
          <div className="left">
            <span className="white">Welcome To, </span>
            <h1 className="title">ExpenX.</h1>
            <p className="desc">One stop solution for managing all Expenses.</p>
            <div className="btn">
              <div className="btn-title">Start Saving.</div>
            </div>
          </div>
          <div className="right">
            <div className="image">
              <img src={LandingImg} alt="Image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
