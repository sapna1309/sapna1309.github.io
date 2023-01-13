import React from "react";
import benchwork from "../assets/working.gif"
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
import Top from "./Top";

const About = () => {
  useEffect(()=>{
    AOS.init({delay:50});
},[])

  return (
    <div
      name="about"
      className=" w-full h-fit  bg-gradient-to-b from-gray-800 to-black text-white pt-10"
    >
      
          <div className="hidden md:block ">
            <div >
           <Top/>
            </div>
          </div>
      <div className="max-w-screen-lg mx-auto p-2">
          <p className="text-4xl  capitalize font-bold inline border-b-4 border-gray-500" data-aos="fade-up" >
            About
          </p>
        </div>
      
      <div className="max-w-screen-lg mx-auto grid lg:grid-cols-2 pt-4 ">

       <div className="hidden relative lg:block lg:mt-6">
      <img className="absolute inset-0 w-9/12 h-9/12 object-cover object-center rounded-xl " src={benchwork} alt="logo" data-aos="fade-up" />
      </div>

    <div className='px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-2 lg:py-4 lg:max-w-screen-lg '>
      <img className="rounded-lg shadow-xl sm:mt-3 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden" src={benchwork} alt="logo"  data-aos="fade-up" />
        <div>
      <p className="mt-6 md:mt-2 text-2xl  text-gray-600 " data-aos="fade-down">
        I am Result-oriented full-stack web developer, passionate about developing user-friendly web applications using MERN Stack.
        </p>

        <p className="mt-6 text-2xl  text-gray-600 " data-aos="fade-left">
        I enjoy developing websites and a keen interest in solving problems and coming up with effective solutions.
        </p>
      
        <p className="mt-6 text-2xl  text-gray-600 " data-aos="fade-up">
        Eager to be a part of a team which gives me ability to learn and grow.
        </p>
        </div>
    </div>
   </div>
    </div>
  );
};

export default About;
