import React from "react";

function Hero() {
  return (
    <div className="hero-root">
      <div className="badge">
        <span>Build. Ship. Dominate.</span>
        <svg width="16" height="16" fill="none">
          <path
            stroke="#1E1F25"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-opacity=".5"
            stroke-width="1.25"
            d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
          ></path>
        </svg>
      </div>
      <h1 className="hero-title">
        No more premature crashes. Just smooth execution.
      </h1>
      <p className="hero-subtext">
        Fapster helps you go from idea to impact — faster than ever. Design,
        launch, and grow with tools that actually get out of your way.
      </p>

      <div className="hero-cta">
        <button className="btn">Start free trial</button>
        <button className="btn-second">
          <span>Pricing</span>
          <svg width="16" height="16" fill="none">
            <path
              stroke="#1E1F25"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-opacity=".5"
              stroke-width="1.25"
              d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Hero;
