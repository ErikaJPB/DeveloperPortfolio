import React from "react";
import Hero from "../components/Hero";
import Contact from "../components/Contact";

function contact() {
  return (
    <div className="margin-auto justify-center text-center">
      <Hero
        heading="Contact"
        message="Submit the form below
        for more content."
      />
      <div className="relative">
        <div className="">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default contact;
