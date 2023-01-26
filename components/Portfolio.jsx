import React from "react";
import { projects } from "../pages/api/data";

function Projects() {
  return (
    <div className="relative">
      <div className="flex sm:flex-row flex-wrap space-x-8 mt-10 justify-center">
        {projects.map((project) => (
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-6 rounded-lg shadow-lg bg-center bg-cover">
            <h1 className="text-4xl font-bold shadow-gray-400  text-center p-6">
              {project.title}
            </h1>
            <p className="text-gray-600 text-center">{project.Description}</p>
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
  );
}

export default Projects;
