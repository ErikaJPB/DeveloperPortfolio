import React from "react";
import Hero from "../components/Hero";
import Contact from "../components/Contact";

function contact() {
  return (
    <div className="margin-auto justify-center text-center">
      <Hero
        heading="Contact"
        message="Get in touch with me by submitting the form below for more information."
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
