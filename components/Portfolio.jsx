import React from "react";
import { projects } from "../pages/api/data";

function Projects() {
  return (
    <div className="container px-5 py-10 mx-auto text-center lg:px-40">
      <div className="flex flex-col w-full mb-20">
        <div className="grid grid-cols-auto gap-8 m-auto">
          {projects.map((project) => (
            <div className="p-6 rounded-lg w-full shadow-lg bg-center bg-cover object-center object-cover">
              <h3 className="text-4xl font-bold shadow-gray-400 text-center p-6">
                {project.title}
              </h3>
              <img src={project.image} alt={project.title} className="w-full" />

              <h4 className="text-black-400 font-medium border text-center">
                {project.Description}
              </h4>
              <div className="flex justify-between mt-4">
                {project.GitHub.map((url) => (
                  <a href={url} className="text-black-500 font-medium">
                    View on GitHub
                  </a>
                ))}
                <a
                  href={project.Deployment}
                  className="text-black-500 font-medium"
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
