import React from "react";
import Hero from "../components/Hero";
import Contact from "../components/Contact";

function contact() {
  return (
    <div className="mt-1 ml-2">
      <Hero
        heading="Contact"
        message="Submit the form below for more content."
      />
      <Contact />
    </div>
  );
}

export default contact;
