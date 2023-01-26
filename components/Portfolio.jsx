import React from "react";
import { projects } from "../pages/api/data";

function Projects() {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 m-auto">
        {projects.map((project) => (
          <div className="p-6 rounded-lg shadow-lg bg-center bg-cover object-center object-cover">
            <h1 className="text-4xl font-bold shadow-gray-400 text-center p-6">
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
