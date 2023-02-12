import React from "react";
import "./skills.css";
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
import nextjs from "../assets/nextjs.png";

//backend
import node from "../assets/node.png";
import mongodb from "../assets/mongodb.png";
import express from "../assets/express.png";

//other tools
import npm from "../assets/npm.png";
import github from "../assets/github.png";
import photoshop from "../assets/photoshop.webp";
import illustratore from "../assets/illustratore.png";
import indesign from "../assets/indesign.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skills = () => {
  const frontend = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-700",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-700",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-900",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-cyan-700",
    },
    {
      id: 5,
      src: redux,
      title: "Redux",
      style: "shadow-purple-900",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-700",
    },
    {
      id: 6,
      src: chakra,
      title: "Chakra UI",
      style: "shadow-cyan-700",
    },

    {
      id: 7,
      src: typescript,
      title: "Typescript",
      style: "shadow-blue-800",
    },

    {
      id: 8,
      src: jest,
      title: "Jest",
      style: "shadow-orange-700",
    },
    {
      id: 9,
      src: nextjs,
      title: "Next JS",
      style: "shadow-gray-700",
    },
    {
      id: 10,
      src: node,
      title: "Node JS",
      style: "shadow-green-900",
    },
    {
      id: 11,
      src: express,
      title: "Express JS",
      style: "shadow-gray-600",
    },
    {
      id: 12,
      src: mongodb,
      title: "Mongo DB",
      style: "shadow-green-900",
    },
  ];

  const tools = [
    {
      id: 1,
      src: npm,
      title: "NPM",
      style: "shadow-red-800",
    },
    {
      id: 2,
      src: github,
      title: "GitHub",
      style: "shadow-gray-700",
    },
    {
      id: 3,
      src: illustratore,
      title: "Illustrator",
      style: "shadow-orange-900",
    },
    {
      id: 4,
      src: photoshop,
      title: "Photoshop",
      style: "shadow-blue-900",
    },
    {
      id: 5,
      src: indesign,
      title: "InDesign",
      style: "shadow-pink-900",
    },
  ];

  useEffect(() => {
    AOS.init({ delay: 200 });
  }, []);

  return (
    <div
      name="skills"
      className="bg-gradient-to-b to-gray-800 from-black w-full pt-2 md:pt-28 text-teal-200 "
    >
      <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div style={{ textAlign: "center" }} data-aos="fade-right">
          <p
            className="text-4xl
           font-bold border-b-4  uppercase border-white p-2 inline"
        //  style={{
        //   fontKerning: 2,
        //   fontWeight:"bold",
        //   color:"#99F6E4",
        //   textShadow:"2px 2px 2px black, 2px 2px 2px black",
        //   fontSize:"48px",
        //   textAlign:"center"}} 
          >
            Technical Skills
          </p>
        </div>
        <div className="w-11/12 mx-auto grid grid-cols-2 mt-10 text-black  border-0 border-white sm:grid-cols-3 lg:grid-cols-5 gap-10 text-center py-8 ">
          {frontend.map(({ id, src, title, style }) => (
            <div
              key={id}
              className="hexagon"
              data-aos="fade-up"
            >
              <img
                src={src}
                alt={title}
                className={`mt-10 w-20 mx-auto shadow-lg ${style}`}
              />
              <p className="mt-4 mb-8">{title}</p>
            </div>
          ))}
        </div>

        {/* otherTools */}
        <div className="flex justify-center mt-10">
          <p
            className="text-4xl
           font-bold border-b-4 uppercase border-white p-2 inline"
            data-aos="fade-right"
          >
            Other Tools
          </p>
        </div>
        <div className="w-11/12 mx-auto grid grid-cols-2 mt-8 text-black  border-0 border-white sm:grid-cols-3 lg:grid-cols-5 gap-10 text-center py-8 ">
          {tools.map(({ id, src, title, style }) => (
            <div key={id} className="hexagon">
              <img
                src={src}
                alt={title}
                className={`mt-10 w-20 mx-auto shadow-lg ${style}`}
              />
              <p className="mt-4 mb-8">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
