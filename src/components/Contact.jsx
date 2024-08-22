import React, { useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import { CgPhone } from "react-icons/cg";
import { FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { RiGroup2Fill } from "react-icons/ri";
import { GoMarkGithub } from "react-icons/go";

import AOS from "aos";
import "aos/dist/aos.css";
import { BsFillSuitHeartFill } from "react-icons/bs";

const Contact = () => {
  useEffect(() => {
    AOS.init({ delay: 100 });
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_4evj80n', 'template_5da8p5b', form.current, 'vOLtGvCuaNzmvOyhI').then((res) => console.log(res)).catch((err) => console.log(err));
    e.target.reset();
  }

  return (
    <>
      <div
        name="contact"
        className="w-full border-0 border-white  bg-white font-philosopher to-black text-teal-200 pt-0 "
      >
        <div
          style={{
            textAlign: "center",
            border: "0px solid white",
            width: "78%",
            margin: "auto",
          }}
        >
          <p className="text-4xl py-2 uppercase font-extrabold text-sky-700 border-b-4 border-teal-400 z-10">
            Contact
          </p>
        </div>
        <div
          style={{
            textAlign: "center",
            border: "0px solid white",
            width: "78%",
            margin: "auto",
          }}
        >
          <div className="w-full mx-auto grid md:grid-cols-2 gap-10 border-0 border-white">
            {/* Left side */}
            <div className="hidden lg:flex flex-col pt-10 border-0 border-white z-10">
              <div className="bg-teal-400 rounded-md shadow-lg shadow-gray-500 flex justify-start py-4 px-5 gap-5">
                <div className="flex justify-center">
                  <CgPhone className="hover:animate-bounce " color="white" size="32px" />
                </div>
                <div className="flex gap-2">
                  <h1 className="text-xl font-bold text-white">Phone :</h1>
                  <h1 className="text-xl font-semibold text-white">+91 7827476219</h1>
                </div>
              </div>
              <div className="bg-teal-400 mt-10 rounded-md shadow-lg shadow-gray-500 flex justify-start py-4 px-5 gap-5">
                <div className="flex justify-center">
                  <SiGmail className="hover:animate-bounce " color="white" size="32px" />
                </div>
                <div className="flex gap-2">
                  <h1 className="text-xl font-bold text-white">Email :</h1>
                  <h1 className="text-xl font-semibold text-white">Sapna.Sharma220516@gmail.com</h1>
                </div>
              </div>
              <div className="bg-teal-400 mt-10 rounded-md shadow-lg shadow-gray-500 flex justify-start py-4 px-5 gap-5">
                <div className="flex justify-center">
                  <FaMapMarkerAlt className="hover:animate-bounce " color="white" size="32px" />
                </div>
                <div className="flex gap-2">
                  <h1 className="text-xl font-bold text-white">Address :</h1>
                  <h1 className="text-xl font-semibold text-white">New Delhi</h1>
                </div>
              </div>

            </div>
            {/* small and medium screen */}
            <div className="lg:hidden flex flex-col pt-10 gap-y-8 border-0 border-black z-10">
              <div className="bg-teal-400 rounded-md shadow-lg shadow-gray-500 flex flex-col justify-center py-2 px-1">
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                  <CgPhone className="hover:animate-bounce" color="white" size="32px" />
                </div>
                <h1 className="text-md md:text-lg lg:xl tracking-wide font-semibold md:font-bold text-white">
                  +91 7827476219
                </h1>
              </div>
              <div className="bg-teal-400 rounded-md shadow-lg shadow-gray-500 flex flex-col justify-center py-2 px-1">
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                  <SiGmail className="hover:animate-bounce" color="white" size="32px" />
                </div>

                <h1 className="text-md md:text-lg lg:xl tracking-wide font-semibold md:font-bold text-white">
                  Sapna.Sharma220516@gmail.com
                </h1>
              </div>
              <div className="bg-teal-400 rounded-md shadow-lg shadow-gray-500 flex flex-col justify-center py-2 px-1">
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                  <FaMapMarkerAlt className="hover:animate-bounce" color="white" size="32px" />
                </div>

                <h1 className="text-md md:text-lg lg:xl tracking-wide font-semibold md:font-bold text-white">
                  New Delhi
                </h1>
              </div>
              <div className="bg-teal-400 rounded-md shadow-lg shadow-gray-500 flex flex-col justify-center py-2 px-1">

                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                  <a href="https://www.linkedin.com/in/sapna-sharma-4a1136231/" target="_blank" rel='noreferrer' >
                    < FaLinkedin size={"36px"} color="white" />
                  </a>
                </div>
                <h1 className="text-md md:text-xl tracking-wide font-semibold md:font-bold text-white">
                  LinkdIn
                </h1>
              </div>
              <div className="bg-teal-400 rounded-md shadow-lg shadow-gray-500 flex flex-col justify-center py-2 px-1">

                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                  <a href="https://github.com/sapna1309" target="_blank" rel='noreferrer' >
                    < GoMarkGithub size={"36px"} color="white" />
                  </a>
                </div>
                <h1 className="text-md md:text-xl tracking-wide font-semibold md:font-bold text-white">
                  GihHub
                </h1>
              </div>
            </div>

            {/* Right side  */}

            <div
              className="w-full flex justify-center pt-0 md:pt-10  border-0 border-white z-10"
            >
              <form
                className=" flex flex-col w-full "
                ref={form}
                onSubmit={sendEmail}
              >
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="p-2 bg-transparent shadow-md shadow-gray-400 border-2 rounded-md text-black focus:outline-none"
                />
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="Enter your email"
                  className="my-4 p-2 bg-transparent border-2 shadow-md shadow-gray-400 rounded-md text-black focus:outline-none"
                />
                <input
                  type="tel"
                  name="phone"
                  pattern="[0-9]{10}"
                  required
                  placeholder="Enter your Mobile No"
                  className="mb-4 p-2 bg-transparent shadow-md shadow-gray-400 border-2 rounded-md text-black focus:outline-none"
                />
                {/* <textarea
                name="message"
                placeholder="Enter your message"
                rows="10"
                required
                className="p-2 bg-transparent lg:hidden shadow-md shadow-gray-400 border-2 rounded-md text-black focus:outline-none"
              /> */}

                <textarea
                  name="message"
                  placeholder="Enter your message"
                  rows="4"
                  required
                  className="p-2 bg-transparent shadow-md shadow-gray-400 border-2 rounded-md text-black focus:outline-none"
                />

                <button
                  type="submit"
                  className="text-white tracking-wide bg-gradient-to-r from-teal-400 to-sky-700 px-3 md:px-5 py-2 my-8 font-bold text-xl mx-auto flex gap-x-2 items-center rounded-md hover:scale-110 duration-300 cursor-pointer shadow-md shadow-gray-500 z-10"
                >
                  Let's Connect
                  <RiGroup2Fill size={28} className="text-white " />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
