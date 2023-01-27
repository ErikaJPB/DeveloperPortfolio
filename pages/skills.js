import React from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills";

function skills() {
  return (
    <div className="margin-auto justify-center text-center">
      <Hero
        heading="Skills"
        message="Scroll down to know some of the technologies I have worked with "
      />
      <Skills />
    </div>
  );
}

export default skills;
