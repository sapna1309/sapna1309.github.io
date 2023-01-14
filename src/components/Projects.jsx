import React from "react";
import HomePageU from "../assets/portfolio/Unsplash/homePage.png";
import explore from "../assets/portfolio/Unsplash/explore.png";
import downloadImage from "../assets/portfolio/Unsplash/downloadImage.png";
import footer from "../assets/portfolio/Unsplash/footer.png";
import homepage2U from "../assets/portfolio/Unsplash/homePage2.png";
import likePage from "../assets/portfolio/Unsplash/likePage.png";
import login from "../assets/portfolio/Unsplash/login.png";
import searchSuggetion from "../assets/portfolio/Unsplash/searchSuggetion.png";
import signin from "../assets/portfolio/Unsplash/signin.png";
import uploadImage from "../assets/portfolio/Unsplash/uploadImage.png";

//Tvacha
import HomePageT from "../assets/portfolio/TvachaStore/homePage.png";
import homePage2T from "../assets/portfolio/TvachaStore/homepage2.png";
import productPage from "../assets/portfolio/TvachaStore/productPage.png";
import productDetailPage from "../assets/portfolio/TvachaStore/productDetailPage.png";
import checkoutPage from "../assets/portfolio/TvachaStore/checkoutPage.png";
import addToCart from "../assets/portfolio/TvachaStore/addCartPop-up.png";
import loginT from "../assets/portfolio/TvachaStore/login.png";
import cartPage from "../assets/portfolio/TvachaStore/cartPage.png";
import finalPage from "../assets/portfolio/TvachaStore/finalPage.png";

//Booking

import ImageSlider from "./ImageSlider";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiChakraui,
} from "react-icons/si";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
//import ProjectImageSlider from "./Slider";

