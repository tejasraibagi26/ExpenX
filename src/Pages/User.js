import React, { useState } from "react";
import Navbar from "../Components/Navbar";

export default function User() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <Navbar navOpen={navOpen} setNavOpen={setNavOpen} isUserLoggedIn={true} />
      <h1>User Dashboard</h1>
      <section id="user-dash">
        <div className="container">
          <h1>User Dashboard</h1>
        </div>
      </section>
    </>
  );
}
