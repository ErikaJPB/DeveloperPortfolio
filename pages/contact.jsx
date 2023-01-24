import React from "react";
import Hero from "../components/Hero";
import Contact from "../components/Contact";

function contact() {
  return (
    <div>
      <Hero
        heading="Contact"
        message="Submit the form below for more content."
      />
      <Contact />
    </div>
  );
}

export default contact;
