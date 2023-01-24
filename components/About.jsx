import React from "react";
import { TfiArrowCircleUp } from "react-icons/tfi";
import Link from "next/link";

function About() {
  return (
    <div className="max-w-[1240px] m-auto p-6 h-screen">
      <div className="max-w-[600px] m-auto">
        <p className="text-4xl font-bold shadow-gray-400   p-6 justify-center">
          My name is Erika, and I am a software web developer with experience in
          JavaScript, ReactJs, Redux, NodeJs, Express, and PostgreSQL. I am
          passionate about technology, a self-learner, and I am continuously
          learning and growing my skills through every project I undertake.
        </p>
      </div>
      <div className="flex justify-center py-12 font-semibold">
        <Link href="/">
          <div className="rounded-full shadow-lg shadow-gray-600 p-8 cursor-pointer hover:scale-100 ease-in duration-300 ">
            <TfiArrowCircleUp />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default About;
