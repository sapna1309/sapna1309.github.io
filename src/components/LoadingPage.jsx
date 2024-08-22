import React from 'react'
import AOS from "aos";
import Loading from "../assets/Loading.gif";
import "aos/dist/aos.css"
import { useEffect } from "react";

const LoadingPage = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
},[])

//https://media.tenor.com/cNtGW9mWL9MAAAAi/butterfly-teal.gif
  return (
    <div className='w-full min-h-screen mx-auto'>
      <div style={{width:"full",backgroundColor:"#025D84",height:"100vh",border:"0px solid black"}}>
      <div className='max-w-screen-md flex flex-col items-center justify-center m-auto pt-32 md:pt-[5%] '>
        <img src={Loading} className="w-8/12 md:w-6/12" alt="laoding" data-aos="zoom-in-up" />
        <div className='m-auto mt-5' data-aos="zoom-in-down">
        <h1 className="text-5xl text-teal-400 font-philosopher ml-2 capitalize">Sapna Sharma</h1>
        </div>
      </div>
      </div>
    </div>
  )
}

export default LoadingPage;