import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ImDownload } from "react-icons/im";

const SocialLinks = () => {

  return (
    <div className="hidden lg:flex flex-col top-[40%] left-0 fixed z-10">
      <ul>
        <li
          className={
            "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gradient-to-r from-sky-700 to-teal-400 font-philosopher rounded-tr-md"
          }
        >
          <a
            href={"https://www.linkedin.com/in/sapna-sharma-4a1136231/"}
            className="flex justify-between items-center w-full text-white"
            smooth={true}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <FaLinkedin size={30} className="hover:animate-bounce" />
          </a>
        </li>
        <li
          className={
            "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gradient-to-r from-sky-700 to-teal-400 font-philosopher"
          }
        >
          <a
            href={"https://github.com/sapna1309/"}
            className="flex justify-between items-center w-full text-white"
            smooth={true}
            target="_blank"
            rel="noreferrer"
          >
            GitHub <FaGithub size={30} className="hover:animate-bounce" />
          </a>
        </li>
        <li
          className={
            "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gradient-to-r from-sky-700 to-teal-400 font-philosopher rounded-br-md"
          }
        >
          <a
            href={"/Sapna_Sharma_Resume.pdf"}
            className="flex justify-between items-center w-full text-white"
            download={true}
            smooth={true}
            target="_blank"
            rel="noreferrer"
            onClick={() => {
              window.open("https://drive.google.com/file/d/1Zcn56_vgL8pUKpFcCr1dYu4k0aLmFan5/view?usp=sharing")
            }}
          >
            Resume <ImDownload size={30} className="hover:animate-bounce" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
