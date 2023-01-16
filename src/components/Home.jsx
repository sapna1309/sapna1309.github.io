import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter';
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const Home = () => {
  useEffect(()=>{
    AOS.init({delay:100});
  },[])
  return (
    <div
      name="home"
      className="max-w-screen md:w-full  mx-auto pt-10 md:pt-28 bg-gradient-to-b from-black via-black to-gray-800  "
    >
      <div className="max-w-screen md:max-w-screen-xl border-0 mx-auto grid xl:grid-cols-2 items-center justify-center">
    <div className='px-8 py-12 max-w-lg mx-auto sm:max-w-xl border-0 lg:px-12 lg:py-24 lg:max-w-full' data-aos="fade-right">
          <h2 style={{fontSize:30,fontWeight:600,color:"white"}}>
           Hi, my name is,
          </h2>
          <h2 className=" text-6xl text-teal-200 font-bold animate-none md:animate-pulse z-0 " >Sapna
          Sharma   </h2>
          <h1 style={{fontSize:30,color:"white",paddingTop:15}} >
          I'm a  
          <span style={{fontSize:36,fontKerning:2,fontWeight:700,
  background: 'linear-gradient(to right, #7ce8ff, #3a86f6)', webkitBackgroundClip:"text",
  webkitTextFillColor:"transparent"}} >
      <Typewriter
            words={['  Full Stack Web Developer.', '  Web Developer.']}
            loop={Infinity}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={1000}
          />
        </span>
          {/* Style will be inherited from the parent element */}
        
      </h1>
          <p className="text-gray-300 font-normal text-lg  py-4 font-medium max-w-screen-sm">
         I am an enthusiastic and creative Full-Stack Web Developer with appropriate skills who's always willing to learn and work across technology and domains.
          </p>

          <div className="max-w-screen-lg mx-auto " >
          <div className="max-w-screen-sm flex justify-start items-center space-x-8" data-aos="fade-up" >
            <div >
             <a href="https://github.com/sapna1309" target="_blank" >
                <GoMarkGithub size="38px" color="white" />
            </a>
            </div>
            <div>
             <a href="https://www.linkedin.com/in/sapna-sharma-4a1136231/" target="_blank" >
                {/* <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="38px" alt="linkdin" /> */}
                <FaLinkedin size={40} color={"white"} />
            </a>
            </div>
            
        <div>
            <a
              href="https://drive.google.com/file/d/1-IMw6yhKYIEEIGBw-iVlnAtmCRMV9WBs/view?usp=sharing"
              smooth
              target="_blank"
              className="group text-white w-fit px-6 py-2 my-2 text-sm font-bold overflow-hidden flex items-center rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer md:py-3"
              >
              SEE MY RESUME
            </a>
              </div>
              </div>
          </div>
        </div>
    <img className="mx-auto rounded-2xl w-8/12 object-cover object-center md:w-8/12  lg:w-8/12 " src={HeroImage} alt="Profile-Pic" data-aos="fade-left" />
      </div>
    </div>
  );
};

export default Home;