const Projects = () => {
  useEffect(() => {
    AOS.init({ delay: 200 });
  }, []);
  const Unsplash = [
    {
      id: 1,
      src: HomePageU,
    },
    {
      id: 2,
      src: homepage2U,
    },
    {
      id: 3,
      src: explore,
    },
    {
      id: 4,
      src: likePage,
    },
    {
      id: 5,
      src: login,
    },
    {
      id: 6,
      src: signin,
    },
    {
      id: 7,
      src: searchSuggetion,
    },
    {
      id: 8,
      src: uploadImage,
    },
    {
      id: 9,
      src: downloadImage,
    },
    {
      id: 10,
      src: footer,
    },
  ];
  const TvachaStore = [
    {
      id: 1,
      src: HomePageT,
    },
    {
      id: 2,
      src: homePage2T,
    },
    {
      id: 3,
      src: loginT,
    },
    {
      id: 4,
      src: productPage,
    },
    {
      id: 5,
      src: productDetailPage,
    },
    {
      id: 6,
      src: addToCart,
    },
    {
      id: 7,
      src: cartPage,
    },
    {
      id: 8,
      src: checkoutPage,
    },
    {
      id: 9,
      src: finalPage,
    },
  ];
  const BookIt = [
    {
      id: 1,
      src: "https://camo.githubusercontent.com/b1cbb1be9042081ad7e8f537ddeddb7f401bfa6117b677c5934773974d744281/68747470733a2f2f692e6962622e636f2f665159423173532f626f6f6b69742d686f6d652e706e67",
    },
    {
      id: 2,
      src: "https://camo.githubusercontent.com/742bdf516d4d327c606452dad87382b2747dbbed400bc15da0eb3e0ac9acfe1f/68747470733a2f2f692e6962622e636f2f446759506d7a4a2f666c696768742d626f6f6b69742e706e67",
    },
    {
      id: 3,
      src: "https://camo.githubusercontent.com/7133f2539b128bd6247867eeeff071056e4adc60c1ccbc820e792b12705375f0/68747470733a2f2f692e6962622e636f2f684d53523535522f626f6f6b69742d626f6f6b696e672d706167652e706e67",
    },
    {
      id: 4,
      src: "https://camo.githubusercontent.com/125d239661b08d75a03cd65e73baa8b21b4f50f719b4d7e76e950851fe7d48aa/68747470733a2f2f692e6962622e636f2f4d534d743468682f626f6f6b69742d61646d696e2d706167652d73686f772d6c6973742e706e67",
    },
    {
      id: 5,
      src: "https://camo.githubusercontent.com/32a22179c51e1834d1ac8ab367c85ac202eebb7ec638a4682884cb10385c7e0d/68747470733a2f2f692e6962622e636f2f593044677179532f626f6f6b69742d64657461696c732d706167652e706e67",
    },
  ];

  let style_md =
    "mt-6 rounded-lg duration-200  h-52   md:h-60  sm:max-w-screen-lg sm:object-cover object-center lg:hidden ";
  return (
    <div
      name="projects"
      className="bg-gradient-to-b to-black   from-gray-800 w-full text-white pt-32 pb-32"
    >
      <div className="max-w-screen-lg mx-auto p-2 " data-aos="fade-right">
        <p className="text-4xl  uppercase font-bold inline border-b-4 border-gray-500">
          Projects
        </p>
      </div>

      <div className="max-w-screen-lg  mx-auto px-2 shadow-xl shadow-gray-600 mt-0 md:mt-10  ">
        <div className="max-w-screen-lg mx-auto grid lg:grid-cols-2  ">
          <div className="px-10 py-12 max-w-md mx-auto sm:max-w-xl lg:px-10 lg:py-6 lg:max-w-full">
            <div className="block lg:hidden" data-aos="fade-up">
              <ImageSlider data={Unsplash} imgStyle={style_md} />
            </div>
            <h1
              className="mt-6 text-xl text-blue-500 font-bold sm:mt-8  sm:text-3xl lg:text-2xl"
              data-aos="fade-right"
            >
              Unsplash Clone
            </h1>
            <p
              className="w-full  mt-2 text-gray-400 sm:mt-2 sm:text-xl"
              data-aos="fade-right"
            >
              Unsplash is a website dedicated to proprietary stock photography.
              It provides high resolution images.
            </p>
            <div
              className="flex justify-center items-center gap-x-2 mt-5"
              data-aos="zoom-out"
            >
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
                <SiCss3
                  size="32px"
                  color="#264de4"
                  className="hover:animate-bounce hover:cursor-pointer"
                />
              </div>
              {/* <div><SiRedux size="32px" color="#764abc" className="hover:animate-spin hover:cursor-pointer"/></div> */}
            </div>
            <div className="max-w-screen-md flex justify-center space-x-6">
              <div className="mt-4 sm:mt-6" data-aos="zoom-out">
                <a
                  href="https://github.com/sapna1309/Skin-store-Clone"
                  target={"_blank"}
                >
                  <button className="inline-block px-4 py-2 rounded-lg  hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointershadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base">
                    GitHub
                  </button>
                </a>
              </div>
              <div className="mt-4 sm:mt-6" data-aos="zoom-out">
                <a
                  href="https://leafy-tarsier-0c242d.netlify.app/"
                  target={"_blank"}
                >
                  <button className="inline-block px-4 py-2 rounded-lg hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer shadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base">
                    Preview
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="hidden relative lg:block " data-aos="fade-left">
            <a href="https://miniature-skin-4850.vercel.app/" target={"_blank"}>
              <img
                className="absolute inset-0 w-full   hover:scale-110  -mx-3 h-full object-contain  duration-700 hover:cursor-pointer "
                src={HomePageU}
                alt="unsplash-homepage"
              />
            </a>
          </div>
        </div>
      </div>

      {/* skin store project */}
      <div className="max-w-screen-lg  mx-auto px-2 shadow-xl shadow-gray-600 mt-10  ">
        <div className="max-w-screen-lg mx-auto grid lg:grid-cols-2  ">
          <div className="px-10 py-12 max-w-md mx-auto sm:max-w-xl lg:px-10 lg:py-6 lg:max-w-full">
            <div className="block lg:hidden">
              <ImageSlider
                data={TvachaStore}
                imgStyle={style_md}
                data-aos="fade-up"
              />
            </div>
            <h1
              className="mt-6 text-xl text-blue-500 font-bold sm:mt-8  sm:text-3xl lg:text-2xl"
              data-aos="fade-right"
            >
              TvachaStore (SkinStore-Clone)
            </h1>
            <p
              className="w-full  mt-2 text-gray-400 sm:mt-2 sm:text-xl"
              data-aos="fade-right"
            >
              SkinStore.com is an e-commerce site for premium beauty products
              across skin, makeup and hair.
            </p>
            <div
              className="flex justify-center items-center gap-x-2 mt-5"
              data-aos="zoom-out"
            >
              <div>
                <SiCss3
                  size="32px"
                  color="#264de4"
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
                <SiHtml5
                  size="32px"
                  color="#e34c26"
                  className="hover:animate-bounce hover:cursor-pointer"
                />
              </div>
              <div>
                <SiReact
                  size="32px"
                  color="#61DBFB"
                  className="hover:animate-spin hover:cursor-pointer"
                />
              </div>
              <div>
                <SiChakraui
                  size="32px"
                  color="#264de4"
                  className="hover:animate-bounce hover:cursor-pointer"
                />
              </div>
            </div>
            <div className="max-w-screen-md flex justify-center space-x-6">
              <div className="mt-4 sm:mt-6" data-aos="zoom-out">
                <a
                  href="https://github.com/sapna1309/Skin-store-Clone"
                  target={"_blank"}
                >
                  <button className="inline-block px-4 py-2 rounded-lg  hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointershadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base">
                    GitHub
                  </button>
                </a>
              </div>
              <div className="mt-4 sm:mt-6" data-aos="zoom-out">
                <a href="https://skinstoreclone.netlify.app/" target={"_blank"}>
                  <button className="inline-block px-4 py-2 rounded-lg hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer shadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base">
                    Preview
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="hidden relative lg:block " data-aos="fade-left">
            <a href="https://miniature-skin-4850.vercel.app/" target={"_blank"}>
              <img
                className="absolute inset-0 w-full   hover:scale-110  -mx-3 h-full object-contain  duration-700 hover:cursor-pointer "
                src={HomePageT}
                alt="TvachaStore-homepage"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Booking  */}
      <div className="max-w-screen-lg  mx-auto px-2 shadow-xl shadow-gray-600 mt-10  ">
        <div className="max-w-screen-lg mx-auto grid lg:grid-cols-2  ">
          <div className="px-10 py-12 max-w-md mx-auto sm:max-w-xl lg:px-10 lg:py-6 lg:max-w-full">
            <div className="block lg:hidden">
              <ImageSlider
                data={BookIt}
                imgStyle={style_md}
                data-aos="fade-up"
              />
            </div>
            <h1
              className="mt-6 text-xl text-blue-500 font-bold sm:mt-8  sm:text-3xl lg:text-2xl"
              data-aos="fade-right"
            >
              BookIt (Booking- Clone)
            </h1>
            <p
              className="w-full  mt-2 text-gray-400 sm:mt-2 sm:text-xl"
              data-aos="fade-right"
            >
              Booking.com is a Dutch online travel agency for lodging
              reservations & other travel products, and a subsidiary of Booking
              Holding.
            </p>
            <div
              className="flex justify-center items-center gap-x-2 mt-5"
              data-aos="zoom-out"
            >
              <div>
                <SiJavascript
                  size="32px"
                  color="yellow"
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
                <SiCss3
                  size="32px"
                  color="#264de4"
                  className="hover:animate-bounce hover:cursor-pointer"
                />
              </div>
            </div>
            <div className="max-w-screen-md flex justify-center space-x-6">
              <div className="mt-4 sm:mt-6" data-aos="zoom-out">
                <a
                  href="https://github.com/sapna1309/Booking-Clone"
                  target={"_blank"}
                >
                  <button className="inline-block px-4 py-2 rounded-lg  hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointershadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base">
                    GitHub
                  </button>
                </a>
              </div>
              <div className="mt-4 sm:mt-6" data-aos="zoom-out">
                <a
                  href="https://neon-salmiakki-934ec6.netlify.app/"
                  target={"_blank"}
                >
                  <button className="inline-block px-4 py-2 rounded-lg hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer shadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base">
                    Preview
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="hidden relative lg:block " data-aos="fade-left">
            <a href="https://neon-salmiakki-934ec6.netlify.app/" target={"_blank"}>
              <img
                className="absolute inset-0 w-full   hover:scale-110  -mx-3 h-full object-contain  duration-700 hover:cursor-pointer "
                src="https://camo.githubusercontent.com/b1cbb1be9042081ad7e8f537ddeddb7f401bfa6117b677c5934773974d744281/68747470733a2f2f692e6962622e636f2f665159423173532f626f6f6b69742d686f6d652e706e67"
                alt="Bookit-homepage"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
