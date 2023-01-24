import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";

function about() {
  return (
    <div className="margin-auto justify-center">
      <Hero
        heading="About Me"
        message="Scroll down to read a brief overwiew of my  background and experience "
      />
      <About />
    </div>
  );
}

export default about;
