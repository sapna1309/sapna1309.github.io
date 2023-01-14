import React from "react";
import HomePageU from '../assets/portfolio/Unsplash/homePage.png';
import explore from '../assets/portfolio/Unsplash/explore.png';
import downloadImage from '../assets/portfolio/Unsplash/downloadImage.png';
import footer from '../assets/portfolio/Unsplash/footer.png';
import homepage2U from '../assets/portfolio/Unsplash/homePage2.png';
import likePage from '../assets/portfolio/Unsplash/likePage.png';
import login from '../assets/portfolio/Unsplash/login.png';
import searchSuggetion from '../assets/portfolio/Unsplash/searchSuggetion.png';
import signin from '../assets/portfolio/Unsplash/signin.png';
import uploadImage from '../assets/portfolio/Unsplash/uploadImage.png';

//Tvacha
import HomePageT from '../assets/portfolio/TvachaStore/homePage.png';
import homePage2T from '../assets/portfolio/TvachaStore/homepage2.png';
import productPage from '../assets/portfolio/TvachaStore/productPage.png';
import productDetailPage from '../assets/portfolio/TvachaStore/productDetailPage.png';
import checkoutPage from '../assets/portfolio/TvachaStore/checkoutPage.png';
import addToCart from '../assets/portfolio/TvachaStore/addCartPop-up.png';
import loginT from '../assets/portfolio/TvachaStore/login.png';
import cartPage from '../assets/portfolio/TvachaStore/cartPage.png';
import finalPage from '../assets/portfolio/TvachaStore/finalPage.png';

//Booking
import f1 from '../assets/portfolio/Bookit/f1.JPG';
import f2 from '../assets/portfolio/Bookit/f2.JPG';
import f3 from '../assets/portfolio/Bookit/f3.JPG';
import f4 from '../assets/portfolio/Bookit/f4.JPG';


import ImageSlider from "./ImageSlider";
import {SiCss3, SiHtml5, SiJavascript, SiReact, SiChakraui} from "react-icons/si";

import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
//import ProjectImageSlider from "./Slider";

