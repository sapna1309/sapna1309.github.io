import React, { useEffect,useState } from "react";
import { FcPhone } from "react-icons/fc";
import { FaMapMarkerAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import AOS from "aos";
import "aos/dist/aos.css"

const Contact = () => {

  useEffect(()=>{
    AOS.init({delay:200});
},[])

  // const [show,setShow] =useState(false);

  // const handleSubmit=(e)=>{
  //   e.preventDefault();
  //   setShow(true);
  //   setTimeout(()=>{
  //     setShow(false);
  //   },5000)
  // }

  // useEffect(()=>{
  // },[show])

  // const Toast=()=>{
  //   return(
  //     <div id="toast-simple" class="flex items-center p-4 space-x-4 w-full max-w-xs fixed top-3 right-3 z-50 text-gray-500 bg-white rounded-lg divide-x divide-gray-200 shadow shadow-white " role="alert">
  //         <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-500" focusable="false" data-prefix="fas" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"></path></svg>
  //         <div class="pl-4 text-md  font-medium">Message sent successfully.</div>
  //     </div>
  //     )
  //   }

  return (
  
   <>
    <div
      name="contact us"
      className="w-full  bg-gradient-to-b from-black to-gray-800 p-4 text-white"
      >
        {/* {show && <Toast/> } */}
      <div className="max-w-screen-lg mx-auto" data-aos="fade-right">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6 ">Submit the form below to get in touch with me</p>
        </div>
         <div className="max-w-screen-lg flex flex-col mx-auto mt-18 mb-18 md:m-auto md:flex-row gap-x-3 justify-center items-center"> 
        {/* Left side */}
         <div className='flex flex-col justify-center gap-y-14 mt-0 md:-mt-20'>
               <div className='w-full flex gap-3 p-6 rounded-xl  shadow-emerald-600 shadow-lg ' data-aos="fade-up-right">
                  <div>
                    <FcPhone className="hover:animate-bounce" size="32px" />
                  </div>
                  <div>
                    <h1 className='text-xl font-bold '>Phone :</h1>
                    <h1 className='text-xl text-gray-500 '>+91 9968363840</h1>
                  </div>
               </div>
               <div className='w-full flex gap-3 p-6 rounded-xl shadow-lg shadow-red-400'  data-aos="fade-up-right">
                  <div>
                    <SiGmail  className="hover:animate-bounce" size="32px" color="red" />
                  </div>
                  <div>
                    <h1 className='text-xl font-bold'>Email :</h1>
                    <h1 className='text-xl text-gray-500'>Manojattri181@gmail.com</h1>
                  </div>
               </div>
               <div className='w-full flex gap-3 p-6 rounded-xl shadow-lg shadow-red-500'  data-aos="fade-up-right">
                  <div>
                    <a href="https://www.google.com/maps/place/Najafgarh,+New+Delhi,+Delhi/@28.6072707,76.9626659,14z/data=!4m5!3m4!1s0x390d0fdcb4d53a21:0x8800d482f7f39fc0!8m2!3d28.6090126!4d76.9854526" target="_blank" >
                    <FaMapMarkerAlt  className="hover:animate-bounce" size="32px" color="red" />
                    </a>
                  </div>
                  <div>
                    <h1 className='text-xl font-bold'>Address :</h1>
                    <h1 className='text-xl  text-gray-500'>Najafgarh, New Delhi </h1>
                  </div>
               </div>
           </div> 
           
  {/* Right side  */}

        <div className="w-full flex justify-center mt-8 md:m-auto lg:-mt-5"  data-aos="fade-up-left">
          <form
            action="https://getform.io/f/bf621390-e321-4e34-ac7b-a892f5c47327"
            method="POST"
            encType="multipart/form-data"
            className=" flex flex-col w-full md:w-1/2"
            >
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="p-2 bg-transparent  border-2 rounded-md text-white focus:outline-none"
              />
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
            <input
              type="tel"
              name="phone"
              pattern="[0-9]{10}"
              placeholder="Enter your Mobile No"
              className="mb-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />

            <button type="submit"   className="text-white hover:opacity-60 bg-gradient-to-b from-cyan-400 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 hover:cursor-pointer " >
              Let's Connect
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
