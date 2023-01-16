import React from "react";
//frontend
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import typescript from "../assets/typescript.png";
import tailwind from "../assets/tailwind.png";
import redux from "../assets/redux.png";
import jest from "../assets/jest.png";
import chakra from "../assets/chakra.png";
import nextjs from '../assets/nextjs.png';

//backend
import node from "../assets/node.png";
import mongodb from "../assets/mongodb.png";
import express from "../assets/express.png";

//other tools
import npm from "../assets/npm.png";
import github from "../assets/github.png";
import photoshop from '../assets/photoshop.webp';
import illustratore from '../assets/illustratore.png';
import indesign from '../assets/indesign.png';


import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const Skills = () => {
  const frontend = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-400",
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
      id: 6,
      src: chakra,
      title: "Chakra UI",
      style: "shadow-cyan-400",
    },

    {
      id: 7,
      src: typescript,
      title: "Typescript",
      style: "shadow-blue-400",
    },

    {
      id: 8,
      src: jest,
      title: "Jest",
      style: "shadow-orange-500",
    },
    {
      id: 9,
      src: nextjs,
      title: "Next JS",
      style: "shadow-gray-400",
    }
    
  ];
 
  const backend = [
    {
      id: 1,
      src: node,
      title: "Node JS",
      style: "shadow-green-300",
    },
    {
      id: 2,
      src: express,
      title: "Express JS",
      style: "shadow-gray-500",
    },
    {
      id: 3,
      src: mongodb,
      title: "Mongo DB",
      style: "shadow-green-500",
    }
  ];

  const tools = [
    {
      id: 1,
      src: npm,
      title: "NPM",
      style: "shadow-red-500",
    },
    {
      id: 2,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 3,
      src: illustratore,
      title: "Illustrator",
      style: "shadow-orange-500",
    },
    {
      id: 4,
      src: photoshop,
      title: "Photoshop",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: indesign,
      title: "InDesign",
      style: "shadow-pink-500",
    }
  ]
 

  useEffect(()=>{
    AOS.init({delay:200});
},[])

  return (
    <div
      name="skills"
      className="bg-gradient-to-b to-gray-800 from-black w-full pt-2 md:pt-28 "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-teal-200" >
        <div >
          <p className="text-4xl font-bold border-b-4 border-white p-2 inline" data-aos="fade-right">
          Technical  Skills
          </p>
        </div>
        <div className="flex justify-center mt-20">
        <p className="text-4xl font-semi-bold border-b-2 border-blue-500 p-2 inline text-white " data-aos="fade-right">
            Frontend
          </p>
        </div>
        <div className="w-full grid grid-cols-2 mt-8 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0"  >
      
          {frontend.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md  duration-300 py-2 rounded-lg  ${style} hover:scale-110` } data-aos="fade-up" 
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>

     {/* backend */}
        <div className="flex justify-center mt-10">
        <p className="text-4xl font-semi-bold border-b-2 border-blue-500 p-2 inline  text-white " data-aos="fade-right">
            Backend
          </p>
        </div>
        <div className="w-full grid grid-cols-2 mt-8 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0"  >
      
          {backend.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md  duration-300 py-2 rounded-lg  ${style} hover:scale-110` } data-aos="fade-up" 
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>

        {/* otherTools */}
        <div className="flex justify-center mt-10">
        <p className="text-4xl font-semi-bold border-b-2 border-blue-500 p-2 inline  text-white " data-aos="fade-right">
            Other Tools
          </p>
        </div>
        <div className="w-full grid grid-cols-2 mt-8 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0"  >
      
          {tools.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md  duration-300 py-2 rounded-lg  ${style} hover:scale-110` } data-aos="fade-up" 
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
