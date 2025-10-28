import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";

function Container() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Hero />
      </div>

      <div className="hero-img-container">
        <div className="horizontal-line"/>
        <img className="hero-img" src="./hh.jpg" alt=""  />
      </div>
    </>
  );
}

export default Container;
