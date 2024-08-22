import React from "react";
//import "./skills.css";
//frontend
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import typescript from "../assets/typescript.png";
import tailwind from "../assets/tailwind.png";
import redux from "../assets/redux.png";
//import jest from "../assets/jest.png";
import chakra from "../assets/chakra.png";
import nextjs from "../assets/nextjs.png";
import materialui from "../assets/material-ui.png";
//import firebase from "../assets/firebase.png";
import sass from '../assets/sass.png';

//backend
import node from "../assets/node.png";
import mongodb from "../assets/mongodb.png";
import express from "../assets/express.png";

//other tools
import npm from "../assets/npm.png";
import github from "../assets/github.png";
import vscode from "../assets/vscode.png";
import photoshop from "../assets/photoshop.webp";
import illustratore from "../assets/illustratore.png";
//import indesign from "../assets/indesign.png";

const Skills = () => {
  const frontend = [
    {
      id: 1,
      src: html,
      title: "HTML",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
    },
    {
      id: 4,
      src: reactImage,
      title: "React JS",
    },
    {
      id: 5,
      src: redux,
      title: "Redux",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
    },
    {
      id: 6,
      src: chakra,
      title: "Chakra UI",
    },

    {
      id: 7,
      src: typescript,
      title: "Typescript",
    },

    // {
    //   id: 8,
    //   src: jest,
    //   title: "Jest",
    // },
    // {
    //   id:9,
    //   src:firebase,
    //   title:"Firebase"
    // },
    {
      id: 10,
      src: sass,
      title: "Sass"
    },
    {
      id: 11,
      src: materialui,
      title: "Material UI"
    },
    {
      id: 12,
      src: nextjs,
      title: "Next JS",
    },
    {
      id: 13,
      src: node,
      title: "Node JS",
    },
    {
      id: 14,
      src: express,
      title: "Express JS",
    },
    {
      id: 15,
      src: mongodb,
      title: "Mongo DB",
    }

  ];

  const tools = [
    {
      id: 1,
      src: npm,
      title: "NPM",
    },
    {
      id: 2,
      src: github,
      title: "GitHub",
    },
    {
      id: 3,
      src: vscode,
      title: "VS Code"
    },
    {
      id: 4,
      src: illustratore,
      title: "Illustrator",
    },
    {
      id: 5,
      src: photoshop,
      title: "Photoshop",
    },
    // {
    //   id: 6,
    //   src: indesign,
    //   title: "InDesign",
    // },
  ];

  return (
    <div
      name="skill"
      className="bg-white w-full pt-0 pb-6 md:pb-12 tracking-wide text-sky-700 font-philosopher"
    >
      <div style={{ textAlign: "center", border: "0px solid black", width: "78%", margin: "auto" }} >
        <div style={{ textAlign: "center" }}>
          <p
            className="text-4xl
            hidden md:block
            font-extrabold border-b-4 uppercase border-teal-400 py-2 z-10"
          >
            Technical Skills
          </p>
          <p
            className="text-4xl
            md:hidden border-b-4 font-extrabold uppercase border-teal-400 py-2 z-10"
          >
            My Skills
          </p>
        </div>
        <div className="w-full mx-auto grid grid-cols-2 mt-2 text-black  border-0 border-white sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 text-center py-8 ">
          {frontend.map(({ id, src, title }) => (
            <div key={id} className="group hover:scale-75 hover:cursor-pointer duration-300 z-10"
            >
              <div className="p-1 mx-auto bg-transparent border border-collapse">
                <img
                  src={src}
                  alt={title}
                  className={`w-14 h-14 mt-2 p-1 md:p-2 bg-white mx-auto shadow-md group-hover:animate-spin rounded-md shadow-gray-500`}

                />
                <p className="mt-3 text-sky-700 font-bold text-sm md:text-md">{title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* otherTools */}
        <div className="text-center mt-6 z-10">
          <p
            className="text-4xl
           font-extrabold border-b-4  uppercase border-teal-400 py-2"
          >
            Other Tools
          </p>

        </div>
        <div className="w-full mx-auto grid grid-cols-2 mt-8 text-black  border-0 border-black sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 text-center pb-8  z-10">
          {tools.map(({ id, src, title }) => (
            <div key={id} className="group hover:scale-75 hover:cursor-pointer duration-300 z-10"
            >
              <div className="p-1 mx-auto bg-transparent border border-collapse">
                <img
                  src={src}
                  alt={title}
                  className={`w-14 h-14 mt-2 p-1 md:p-2 bg-white mx-auto shadow-md group-hover:animate-spin rounded-md shadow-gray-500`}

                />
                <p className="mt-3 text-sky-700 font-bold text-sm md:text-md">{title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
