import React, { useState } from "react";
import { Image } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa";
import { ImDownload } from 'react-icons/im';
import { Link } from "react-scroll";

import LogoGif from "../assets/Loading.gif";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about me",
    },
    {
      id: 3,
      link: "skill",
    },
    {
      id: 4,
      link: "project",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div style={{
      zIndex: 99999, position: "fixed", top: 0, left: 0, right: 0, backgroundColor: "#025D84", width: "100%", display: "flex"
      , justifyContent: "center", alignItems: "center", border: "1px solid #0369A1", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
    }}
    >
      <Box
        style={{ width: "95%", border: "0px solid red", margin: "auto", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 0px 5px 0px" }}
      >
        <div className=" flex items-center border-0 border-black justify-center">
          <Link to="home" smooth duration={1000}>
            <div className="flex items-center justify-center cursor-pointer ">
              <Image src={LogoGif} alt={"Logo"} width={70} height={70} />
            </div>
          </Link>
        </div>
        <ul className="hidden md:flex items-center tracking-wide" >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-semibold text-xl text-white hover:scale-110 hover:text-teal-400 duration-200 font-philosopher "
            >
              <Link
                activeClass={"text-teal-400 underline"}
                spy={true}
                to={link}
                smooth={true}
                duration={1000}
                className="hover:underline underline-offset-8">
                {link}
              </Link>
            </li>
          ))}
          <li className="hover:underline underline-offset-8" > <a
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
            className="px-4 flex gap-3 items-center cursor-pointer capitalize font-semibold text-xl text-white hover:scale-105 hover:text-teal-400 duration-200 font-philosopher"
          >
            Resume
            <ImDownload size={20} className="hover:animate-bounce" />
          </a></li>
        </ul>

        <Box
          onClick={() => {
            setNav(!nav)
            console.log(nav);
          }}
          className="cursor-pointer md:hidden"
        >
          {nav ? <FaTimes size={25} color={"white"} /> : <FaBars size={25} color={"white"} />}
        </Box>

        {nav && (
          <ul style={{ backgroundColor: "#075985" }}
            className="flex flex-col justify-center tracking-wide items-center border-0 absolute top-0 left-0 right-0 border-white w-full text-teal-400 font-philosopher shadow-sm shadow-teal-400">
            <li className="w-full border-0 border-white flex pt-1 px-3 justify-between items-center" ><Link to="home" smooth duration={1000}>
              <div className="flex items-center justify-center cursor-pointer">
                <Image src={LogoGif} alt={"Logo"} width={70} />
              </div>
            </Link>
              <Box
                onClick={() => {
                  setNav(!nav)
                  console.log(nav);
                }}
                className="cursor-pointer lg:hidden"
              >
                {nav ? <FaTimes size={25} color={"white"} /> : <FaBars size={25} color={"white"} />}
              </Box>

            </li>
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-xl font-bold hover:white"
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
            <li className="px-4 hover:cursor-pointer capitalize py-6 text-xl font-bold hover:text-teal-400" > <a
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
              className="flex gap-3 items-center cursor-pointer  hover:text-white text-teal-400"
            >
              Resume
              <ImDownload size={20} className="hover:animate-bounce" />
            </a></li>
          </ul>
        )}
      </Box>
    </div>
  );
};

export default NavBar;
