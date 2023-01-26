import React from "react";
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaMaterialUi,
  FaBootstrap,
  FaHtml5,
  FaDatabase,
} from "react-icons/fa";
import { TiPostgresql } from "react-icons/ti";
import { TiTailwindCss } from "react-icons/ti";

function First() {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="text-center mx-4 my-4">
        <FaJs size={50} color="#F7DF1E" />
        <p className="text-lg font-medium">JavaScript</p>
      </div>
      <div className="text-center mx-4 my-4">
        <FaReact size={50} color="#00D8FF" />
        <p className="text-lg font-medium">React</p>
      </div>
      <div className="text-center mx-4 my-4">
        <TiPostgresql size={50} color="#336791" />
        <p className="text-lg font-medium">PostgreSQL</p>
      </div>
      <div className="text-center mx-4 my-4">
        <FaNodeJs size={50} color="#83CD29" />
        <p className="text-lg font-medium">Express</p>
      </div>
      <div className="text-center mx-4 my-4">
        <FaMaterialUi size={50} color="#0081CB" />
        <p className="text-lg font-medium">Material-UI</p>
      </div>
      <div className="text-center mx-4 my-4">
        <FaBootstrap size={50} color="#563D7C" />
        <p className="text-lg font-medium">Bootstrap</p>
      </div>
      <div className="text-center mx-4 my-4">
        <TiTailwindCss size={50} color="#38B2AC" />
        <p className="text-lg font-medium">TailwindCSS</p>
      </div>
      <div className="text-center mx-4 my-4">
        <FaHtml5 size={50} color="#E44D26" />
        <p className="text-lg font-medium">HTML</p>
      </div>
    </div>
  );
}

export default First;
