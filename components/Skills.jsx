import React, { useState } from "react";
import {
  TbBrandJavascript,
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandNextjs,
} from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa";
import { RiVuejsFill } from "react-icons/ri";
import { DiPostgresql } from "react-icons/di";
import {
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiSequelize,
  SiMaterialui,
  SiBootstrap,
  SiTypescript,
  SiMongodb,
  SiAngular,
  SiFirebase,
} from "react-icons/si";

function Skills() {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
  };

  return (
    <div className="flex flex-wrap  mx-auto my-5 items-center justify-center w-full py-10">
      <h1 className="text-4xl font-bold shadow-gray-400  text-center p-6 ">
        My Skills
      </h1>
      <div className="grid grid-cols-3 gap-5 sm:my-4 border shadow-lg shadow-gray-400 py-6 px-4">
        <div className="relative mx-4">
          <i
            className="text-6xl text-brand-html5 "
            onClick={() => handleIconClick("HTML5")}
          >
            <TbBrandHtml5 />
          </i>
          {selectedIcon === "HTML5" && (
            <p className="text-center absolute bottom-[-8] left-0 right-0 ">
              HTML5
            </p>
          )}
        </div>

        <div className="relative mx-4">
          <i
            className="text-6xl text-brand-css3 "
            onClick={() => handleIconClick("CSS3")}
          >
            <TbBrandCss3 />
          </i>
          {selectedIcon === "CSS3" && (
            <p className="text-center absolute bottom-[-8] left-0 right-0 ">
              CSS3
            </p>
          )}
        </div>
        <div className="relative mx-4 ">
          <i
            className="text-6xl text-brand-javascript "
            onClick={() => handleIconClick("Javascript")}
          >
            <TbBrandJavascript />
          </i>
          {selectedIcon === "Javascript" && (
            <p className="text-center absolute bottom-[-8] left-0 right-0">
              Javascript
            </p>
          )}
        </div>
        <div className="relative mx-4">
          <i
            className="text-6xl text-reactjs "
            onClick={() => handleIconClick("ReactJS")}
          >
            <GrReactjs />
          </i>
          {selectedIcon === "ReactJS" && (
            <p className="text-center absolute bottom-[-8] left-0 right-0 ">
              ReactJS
            </p>
          )}
        </div>
        <div className="relative mx-4">
          <i
            className="text-6xl text-nextjs"
            onClick={() => handleIconClick("Next.JS")}
          >
            <TbBrandNextjs />
          </i>
          {selectedIcon === "Next.JS" && (
            <p className="text-center absolute bottom-[-8] left-0 right-0 ">
              Next.JS
            </p>
          )}
        </div>
        <div className="relative mx-4">
          <i
            className="text-6xl text-tailwindcss "
            onClick={() => handleIconClick("TailwindCSS")}
          >
            <SiTailwindcss />
          </i>
          {selectedIcon === "TailwindCSS" && (
            <p className="text-center absolute bottom-[-8] left-0 right-0 ">
              TailwindCSS
            </p>
          )}
        </div>
        <div className="relative mx-4">
          <i
            className="text-6xl text-redux "
            onClick={() => handleIconClick("Redux")}
          >
            <SiRedux />
          </i>
          {selectedIcon === "Redux" && (
            <p className="text-center absolute bottom-[-8] left-0 right-0 ">
              Redux
            </p>
          )}
        </div>
        <div className="relative mx-4">
          <i
            className="text-6xl text-bootstrap "
            onClick={() => handleIconClick("Bootstrap")}
          >
            <SiBootstrap />
          </i>
          {selectedIcon === "Bootstrap" && (
            <p className="text-center absolute bottom-[-8] left-0 right-0 ">
              Bootstrap
            </p>
          )}
        </div>
        <div className="relative mx-4">
          <i
            className="text-6xl text-materialui "
            onClick={() => handleIconClick("MaterialUI")}
          >
            <SiMaterialui />
          </i>
          {selectedIcon === "MaterialUI" && (
            <p className="text-center absolute bottom-[-8] left-0 right-0 ">
              MaterialUI
            </p>
          )}
        </div>
        <div className="relative mx-4">
          <i
            className="text-6xl text-nodejs "
            onClick={() => handleIconClick("NodeJS")}
          >
            <FaNodeJs />
          </i>
          {selectedIcon === "NodeJS" && (
            <p className="text-center absolute bottom-[-8] left-0 right-0 ">
              NodeJS
            </p>
          )}
        </div>
        <div className="relative mx-4">
          <i
            className="text-6xl text-express "
            onClick={() => handleIconClick("ExpressJS")}
          >
            <SiExpress />
          </i>
          {selectedIcon === "ExpressJS" && (
            <p className="text-center absolute bottom-[-8] left-0 right-0 ">
              ExpressJS
            </p>
          )}
        </div>
        <div className="relative mx-4">
          <i
            className="text-6xl text-postgresql "
            onClick={() => handleIconClick("PostgreSQL")}
          >
            <DiPostgresql />
          </i>
          {selectedIcon === "PostgreSQL" && (
            <p className="text-center absolute bottom-[-8] left-0 right-0 ">
              PostgreSQL
            </p>
          )}
        </div>
        <div className="relative mx-4">
          <i
            className="text-6xl text-sequelize "
            onClick={() => handleIconClick("Sequelize")}
          >
            <SiSequelize />
          </i>
          {selectedIcon === "Sequelize" && (
            <p className="text-center absolute bottom-[-8] left-0 right-0 ">
              Sequelize
            </p>
          )}
        </div>
        <div className="relative mx-4">
          <i
            className="text-6xl text-typescript "
            onClick={() => handleIconClick("TypeScript")}
          >
            <SiTypescript />
          </i>
          {selectedIcon === "TypeScript" && (
            <p className="text-center absolute bottom-[-8] left-0 right-0 ">
              TypeScript
            </p>
          )}
        </div>
        <div className="relative mx-4">
          <i
            className="text-6xl text-mongodb "
            onClick={() => handleIconClick("MongoDb")}
          >
            <SiMongodb />
          </i>
          {selectedIcon === "MongoDb" && (
            <p className="text-center absolute bottom-[-8] left-0 right-0 ">
              MongoDb
            </p>
          )}
        </div>
        <div className="relative mx-4">
          <i
            className="text-6xl text-vuejs "
            onClick={() => handleIconClick("VueJS")}
          >
            <RiVuejsFill />
          </i>
          {selectedIcon === "VueJS" && (
            <p className="text-center absolute bottom-[-8] left-0 right-0 ">
              VueJS
            </p>
          )}
        </div>
        <div className="relative mx-4">
          <i
            className="text-6xl text-angular "
            onClick={() => handleIconClick("Angular")}
          >
            <SiAngular />
          </i>
          {selectedIcon === "Angular" && (
            <p className="text-center absolute bottom-[-8] left-0 right-0 ">
              Angular
            </p>
          )}
        </div>
        <div className="relative mx-4">
          <i
            className="text-6xl text-firebase "
            onClick={() => handleIconClick("Firebase")}
          >
            <SiFirebase />
          </i>
          {selectedIcon === "Firebase" && (
            <p className="text-center absolute bottom-[-8] left-0 right-0 ">
              Firebase
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Skills;
