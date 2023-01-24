import React from "react";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";

function portfolio() {
  return (
    <div className="margin-auto justify-center">
      <Hero heading="Projects" message="Scroll down" />
      <Portfolio />
    </div>
  );
}

export default portfolio;
