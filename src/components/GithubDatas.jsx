import React from "react";

const GithubData = () => {
  return (
    <div
    className="bg-gradient-to-b to-gray-800 from-black w-full pt-2 md:pt-28"
  > 
  <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-teal-200" >
  <div >
          <p className="text-4xl font-bold border-b-4 border-white p-2 inline" data-aos="fade-right">
          GitHub
   </p>
   </div>
   <div className="flex justify-center mt-10 flex-col shadow-md shadow-gray-100 p-5">
    <div className="flex justify-center">
        <p className="text-3xl font-semi-bold border-b-2 border-blue-500 p-2 inline text-white" data-aos="fade-right">
            GitHub Calendar
          </p>
          </div>  
  <div className="flex justify-center mt-10 ">
      <img className="w-full"
        src="https://ghchart.rshah.org/sapna1309"  alt="sapna-sapna-calendar" data-aos="fade-right" />
  </div>
  </div> 
  <div className="flex justify-center mt-5 flex-col shadow-md shadow-green-500 p-5">
  <div className="flex justify-center mt-0">
        <p className="text-3xl font-semi-bold border-b-2 border-blue-500 p-2 inline text-white" data-aos="fade-right" >
            My GitHub Statistics
          </p>
        </div>
        
  <div className="flex justify-center mt-10">
      <img 
        src="https://github-readme-stats-eight-theta.vercel.app/api?username=sapna1309&show_icons=true&theme=algolia&include_all_commits=true&count_private=true"  alt="sapna-sapna-states" data-aos="fade-right" />
  </div>
  </div>
  <div className="flex justify-center mt-5 flex-col shadow-md shadow-blue-500 p-5">
  <div className="flex justify-center mt-0">
        <p className="text-3xl font-semi-bold border-b-2 border-blue-500 p-2 inline text-white" data-aos="fade-right">
            GitHub Streak
          </p>
    </div>
  <div className="flex justify-center mt-10">
  <img 
  src="https://github-readme-streak-stats.herokuapp.com/?user=sapna1309&theme=algolia&" alt='sapna-sharma-streak' data-aos="fade-right"/>
  </div>
  </div>
  </div>
    </div>
  );
};

export default GithubData;