const Projects = () => {

  useEffect(()=>{
    AOS.init({delay:200});
},[])
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
    }
  ];
  const TvachaStore =[
    {
      id:1,
      src: HomePageT,
    },
    {
      id:2,
      src:homePage2T,
    },
    {
      id:3,
      src:loginT,
    },
    {
      id:4,
      src:productPage,
    },
    {
      id:5,
      src:productDetailPage,
    },
    {
      id:6,
      src:addToCart,
    },
    {
      id:7,
      src:cartPage,
    },
    {
      id:8,
      src:checkoutPage,
    },
    {
      id:9,
      src:finalPage,
    }
  ]
  const BookIt =[
    {
      id:1,
      src:f1,
    },
    {
      id:2,
      src:f2,
    },
    {
      id:3,
      src:f3,
    },
    {
      id:4,
      src:f4,
    }
  ]
 
  let style_md = "mt-6 rounded-lg duration-200  h-52   md:h-60  sm:max-w-screen-lg sm:object-cover object-center lg:hidden absolute inset-0 w-full  hover:scale-110  -mx-3 h-full object-contain  duration-700 hover:cursor-pointer ";
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
        <div className='px-10 py-12 max-w-md mx-auto sm:max-w-xl lg:px-10 lg:py-6 lg:max-w-full'>
          <div className="block lg:hidden">
        {/* <ImageSlider  data={TvachaStore} imgStyle= {style_md} data-aos="fade-up"/> */}
          </div>
          <h1 className="mt-6 text-xl text-blue-500 font-bold sm:mt-8  sm:text-3xl lg:text-2xl" data-aos="fade-right" >Unsplash Clone
            </h1>
            <p className="w-full  mt-2 text-gray-600 sm:mt-2 sm:text-xl"  data-aos="fade-right">
            Expedia is one of the fastest growing online travel portals in Asia, offering travellers an extensive selection of hotels, activities and travel services.
            </p>
            <div className='flex justify-center items-center gap-x-2 mt-5' data-aos="zoom-out">
            <div><SiHtml5 size="32px" color="#e34c26" className="hover:animate-bounce hover:cursor-pointer"/></div>
            <div><SiJavascript size="32px" color="yellow" className="hover:animate-bounce hover:cursor-pointer"/></div>
            <div><SiCss3 size="32px" color="#264de4" className="hover:animate-bounce hover:cursor-pointer"/></div>
            {/* <div><SiRedux size="32px" color="#764abc" className="hover:animate-spin hover:cursor-pointer"/></div> */}
            </div>
            <div className="max-w-screen-md flex justify-center space-x-6"  >
            <div className="mt-4 sm:mt-6" data-aos="zoom-out">
              <a href="https://github.com/sapna1309/Skin-store-Clone" target={"_blank"}>
                <button className="inline-block px-4 py-2 rounded-lg  hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointershadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base" >GitHub</button>
              </a>
            </div>
            <div className="mt-4 sm:mt-6"  data-aos="zoom-out">
              <a href="https://leafy-tarsier-0c242d.netlify.app/" target={"_blank"}>
                <button className="inline-block px-4 py-2 rounded-lg hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer shadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base" >Preview</button>
              </a>
            </div>
            </div>
        </div>
        {/* <ImageSlider  data={Unsplash} imgStyle= {style_md} /> */}
        {/* <ProjectImageSlider data={Unsplash} myStyle={style_md}/> */}
        <div className="hidden relative lg:block " data-aos="fade-left" >
        <a href="https://miniature-skin-4850.vercel.app/" target={"_blank"}>
      <img className="absolute inset-0 w-full   hover:scale-110  -mx-3 h-full object-contain  duration-700 hover:cursor-pointer " src={HomePageU} alt="logo" />
        </a>
        </div>
      </div>
      </div>

      
      {/* skin store project */}
        <div className="max-w-screen-lg  mx-auto px-2 shadow-xl shadow-gray-600 mt-10  ">
        <div className="max-w-screen-lg mx-auto grid lg:grid-cols-2  "> 
        <div className='px-10 py-12 max-w-md mx-auto sm:max-w-xl lg:px-10 lg:py-6 lg:max-w-full'>
          <div className="block lg:hidden">
          {/* <ImageSlider  data={TvachaStore} imgStyle= {style_md} data-aos="fade-up"/> */}
          </div>
          <h1 className="mt-6 text-xl text-blue-500 font-bold sm:mt-8  sm:text-3xl lg:text-2xl" data-aos="fade-right">Tvacha (SkinStore-Clone) 
            </h1>
            <p className="w-full  mt-2 text-gray-600 sm:mt-2 sm:text-xl" data-aos="fade-right" >
            SkinStore offers premium beauty products like lipstick, Eyeliners, and many more products with the latest in innovative clinical skincare and luxury spa products.
            </p>
            <div className='flex justify-center items-center gap-x-2 mt-5'  data-aos="zoom-out">
            <div><SiCss3 size="32px" color="#264de4" className="hover:animate-bounce hover:cursor-pointer"/></div>
            <div><SiJavascript size="32px" color="yellow" className="hover:animate-bounce hover:cursor-pointer"/></div>
            <div><SiHtml5 size="32px" color="#e34c26" className="hover:animate-bounce hover:cursor-pointer"/></div>
            <div><SiReact size="32px" color="#61DBFB" className="hover:animate-spin hover:cursor-pointer"/></div>
            <div><SiChakraui size="32px" color="#264de4" className="hover:animate-bounce hover:cursor-pointer"/></div>
            </div>
            <div className="max-w-screen-md flex justify-center space-x-6" >
            <div className="mt-4 sm:mt-6"data-aos="zoom-out">
              <a href="https://github.com/sapna1309/Skin-store-Clone" target={"_blank"}>
                <button className="inline-block px-4 py-2 rounded-lg  hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointershadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base" >GitHub</button>
              </a>
            </div>
            <div className="mt-4 sm:mt-6" data-aos="zoom-out">
              <a href="https://skinstoreclone.netlify.app/" target={"_blank"}>
                <button className="inline-block px-4 py-2 rounded-lg hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer shadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base" >Preview</button>
              </a>
            </div>
            </div>
        </div>

      <div className="hidden relative lg:block " data-aos="fade-left" >
        <a href="https://miniature-skin-4850.vercel.app/" target={"_blank"}>
      <img className="absolute inset-0 w-full   hover:scale-110  -mx-3 h-full object-contain  duration-700 hover:cursor-pointer " src={HomePageT} alt="logo" />
        </a>
        </div>
      </div>
      </div>


      {/* Booking  */}
      <div className="max-w-screen-lg  mx-auto px-2 shadow-xl shadow-gray-600 mt-10  ">
        <div className="max-w-screen-lg mx-auto grid lg:grid-cols-2  "> 
        <div className='px-10 py-12 max-w-md mx-auto sm:max-w-xl lg:px-10 lg:py-6 lg:max-w-full'>
          <div className="block lg:hidden">
          {/* <ImageSlider  data={BookIt} imgStyle= {style_md} data-aos="fade-up"/> */}
          </div>
          <h1 className="mt-6 text-xl text-blue-500 font-bold sm:mt-8  sm:text-3xl lg:text-2xl" data-aos="fade-right">BookIt (Booking- Clone)
            </h1>
            <p className="w-full  mt-2 text-gray-600 sm:mt-2 sm:text-xl"  data-aos="fade-right">
            FitMeal is Food-Delivery Services based website used by wide range of customers.The intention was to introduce the concept of healthy eating in Hyderabad.
            </p>
            <div className='flex justify-center items-center gap-x-2 mt-5' data-aos="zoom-out">
            <div><SiJavascript size="32px" color="yellow" className="hover:animate-bounce hover:cursor-pointer"/></div>
            <div><SiHtml5 size="32px" color="#e34c26" className="hover:animate-bounce hover:cursor-pointer"/></div>
            <div><SiCss3 size="32px" color="#264de4" className="hover:animate-bounce hover:cursor-pointer"/></div>
            </div>
            <div className="max-w-screen-md flex justify-center space-x-6">
            <div className="mt-4 sm:mt-6" data-aos="zoom-out">
              <a href="https://github.com/sapna1309/Booking-Clone" target={"_blank"}>
                <button className="inline-block px-4 py-2 rounded-lg  hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointershadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base" >GitHub</button>
              </a>
            </div>
            <div className="mt-4 sm:mt-6"  data-aos="zoom-out">
              <a href="https://neon-salmiakki-934ec6.netlify.app/" target={"_blank"}>
                <button className="inline-block px-4 py-2 rounded-lg hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer shadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base" >Preview</button>
              </a>
            </div>
            </div>
        </div>

      <div className="hidden relative lg:block " data-aos="fade-left" >
      <a href="https://fit-meal.netlify.app/" target={"_blank"}>
      <img className="absolute inset-0 w-full   hover:scale-110  -mx-3 h-full object-contain  duration-700 hover:cursor-pointer " src={f1} alt="logo" />
      </a>
        </div>
      </div>
      </div>
    </div>
  
  );
};

export default Projects;
