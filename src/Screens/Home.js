import React, { useState } from "react";
import "../CSS/home.css";
import LandingImg from "../Images/img.svg";
import finance from "../Images/finance.gif";
import money from "../Images/money.gif";
import grow from "../Images/grow.gif";
import Navbar from "../Components/Navbar";
import HomeComponent from "../Components/home";
import What from "../Components/What";
import CreateAcc from "../Components/create";
import SignUp from "../Images/signup.gif";

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <Navbar navOpen={navOpen} setNavOpen={setNavOpen} />
      <HomeComponent LandingImg={LandingImg} />
      <What finance={finance} money={money} grow={grow} />
      <CreateAcc SignUp={SignUp} />
    </>
  );
}
