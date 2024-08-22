import React from "react";
import { Heading, Image } from "@chakra-ui/react";
import HeroImage from "../assets/HeroImage.png";
//import { GoMarkGithub } from "react-icons/go";
//import { FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { ImDownload } from "react-icons/im";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full border-0 border-black mx-auto pt-14 md:pt-28 pb-4 md:pb-12 bg-white"
    >
      <div style={{ width: "78%", margin: "auto", border: "0px solid red" }}>
        <div className="w-full border-0 border-black mx-auto grid lg:grid-cols-2 items-center justify-center lg:justify-between py-10 z-10">
          <div className="mx-auto border-0 border-black mt-10 text-center lg:text-left md:mt-10">
            <h2 className="text-xl tracking-wide md:text-3xl text-teal-400 font-semibold font-philosopher">
              Hi, my name is,
            </h2>
            <Heading fontFamily={"philosopher"} color={"#096EA6"} fontSize={[38, 60, 75, 60]} >
              Sapna Sharma{" "}
            </Heading>
            <div className="hidden tracking-wide md:block font-philosopher">
              <h1 style={{ fontSize: 30, color: "#0369A1", paddingTop: 15 }}>
                I'm a
                <span
                  style={{
                    fontSize: 36,
                    fontKerning: 2,
                    fontWeight: "bold",
                    background: "linear-gradient(to right,#26B0AB,#26B0AB, #025D84)",
                    webkitBackgroundClip: "text",
                    webkitTextFillColor: "transparent",
                  }}
                >
                  <Typewriter
                    words={["  Full Stack Developer.", "  Web Developer.", "  MERN Stack Developer."]}
                    loop={Infinity}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={100}
                    delaySpeed={1000}
                  />
                </span>
              </h1>
            </div>
            <div className=" md:hidden tracking-wide font-philosopher">
              <h1 style={{
                fontSize: 25,
                fontKerning: 2,
                fontWeight: "bold",
                background: "linear-gradient(to right,#26B0AB, #025D84)",
                webkitBackgroundClip: "text",
                webkitTextFillColor: "transparent", paddingTop: 15
              }}>
                <Typewriter
                  words={["  Full Stack Developer.", "  Web Developer.", "  MERN Developer."]}
                  loop={Infinity}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={100}
                  delaySpeed={1000}
                />

              </h1>
            </div>
            <p className="font-semibold text-sky-700 tracking-wide text-md md:text-xl py-6 max-w-screen-sm font-philosopher ">
              I am an enthusiastic Full-Stack Web Developer with appropriate
              skills who's always willing to learn and work across technology
              and domains.
            </p>

            <div className="mb-5 md:mb-0 border-0 border-black">
              <div className="max-w-screen-sm flex justify-center lg:justify-start items-center space-x-8">

                <div className="z-10" >
                  <a
                    href="/Sapna_Sharma_Resume.pdf"
                    download={"Sapna_Sharma_Resume.pdf"}
                    onClick={() => {
                      window.open(
                        "https://drive.google.com/file/d/1Zcn56_vgL8pUKpFcCr1dYu4k0aLmFan5/view?usp=sharing"
                      );
                    }}
                    smooth={true}
                    target="_blank"
                    rel="noreferrer"
                    className="group text-white tracking-wide w-fit px-6 py-2 my-2 text-md font-bold flex items-center rounded-md bg-gradient-to-r from-teal-400 to-sky-700 cursor-pointer md:py-3 gap-3 font-philosopher shadow-md shadow-gray-500 hover:scale-110 duration-300"
                  >
                    <ImDownload size={20} className="hover:animate-bounce" />
                    RESUME
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-0 md:mt-10 lg:mx-0 z-10 flex justify-end item-center border-0 border-black">
            <Image
              width={{ base: "full", sm: 400, md: 450, lg: 400 }}
              borderRadius={10}
              src={HeroImage}
              alt="Profile-Pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
