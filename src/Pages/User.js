import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import "../CSS/user.css";
import { FaArrowRight, FaPlus } from "react-icons/fa";
import { HiPencilAlt, HiTag } from "react-icons/hi";

var transactions = require("../Data/transaction.json");
var transaction = transactions["transactions"];

var types = require("../Data/types.json");
console.log(types);

export default function User() {
  const [navOpen, setNavOpen] = useState(false);
  const [greeting, setGreeting] = useState("");
  const [addExpense, setAddExpense] = useState(false);
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

  var onAddExpense = () => {
    setAddExpense(!addExpense);
  };

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
        {addExpense ? (
          <div className="bgFil">
            <div className="add-expense blur">
              <div className="modal-container">
                <div className="title">Add Expense</div>
                <div className="form" style={{ marginTop: "20px" }}>
                  <div className="inp">
                    <label className="lable">
                      <HiPencilAlt /> Expense
                      <input
                        placeholder="Enter Title of Expense"
                        // onChange={onValueChanged}
                        name="expense"
                        className="textfield"
                        type="text"
                        required
                        style={{
                          width: "100%",
                          alignItems: "center",
                          justifyContent: "center",
                          display: "block",
                        }}
                      />
                    </label>
                  </div>
                  <div className="inp">
                    <label
                      className="lable"
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        display: "block",
                      }}
                    >
                      <HiTag /> Type
                      <select name="type" id="type" className="eType">
                        {types.map((type) => (
                          <option value={type["value"]} id={type["id"]}>
                            {type["value"]}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                  <div className="inp">
                    <label className="lable">
                      <HiPencilAlt /> Amount
                      <input
                        placeholder="Amount of Expense"
                        // onChange={onValueChanged}
                        name="expense"
                        className="textfield"
                        type="number"
                        required
                        style={{
                          width: "100%",
                          alignItems: "center",
                          justifyContent: "center",
                          display: "block",
                        }}
                      />
                    </label>
                  </div>
                  <div className="btn" onClick={onAddExpense}>
                    <div className="btn-title">Add Expense</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <> </>
        )}
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
        </div>
        <div className="add" onClick={onAddExpense}>
          <div className="cirBtn">
            <FaPlus className="add-icon " />
          </div>
        </div>
      </section>
    </>
  );
}
