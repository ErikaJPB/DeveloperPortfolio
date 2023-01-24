import React from "react";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";

function portfolio() {
  return (
    <div className="margin-auto justify-center text-center">
      <Hero
        heading="Portfolio"
        message="Scroll down to see some of the projects I've been working on"
      />
      <Portfolio />
    </div>
  );
}

export default portfolio;
