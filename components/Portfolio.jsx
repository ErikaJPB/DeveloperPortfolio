import React from "react";
import { projects } from "../pages/api/data";

function Projects() {
  return (
    <div className="container px-5 py-10 mx-auto my-5 text-center lg:px-40">
      <h1 className="text-4xl font-bold shadow-gray-400  text-center p-6">
        Some of the work I've made!
      </h1>
      <div className="flex flex-col w-full mb-20">
        <div className="grid grid-cols-1 gap-10  m-auto ">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-lg w-full shadow-lg 
              border
              shadow-gray-400 bg-center bg-cover object-center object-cover"
            >
              <h3 className="text-4xl font-bold shadow-gray-400 text-center p-6">
                {project.title}
              </h3>
              <img src={project.image} alt={project.title} className="w-full" />
              <br />
              <br />

              <h4 className="text-black-400 font-medium border text-center">
                {project.Description}
              </h4>
              <div className="flex justify-between mt-4">
                {project.GitHub[0] && (
                  <a
                    href={project.GitHub[0]}
                    className="text-black-500 font-bold font-xl"
                  >
                    View on GitHub
                  </a>
                )}

                <a
                  href={project.Deployment}
                  className="text-black-500 font-bold"
                >
                  View Deployment
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
