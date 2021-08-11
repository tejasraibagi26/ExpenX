import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import "../CSS/user.css";
import { FaArrowRight, FaPlus } from "react-icons/fa";

var transactions = require("../Data/transaction.json");
var transaction = transactions["transactions"];
transaction.map((t) => console.log(t));

export default function User() {
  const [navOpen, setNavOpen] = useState(false);
  const [greeting, setGreeting] = useState("");
  var user = localStorage.getItem("user");

  useEffect(() => {
    var today = new Date();
    var currentHr = today.getHours();
    user = localStorage.getItem("user");
    console.log(user);

    if (currentHr < 12) setGreeting("Good Morning");
    else if (currentHr < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");
  }, []);
  return (
    <>
      <Navbar
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        isUserLoggedIn={true}
        username={user}
      />
      <h1>User Dashboard</h1>
      <section id="user-dash">
        <h1 className="greeting">
          {greeting}, {user}.
        </h1>
        <div className="container">
          <div className="left-container">
            <div className="row">
              <div className="cont-title">Transcations</div>
              <FaArrowRight className="icon" />
            </div>
            <div className="transction">
              {transaction.map((t) => (
                <div className="tran" key={t["id"]}>
                  <div className="title">
                    {t["trans-name"]}
                    <div className="type">{t["type"]}</div>
                  </div>
                  <div className="amount">{t["amount"]}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="right-container">
            <div className="row">
              <div className="cont-title">Categories</div>
              <FaArrowRight className="icon" />
            </div>
          </div>
        </div>
        <div className="add">
          <div className="cirBtn">
            <FaPlus className="add-icon " />
          </div>
        </div>
      </section>
    </>
  );
}
