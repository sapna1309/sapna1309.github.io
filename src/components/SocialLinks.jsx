import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ImDownload } from "react-icons/im";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/sapna-sharma-4a1136231/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/sapna1309",
    },
    {
      id: 3,
      child: (
        <>
         Resume <ImDownload size={30} />
        </>
      ),
      href: "/Sapna-Sharma-Resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gradient-to-r from-cyan-400 to-blue-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
              onClick={()=>{
                window.open("https://drive.google.com/file/d/1-IMw6yhKYIEEIGBw-iVlnAtmCRMV9WBs/view?usp=sharing")
              }}
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
