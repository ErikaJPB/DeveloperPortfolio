import React from "react";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";

function portfolio() {
  return (
    <div className="margin-auto justify-center text-center">
      <Hero
        heading="Portfolio"
        message="Explore some of the projects I've been working on by scrolling down below."
      />

      <Portfolio />
      <br />

      <br />
    </div>
  );
}

export default portfolio;
