import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import Image from "next/image";

function Links() {
  return (
    <div className="flex justify-center my-18 mt-1">
      <a href="https://github.com/ErikaJPB" target="_blank" rel="noreferrer">
        <AiOutlineGithub className="text-4xl mx-8 cursor-pointer  ml-1 my-2" />
      </a>
      <a
        href="https://linkedin.com/in/ErikaJPB/"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineLinkedin className="text-4xl mx-8 cursor-pointer  ml-1 my-2" />
      </a>
    </div>
  );
}

export default Links;
