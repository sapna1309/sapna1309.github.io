const Experience = () => {
  return (
    <div className=" w-full h-fit bg-white tracking-wide pt-0 pb-10 lg:pb-20 font-philosopher">
      <div style={{ textAlign: "center", width: "78%", margin: "auto" }} >

        <p className="text-4xl text-center py-2 text-sky-700 uppercase font-extrabold border-b-4 border-teal-400 z-10">
          Experience
        </p>
      </div>
      <div className="w-[78%] m-auto text-center flex flex-col md:flex-row md:justify-between mt-7 gap-5" >
        <div className="w-full md:w-[30%] flex flex-col items-center md:items-start justify-center px-1">
          <p className=" text-center md:text-left text-sky-700 text-md md:text-xl font-semibold font-philosopher">Ash Information Technology</p>
          <p className="text-left text-sky-700 text-xs md:text-sm font-semibold font-philosopher">Oct, 2023 - Jul, 2024</p>
          <p className="text-left text-sky-700 text-sm md:text-lg font-semibold smd:font-medium font-philosopher">Software Developer</p>
        </div>
        <div style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px" }} className="w-full md:w-[70%] flex items-center bg-white justify-center relative rounded-lg p-2 pt-5 md:pt-2  pl-2 md:pl-5 text-center md:text-left mt-3 md:mt-0">
          Developed a Customer
          Relationship Management (CRM) system, a Matrimonial Web App, a Content
          Management System (CMS), and a trading platform's website. My role
          involved collaborating closely with cross-functional teams to ensure
          seamless integration and a smooth user experience.
          <div style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px" }} className="h-6 w-6 rotate-45 absolute -top-3 md:top-1/2 md:-translate-y-1/2 left-1/2 md:-left-3 bg-teal-400">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience;