import React from 'react'
import loadingGif2 from "../assets/loading.gif"
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
const LoadingPage = () => {
  useEffect(()=>{
    AOS.init({duration:1000});
},[])
  return (
    <div className='w-full min-h-screen mx-auto bg-black '>
      <div className='max-w-screen-lg flex flex-col items-center justify-center m-auto pt-32 md:pt-[5%] '>
        <img src="https://i.pinimg.com/originals/25/85/33/258533e0a3719008bbc2ca6e05385cbf.gif" className="w-7/12 md:w-5/12" alt="laoding"  data-aos="zoom-in-up" />
        <div className='m-auto mt-5' data-aos="zoom-in-down">
        <h1 className="text-5xl text-white font-signature ml-2 capitalize">Sapna Sharma</h1>
        </div>
      </div>
    </div>
  )
}

export default LoadingPage;