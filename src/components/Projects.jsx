import React from "react";

//Unsplash
import HomePageU from "../assets/portfolio/Unsplash/homePage.png";

//Tvacha
import HomePageT from "../assets/portfolio/TvachaStore/homePage.png";

//Classic World
import HomePageC from "../assets/portfolio/Myntra/homePage.png";

//Booking
import HomePageB from "../assets/portfolio/Booking/homePage.png";

import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiChakraui,
  SiRedux,
  SiFirebase,
  SiReactrouter,
} from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    AOS.init({ delay: 200 });
  }, []);

  return (
    <div
      name="projects"
      className="bg-gradient-to-b to-black from-gray-800 w-full text-teal-200 pt-32 pb-32"
    >
      <div className="w-10/12 mx-auto p-2 " data-aos="fade-right">
        <div style={{ textAlign: "center" }}>
          <p className="text-4xl  uppercase font-bold inline border-b-4 border-white">
            Projects
          </p>
        </div>
      </div>
      <div className="w-9/12 mx-auto grid lg:grid-cols-2 gap-10 ">
        {/* Myntra  */}
        <div className="py-5 shadow-md shadow-teal-200 mt-0 md:mt-10">
          <div data-aos="fade-up">
            <a
              href="https://illegal-quiver-3898.vercel.app/"
              target={"_blank"}
              rel="noreferrer"
            >
              <img
                className="w-11/12 mb-5 hover:scale-110 mx-auto object-contain  duration-700 hover:cursor-pointer "
                src={HomePageC}
                alt="classic-world-homepage"
              />
            </a>
          </div>
          <div style={{ textAlign: "center" }}>
            <h1
              style={{
                fontSize: 30,
                fontKerning: 2,
                fontWeight: 700,
                background: "linear-gradient(to right, #7ce8ff, #3a86f6)",
                webkitBackgroundClip: "text",
                webkitTextFillColor: "transparent",
              }}
              data-aos="fade-right"
            >
              Myntra.com (Clone)
            </h1>
            <p
              className="px-5 mt-2 text-white sm:mt-2 sm:text-lg"
              data-aos="fade-right"
            >
              Classic World is a clone of Myntra which is one of the largest
              fashion e-commerce stores in India that deals with the fashion and
              lifestyle products for men, women, and kids
            </p>
          </div>
          <div
            className="flex justify-center items-center gap-x-2 mt-5"
           
          >
            <div>
              <SiCss3
                size="32px"
                color="#264de4"
                className="hover:animate-bounce hover:cursor-pointer"
              />
            </div>
            <div>
              <SiHtml5
                size="32px"
                color="#e34c26"
                className="hover:animate-bounce hover:cursor-pointer"
              />
            </div>
            <div>
              <SiJavascript
                size="32px"
                color="yellow"
                className="hover:animate-bounce hover:cursor-pointer"
              />
            </div>
            <div>
              <SiRedux
                size="32px"
                color="#774BBD"
                className="hover:animate-bounce hover:cursor-pointer"
              />
            </div>
            <div>
              <SiReact
                size="32px"
                color="#04D8FE"
                className="hover:animate-spin hover:cursor-pointer"
              />
            </div>
            <div>
              <SiChakraui
                size="32px"
                color="#47C9C4"
                className="hover:animate-bounce hover:cursor-pointer"
              />
            </div>
            <div>
              <SiFirebase
                size="32px"
                color="#FFCA28"
                className="hover:animate-bounce hover:cursor-pointer"
              />
            </div>
            <div>
              <SiReactrouter
                size="32px"
                color="#FC4E02"
                className="hover:animate-bounce hover:cursor-pointer"
              />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center",gap:10 }}>
              <div className="mt-4 sm:mt-6">
                <a
                  href="https://github.com/sapna1309/Myntra-Clone"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <button className="inline-flex gap-3 px-4 py-2 rounded-md  hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointershadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base">
                    GitHub
                    <BsGithub size={22} />
                  </button>
                </a>
              </div>
              <div className="mt-4 sm:mt-6">
                <a
                  href="https://illegal-quiver-3898.vercel.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <button className="inline-flex gap-3 px-4 py-2 rounded-md hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer shadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base">
                    Preview
                    <FaExternalLinkAlt size={18} />
                  </button>
                </a>
              </div>
          
          </div>
        </div>

        {/* Booking  */}
        <div className="py-5 shadow-md shadow-teal-200 mt-0 md:mt-10  ">
          <div data-aos="fade-up">
            <a
              href="https://neon-salmiakki-934ec6.netlify.app/"
              target={"_blank"}
              rel="noreferrer"
            >
              <img
                className="w-11/12 mb-5 hover:scale-110 mx-auto object-contain  duration-700 hover:cursor-pointer "
                src={HomePageB}
                alt="booking-homepage"
              />
            </a>
          </div>
          <div style={{ textAlign: "center" }}>
            <h1
              style={{
                fontSize: 30,
                fontKerning: 2,
                fontWeight: 700,
                background: "linear-gradient(to right, #7ce8ff, #3a86f6)",
                webkitBackgroundClip: "text",
                webkitTextFillColor: "transparent",
              }}
              data-aos="fade-right"
            >
              Booking.com (Clone)
            </h1>
            <p
              className="px-5 mt-2 text-white sm:mt-2 sm:text-lg"
              data-aos="fade-right"
            >
              Booking.com is a Dutch online travel agency for lodging
              reservations & other travel products, and a subsidiary of Booking
              Holding.
            </p>
          </div>
          <div
            className="flex justify-center items-center gap-x-2 mt-5"
            data-aos="zoom-out"
          >
            <div>
              <SiCss3
                size="32px"
                color="#264de4"
                className="hover:animate-bounce hover:cursor-pointer"
              />
            </div>
            <div>
              <SiHtml5
                size="32px"
                color="#e34c26"
                className="hover:animate-bounce hover:cursor-pointer"
              />
            </div>
            <div>
              <SiJavascript
                size="32px"
                color="yellow"
                className="hover:animate-bounce hover:cursor-pointer"
              />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center",gap:10 }}>
              <div className="mt-4 sm:mt-6">
                <a
                  href="https://github.com/sapna1309/Booking-Clone"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <button className="inline-flex gap-3 px-4 py-2 rounded-md  hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointershadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base">
                    GitHub
                    <BsGithub size={22} />
                  </button>
                </a>
              </div>
              <div className="mt-4 sm:mt-6">
                <a
                  href="https://neon-salmiakki-934ec6.netlify.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <button className="inline-flex gap-3 px-4 py-2 rounded-md hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer shadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base">
                    Preview
                    <FaExternalLinkAlt size={18} />
                  </button>
                </a>
              </div>
           
          </div>
        </div>

        {/* skin store project */}
        <div className="py-5 shadow-md shadow-teal-200 mt-0 md:mt-10  ">
          <div data-aos="fade-up">
            <a
              href="https://miniature-skin-4850.vercel.app/"
              target={"_blank"}
              rel="noreferrer"
            >
              <img
                className="w-11/12 mb-5 hover:scale-110 mx-auto object-contain  duration-700 hover:cursor-pointer "
                src={HomePageT}
                alt="tvacha-homepage"
              />
            </a>
          </div>
          <div style={{ textAlign: "center" }}>
            <h1
              style={{
                fontSize: 30,
                fontKerning: 2,
                fontWeight: 700,
                background: "linear-gradient(to right, #7ce8ff, #3a86f6)",
                webkitBackgroundClip: "text",
                webkitTextFillColor: "transparent",
              }}
              data-aos="fade-right"
            >
              SkinStore.com (Clone)
            </h1>
            <p
              className="px-5 mt-2 text-white sm:mt-2 sm:text-lg"
              data-aos="fade-right"
            >
              SkinStore.com is an e-commerce site for premium beauty products
              across skin, makeup and hair.
            </p>
          </div>
          <div
            className="flex justify-center items-center gap-x-2 mt-5"
            data-aos="zoom-out"
          >
            <div>
              <SiCss3
                size="32px"
                color="#264de4"
                className="hover:animate-bounce hover:cursor-pointer"
              />
            </div>
            <div>
              <SiHtml5
                size="32px"
                color="#e34c26"
                className="hover:animate-bounce hover:cursor-pointer"
              />
            </div>
            <div>
              <SiJavascript
                size="32px"
                color="yellow"
                className="hover:animate-bounce hover:cursor-pointer"
              />
            </div>
            <div>
              <SiReact
                size="32px"
                color="#04D8FE"
                className="hover:animate-spin hover:cursor-pointer"
              />
            </div>
            <div>
              <SiChakraui
                size="32px"
                color="#47C9C4"
                className="hover:animate-bounce hover:cursor-pointer"
              />
            </div>
            <div>
              <SiReactrouter
                size="32px"
                color="#FC4E02"
                className="hover:animate-bounce hover:cursor-pointer"
              />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center",gap:10 }} >
            <div className="mt-4 sm:mt-6">
                <a
                  href="https://github.com/sapna1309/Skin-store-Clone"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <button className="inline-flex gap-3 px-4 py-2 rounded-md  hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointershadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base">
                    GitHub
                    <BsGithub size={22} />
                  </button>
                </a>
              </div>
              <div className="mt-4 sm:mt-6">
                <a
                  href="https://miniature-skin-4850.vercel.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <button className="inline-flex gap-3 px-4 py-2 rounded-md hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer shadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base">
                    Preview
                    <FaExternalLinkAlt size={18} />
                  </button>
                </a>
              </div>
            
          </div>
        </div>

        {/* Unsplash */}
        <div className="py-5 shadow-md shadow-teal-200 mt-0 md:mt-10  ">
          <div data-aos="fade-up">
            <a
              href="https://leafy-tarsier-0c242d.netlify.app/"
              target={"_blank"}
              rel="noreferrer"
            >
              <img
                className="w-11/12 mb-5 hover:scale-110 mx-auto object-contain  duration-700 hover:cursor-pointer "
                src={HomePageU}
                alt="unsplash-homepage"
              />
            </a>
          </div>
          <div style={{ textAlign: "center" }}>
            <h1
              style={{
                fontSize: 30,
                fontKerning: 2,
                fontWeight: 700,
                background: "linear-gradient(to right, #7ce8ff, #3a86f6)",
                webkitBackgroundClip: "text",
                webkitTextFillColor: "transparent",
              }}
              data-aos="fade-right"
            >
              Unsplash.com (Clone)
            </h1>
            <p
              className=" px-5 mt-2 text-white sm:mt-2 sm:text-lg"
              data-aos="fade-right"
            >
              Unsplash is a website dedicated to proprietary stock photography.
              It provides high resolution images.
            </p>
          </div>
          <div
            className="flex justify-center items-center gap-x-2 mt-5"
            data-aos="zoom-out"
          >
            <div>
              <SiCss3
                size="32px"
                color="#264de4"
                className="hover:animate-bounce hover:cursor-pointer"
              />
            </div>
            <div>
              <SiHtml5
                size="32px"
                color="#e34c26"
                className="hover:animate-bounce hover:cursor-pointer"
              />
            </div>
            <div>
              <SiJavascript
                size="32px"
                color="yellow"
                className="hover:animate-bounce hover:cursor-pointer"
              />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center",gap:10 }}>
              <div className="mt-4 sm:mt-6">
                <a
                  href="https://github.com/sapna1309/Unsplash-Clone"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <button className="inline-flex gap-3 px-4 py-2 rounded-md  hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointershadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base">
                    GitHub
                    <BsGithub size={22} />
                  </button>
                </a>
              </div>
              <div className="mt-4 sm:mt-6">
                <a
                  href="https://leafy-tarsier-0c242d.netlify.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <button className="inline-flex gap-3 px-4 py-2 rounded-md hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer shadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base">
                    Preview
                    <FaExternalLinkAlt size={18} />
                  </button>
                </a>
              </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
