import React from "react";
import benchwork from "../assets/coding.gif";
import Top from "./Top";

const About = () => {

  return (
    <div
      name="about me"
      className=" w-full h-fit bg-white tracking-wide pt-0 pb-2 md:pb-6 lg:pb-20 border-0 border-black"
    >
      <div className="hidden md:block ">
        <div>
          <Top />
        </div>
      </div>
      <div style={{ textAlign: "center", border: "0px solid white", width: "78%", margin: "auto" }} >
        <p
          className="
          text-4xl text-sky-700 uppercase font-extrabold py-2 border-b-4 border-teal-400 font-philosopher z-10"
        >
          About me
        </p>
      </div>
      <div style={{ textAlign: "center", border: "0px solid black", width: "78%", margin: "auto" }} >
        <div className="w-full mx-auto grid lg:grid-cols-2 pt-4 border-0 border-black items-center z-10">
          <div className="hidden lg:block lg:mt-0 border-0 border-black z-10">
            <img
              className=" w-11/12 rounded-xl "
              src={benchwork}
              alt="logo"
            />
          </div>

          <div className="pb-8 mx-auto w-full border-0 border-black z-10">
            <img
              className="rounded-lg sm:h-64 sm:w-full lg:hidden"
              src={benchwork}
              alt="logo"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                border: "0px solid black",
                marginTop: "10px",
                zIndex: 10
              }}
            >
              <p
                className=" text-center md:text-left text-sky-700 text-md md:text-lg font-semibold font-philosopher"
              >
                I am a result-oriented Full Stack Web Developer with over one year of professional experience. My journey began at Masai School, where I honed my skills and developed a passion for creating user-friendly web applications using the MERN Stack. Since then, I've worked at Ash Information Technology as a Full Stack Developer, where I developed projects such as Customer Relationship Management (CRM), Content Management Systems (CMS), a matrimonial website, and other web applications. My experience has taught me the importance of teamwork, leadership, and communication in delivering high-quality software solutions. After months of rigorous training and hands-on experience, I am now looking forward to working in challenging and dynamic environment.


              </p>

              {/* <p
              className="mt-2 md:mt-6 text-center md:text-left text-sky-700 text-md md:text-lg font-semibold font-philosopher"
            >
              I built a number of web applications and 4 major projects. Learned
              a great deal about teamwork, leadership, and communication. After
              months of rigorous training, here I am looking for an opportunity
              as a Full Stack Web Developer.
            </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
