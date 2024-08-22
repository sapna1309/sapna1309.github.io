import React from "react";
import "./skills.css";
import { Image } from "@chakra-ui/react";

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
import { FaGlobe } from "react-icons/fa";

const Projects = () => {
  return (
    <div
      name="project"
      className="bg-white font-philosopher w-full pt-0 pb-14 md:pb-20"
    >
      <div style={{ textAlign: "center", border: "0px solid white", width: "78%", margin: "auto" }} >
        <p className="text-4xl text-center py-2 text-sky-700 uppercase font-extrabold border-b-4 border-teal-400 z-10">
          Projects
        </p>
      </div>
      <div style={{ width: "78%", margin: "auto", textAlign: "center", border: "0px solid red", display: "flex", justifyContent: "center" }} >
        <div className="w-full mx-auto grid md:grid-cols-2 gap-10 mt-10 border-0 border-black ">
          {/* Myntra  */}
          <div className="mx-auto py-5 rounded-lg border-4 shadow-lg shadow-gray-500 bg-sky-800 border-teal-400 z-10">
            <div>
              <a
                href="https://illegal-quiver-3898.vercel.app/"
                target={"_blank"}
                rel="noreferrer"
              >
                <Image
                  width={'90%'}
                  className="mb-5 hover:scale-110 mx-auto duration-700 hover:cursor-pointer "
                  src={HomePageC}
                  alt="classic-world-homepage"
                />
              </a>
            </div>
            <div style={{ textAlign: "center" }}>
              <h1
                className="text-2xl md:text-3xl tracking-wide"
                style={{
                  fontWeight: "bold",
                  color: "#26B0AB",
                }}
              >
                Myntra.com
              </h1>
              <p
                className="px-1 mt-2 tracking-wide text-white font-semibold text-md md:text-lg"
              >
                Myntra is one of the largest
                e-commerce stores in India that deals with the fashion and
                lifestyle products for men, women, and kids.
              </p>
              <h1
                className="text-2xl md:text-3xl mt-3 tracking-wide"
                style={{
                  fontWeight: "bold",
                  color: "#26B0AB",
                }}
              >
                Tech Stack
              </h1>
            </div>
            <div
              className="hidden md:flex justify-center items-center gap-x-2 mt-3"
            >
              <div >
                <SiCss3
                  size="32px"
                  color="#25CBEF"
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
                  className="hover:animate-spin hover:cursor-pointer"
                />
              </div>
              <div>
                <SiFirebase
                  size="32px"
                  color="#FFCA28"
                  className="hover:animate-bounce hover:cursor-pointer hidden lg:flex"
                />
              </div>
              <div>
                <SiReactrouter
                  size="32px"
                  color="#FC4E02"
                  className="hover:animate-bounce hover:cursor-pointer hidden lg:flex"
                />
              </div>
            </div>
            <div
              className="md:hidden flex justify-center px-2 items-center gap-x-1 mt-3"
            >
              <div>
                <SiCss3
                  size="25px"
                  color="#25CBEF"
                  className="hover:animate-bounce hover:cursor-pointer"
                />
              </div>
              <div>
                <SiHtml5
                  size="25px"
                  color="#e34c26"
                  className="hover:animate-bounce hover:cursor-pointer"
                />
              </div>
              <div>
                <SiJavascript
                  size="25px"
                  color="yellow"
                  className="hover:animate-bounce hover:cursor-pointer"
                />
              </div>
              <div>
                <SiRedux
                  size="25px"
                  color="#774BBD"
                  className="hover:animate-bounce hover:cursor-pointer"
                />
              </div>
              <div>
                <SiReact
                  size="25px"
                  color="#04D8FE"
                  className="hover:animate-spin hover:cursor-pointer"
                />
              </div>
              <div>
                <SiChakraui
                  size="25px"
                  color="#47C9C4"
                  className="hover:animate-spin hover:cursor-pointer"
                />
              </div>
              <div>
                <SiFirebase
                  size="25px"
                  color="#FFCA28"
                  className="hover:animate-bounce hover:cursor-pointer"
                />
              </div>
              <div>
                <SiReactrouter
                  size="25px"
                  color="#FC4E02"
                  className="hover:animate-bounce hover:cursor-pointer"
                />
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
              <div className="mt-4 sm:mt-6 hidden md:flex">
                <a
                  href="https://github.com/sapna1309/Myntra-Clone"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <button class="github">
                    GITHUB
                    <BsGithub size={18} />
                  </button>
                </a>
              </div>
              <div className="mt-4 sm:mt-6 hidden md:flex">
                <a
                  href="https://illegal-quiver-3898.vercel.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <button class="github"
                  >
                    LIVE
                    <FaGlobe size={18} />
                  </button>
                </a>
              </div>

              <div className="mt-4 sm:mt-6 md:hidden">
                <a
                  href="https://github.com/sapna1309/Myntra-Clone"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <button class="github">
                    GitHub
                    <BsGithub size={18} />
                  </button>
                </a>
              </div>
              <div className="mt-4 sm:mt-6 md:hidden">
                <a
                  href="https://illegal-quiver-3898.vercel.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <button class="github"
                  >
                    Live
                    <FaGlobe size={18} />
                  </button>
                </a>
              </div>

            </div>
          </div>

          {/* Booking  */}
          <div className="mx-auto py-5 rounded-lg border-4 tracking-wide shadow-lg shadow-gray-500 bg-sky-800 border-teal-400 z-10">
            <div>
              <a
                href="https://neon-salmiakki-934ec6.netlify.app/"
                target={"_blank"}
                rel="noreferrer"
              >
                <Image
                  width={'90%'}
                  className="mb-5 hover:scale-110 mx-auto duration-700 hover:cursor-pointer "
                  src={HomePageB}
                  alt="classic-world-homepage"
                />
              </a>
            </div>
            <div style={{ textAlign: "center" }}>
              <h1
                className="text-2xl md:text-3xl"
                style={{
                  fontWeight: "bold",
                  color: "#26B0AB",
                }}
              >
                Booking.com
              </h1>
              <p
                className="px-1 mt-2 text-white font-semibold text-md md:text-lg"
              >
                Booking.com is a Dutch online travel agency for lodging
                reservations & other travel products, and a subsidiary of Booking
                Holding.
              </p>
              <h1
                className="text-2xl md:text-3xl mt-3"
                style={{
                  fontWeight: "bold",
                  color: "#26B0AB",
                }}
              >
                Tech Stack
              </h1>
            </div>
            <div
              className="hidden md:flex justify-center items-center gap-x-2 mt-3"
            >
              <div>
                <SiCss3
                  size="32px"
                  color="#25CBEF"
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
            <div
              className="md:hidden flex justify-center items-center gap-x-2 mt-3"
            >
              <div>
                <SiCss3
                  size="25px"
                  color="#25CBEF"
                  className="hover:animate-bounce hover:cursor-pointer"
                />
              </div>
              <div>
                <SiHtml5
                  size="25px"
                  color="#e34c26"
                  className="hover:animate-bounce hover:cursor-pointer"
                />
              </div>
              <div>
                <SiJavascript
                  size="25px"
                  color="yellow"
                  className="hover:animate-bounce hover:cursor-pointer"
                />
              </div>

            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
              <div className="mt-4 sm:mt-6 hidden md:flex">
                <a
                  href="https://github.com/sapna1309/Booking-Clone"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <button class="github">
                    GITHUB
                    <BsGithub size={18} />
                  </button>
                </a>
              </div>
              <div className="mt-4 sm:mt-6 hidden md:flex">
                <a
                  href="https://neon-salmiakki-934ec6.netlify.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <button class="github">
                    LIVE
                    <FaGlobe size={18} />
                  </button>
                </a>
              </div>

              <div className="mt-4 sm:mt-6 md:hidden">
                <a
                  href="https://github.com/sapna1309/Booking-Clone"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <button class="github">
                    GitHub
                    <BsGithub size={18} />
                  </button>
                </a>
              </div>
              <div className="mt-4 sm:mt-6 md:hidden">
                <a
                  href="https://neon-salmiakki-934ec6.netlify.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <button class="github">
                    Live
                    <FaGlobe size={18} />
                  </button>
                </a>
              </div>

            </div>
          </div>

          {/* skin store project */}
          <div className="mx-auto py-5 rounded-lg border-4 tracking-wide shadow-lg shadow-gray-500 bg-sky-800 border-teal-400 z-10">
            <div>
              <a
                href="https://miniature-skin-4850.vercel.app/"
                target={"_blank"}
                rel="noreferrer"
              >
                <Image
                  width={'90%'}
                  className="mb-5 hover:scale-110 mx-auto duration-700 hover:cursor-pointer "
                  src={HomePageT}
                  alt="classic-world-homepage"
                />
              </a>
            </div>
            <div style={{ textAlign: "center" }}>
              <h1
                className="text-2xl md:text-3xl"
                style={{
                  fontWeight: "bold",
                  color: "#26B0AB",
                }}
              >
                SkinStore.com
              </h1>
              <p
                className="px-1 mt-2 text-white font-semibold text-md md:text-lg"
              >
                SkinStore.com is an e-commerce site for premium beauty products
                across skin, makeup and hair.
              </p>
              <h1
                className="text-2xl md:text-3xl mt-3"
                style={{
                  fontWeight: "bold",
                  color: "#26B0AB",
                }}
              >
                Tech Stack
              </h1>
            </div>
            <div
              className="hidden md:flex justify-center items-center gap-x-2 mt-3"
            >
              <div>
                <SiCss3
                  size="32px"
                  color="#25CBEF"
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
                  className="hover:animate-spin hover:cursor-pointer"
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
            <div
              className="md:hidden flex justify-center items-center gap-x-1 mt-3"
            >
              <div>
                <SiCss3
                  size="25px"
                  color="#25CBEF"
                  className="hover:animate-bounce hover:cursor-pointer"
                />
              </div>
              <div>
                <SiHtml5
                  size="25px"
                  color="#e34c26"
                  className="hover:animate-bounce hover:cursor-pointer"
                />
              </div>
              <div>
                <SiJavascript
                  size="25px"
                  color="yellow"
                  className="hover:animate-bounce hover:cursor-pointer"
                />
              </div>
              <div>
                <SiReact
                  size="25px"
                  color="#04D8FE"
                  className="hover:animate-spin hover:cursor-pointer"
                />
              </div>
              <div>
                <SiChakraui
                  size="25px"
                  color="#47C9C4"
                  className="hover:animate-spin hover:cursor-pointer"
                />
              </div>
              <div>
                <SiReactrouter
                  size="25px"
                  color="#FC4E02"
                  className="hover:animate-bounce hover:cursor-pointer hidden lg:block"
                />
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 10 }} >
              <div className="mt-4 sm:mt-6 hidden md:flex">
                <a
                  href="https://github.com/sapna1309/Skin-store-Clone"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <button class="github">
                    GITHUB
                    <BsGithub size={18} />
                  </button>
                </a>
              </div>
              <div className="mt-4 sm:mt-6 hidden md:flex">
                <a
                  href="https://miniature-skin-4850.vercel.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <button class="github">
                    LIVE
                    <FaGlobe size={18} />
                  </button>
                </a>
              </div>

              <div className="mt-4 sm:mt-6 md:hidden">
                <a
                  href="https://github.com/sapna1309/Skin-store-Clone"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <button class="github">
                    GitHub
                    <BsGithub size={18} />
                  </button>
                </a>
              </div>
              <div className="mt-4 sm:mt-6 md:hidden">
                <a
                  href="https://miniature-skin-4850.vercel.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <button class="github">
                    Live
                    <FaGlobe size={18} />
                  </button>
                </a>
              </div>

            </div>
          </div>

          {/* Unsplash */}
          <div className="mx-auto py-5 rounded-lg tracking-wide border-4 shadow-lg shadow-gray-500 bg-sky-800 border-teal-400 z-10">
            <div>
              <a
                href="https://leafy-tarsier-0c242d.netlify.app/"
                target={"_blank"}
                rel="noreferrer"
              >
                <Image
                  width={'90%'}
                  className="mb-5 hover:scale-110 mx-auto duration-700 hover:cursor-pointer "
                  src={HomePageU}
                  alt="classic-world-homepage"
                />
              </a>
            </div>
            <div style={{ textAlign: "center" }}>
              <h1
                className="text-2xl md:text-3xl"
                style={{
                  fontWeight: "bold",
                  color: "#26B0AB",
                }}
              >
                Unsplash.com
              </h1>
              <p
                className="px-1 mt-2 text-white font-semibold text-md md:text-lg"
              >
                Unsplash is a website dedicated to proprietary stock photography.
                It provides high resolution images.
              </p>
              <h1
                className="text-2xl md:text-3xl mt-3"
                style={{
                  fontWeight: "bold",
                  color: "#26B0AB",
                }}
              >
                Tech Stack
              </h1>
            </div>
            <div
              className="hidden md:flex justify-center items-center gap-x-3 mt-3"

            >
              <div>
                <SiCss3
                  size="32px"
                  color="#25CBEF"
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
            <div
              className="md:hidden flex justify-center items-center gap-x-1 mt-3"
            >
              <div>
                <SiCss3
                  size="25px"
                  color="#25CBEF"
                  className="hover:animate-bounce hover:cursor-pointer"
                />
              </div>
              <div>
                <SiHtml5
                  size="25px"
                  color="#e34c26"
                  className="hover:animate-bounce hover:cursor-pointer"
                />
              </div>
              <div>
                <SiJavascript
                  size="25px"
                  color="yellow"
                  className="hover:animate-bounce hover:cursor-pointer"
                />
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
              <div className="mt-4 sm:mt-6 hidden md:flex">
                <a
                  href="https://github.com/sapna1309/Unsplash-Clone"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <button class="github">
                    GITHUB
                    <BsGithub size={18} />
                  </button>
                </a>
              </div>
              <div className="mt-4 sm:mt-6 hidden md:flex">
                <a
                  href="https://leafy-tarsier-0c242d.netlify.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <button class="github">
                    LIVE
                    <FaGlobe size={18} />
                  </button>
                </a>
              </div>

              <div className="mt-4 sm:mt-6 md:hidden">
                <a
                  href="https://github.com/sapna1309/Unsplash-Clone"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <button class="github">
                    GitHub
                    <BsGithub size={18} />
                  </button>
                </a>
              </div>
              <div className="mt-4 sm:mt-6 md:hidden ">
                <a
                  href="https://leafy-tarsier-0c242d.netlify.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <button class="github">
                    Live
                    <FaGlobe size={18} />
                  </button>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
