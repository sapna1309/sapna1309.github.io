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
    
    </div>
  );
};

export default Skills;
