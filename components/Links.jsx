import React from "react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

function Links() {
  return (
    <div className="flex justify-center my-18 mt-1">
      <a href="https://github.com/ErikaJPB" target="_blank" rel="noreferrer">
        <AiOutlineGithub className="text-4xl mx-8 cursor-pointer  ml-1 my-2" />
      </a>
      <a
        href="https://linkedin.com/in/erika-pineda-92322b262/"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineLinkedin className="text-4xl mx-8 cursor-pointer  ml-1 my-2" />
      </a>
      <a
        href="https://twitter.com/TheGreyMind"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineTwitter className="text-4xl mx-8 cursor-pointer  ml-1 my-2" />
      </a>
    </div>
  );
}

export default Links;
