import React, { useState } from "react";
import "../CSS/home.css";
import LandingImg from "../Images/img.svg";
import finance from "../Images/finance.gif";
import money from "../Images/money.gif";
import grow from "../Images/grow.gif";

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
      <section id="what">
        {/* <div className="what-is">
          <h1 className="text">What We Offer</h1>
        </div> */}
        <div className="container">
          <div className="left">
            <div className="lImg">
              <img src={finance} alt="finance" />
              <p align="center" className="left-info">
                Manage Finance Hasselfree.
              </p>
            </div>
          </div>
          <div className="middle">
            <div className="mImg">
              <img src={money} alt="money" />
              <p align="center" className="left-info">
                Track Expenses on your fingertips.
              </p>
            </div>
          </div>
          <div className="right">
            <div className="rImg">
              <img src={grow} alt="grow" />
              <p align="center" className="left-info">
                Grow you account with ExpenX.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
