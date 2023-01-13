import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import typescript from "../assets/typescript.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import redux from "../assets/redux.png";
import jest from "../assets/jest.png";
import postman from "../assets/postman.png";
import node from "../assets/node.png";
import mongodb from "../assets/mongodb.png";
import express from "../assets/express.png";
import npm from "../assets/npm.png";
import chakra from "../assets/chakra.png";

import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-cyan-500",
    },
    {
      id: 5,
      src: redux,
      title: "Redux",
      style: "shadow-purple-600",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: chakra,
      title: "Chakra UI",
      style: "shadow-cyan-400",
    },

    {
      id: 8,
      src: typescript,
      title: "Typescript",
      style: "shadow-blue-400",
    },

    {
      id: 9,
      src: jest,
      title: "Jest",
      style: "shadow-orange-400",
    },
    {
      id: 10,
      src: node,
      title: "NodeJS",
      style: "shadow-green-400",
    },
    {
      id: 11,
      src: express,
      title: "Express",
      style: "shadow-gray-400",
    },
    {
      id: 12,
      src: mongodb,
      title: "Mongodb",
      style: "shadow-green-400",
    },
   
    {
      id: 13,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 14,
      src: postman,
      title: "PostMan",
      style: "shadow-orange-400",
    },
    {
      id: 15,
      src: npm,
      title: "NPM",
      style: "shadow-red-400",
    },
  ];
  useEffect(()=>{
    AOS.init({delay:200});
},[])

  return (
    <div
      name="skills"
      className="bg-gradient-to-b to-gray-800 from-black w-full pt-2 md:pt-28 "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white" >
        <div >
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline" data-aos="fade-right">
            Skills
          </p>
        </div>

        <div className="w-full grid grid-cols-2 mt-8 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0"  >
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-lg  duration-300 py-2 rounded-lg  ${style} hover:scale-110` } data-aos="fade-up" 
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
