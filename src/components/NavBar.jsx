import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
// import LogoSapna from '../assets/logoSapna.png'
//import Signature from '../assets/signature.png';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 4,
      link: "skills",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className=" max-w-screen border-0 mx-auto flex justify-around items-center w-full h-20 px-4 py-1 text-teal-200 bg-black fixed z-20">
      <div className=" flex items-center border-0 justify-center">
        <Link to="home"  smooth duration={1000}>
        <div className="flex items-center justify-center border-0 cursor-pointer text-5xl font-signature capitalize" data-aos="fade-right">
          Sapna Sharma
       {/* <img src={Signature} alt="logo" width={250}/></div> */}
       </div>
        </Link>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-lg text-white hover:scale-105 hover:text-teal-200 duration-300"
          >
            <Link to={link} smooth duration={1000} className="hover:underline underline-offset-8">
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-20 z-10  text-white md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={600}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
