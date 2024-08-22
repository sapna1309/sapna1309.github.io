import React from "react";
import GitHubCalendar from "react-github-calendar";

const GithubData = () => {
  return (
    <div className="bg-white w-full pt-0 pb-14 md:pb-20">
      <div
        style={{
          textAlign: "center",
          border: "0px solid white",
          width: "78%",
          margin: "auto",
        }}
      >
          <p className=" text-4xl py-2 text-center  uppercase font-extrabold font-philosopher text-sky-700 border-b-4 border-teal-400 z-10">
            Github
          </p>
      </div>
      <div
        style={{
          textAlign: "center",
          border: "0px solid white",
          width: "78%",
          margin: "auto",
        }}
      >
        <div className="w-full mx-auto flex flex-col justify-center">
          <div className="flex justify-center mt-10 rounded-lg flex-col border-4 border-teal-400 shadow-lg shadow-gray-500 p-3 bg-sky-800 z-10">
              <p className="text-2xl tracking-wide text-center md:text-3xl font-bold border-b-2 border-teal-500 text-teal-400 font-philosopher">
                GitHub Calendar
              </p>
            <div className="flex justify-center mt-6 md:mt-8">
              <GitHubCalendar
                style={{
                  border: "1px solid #26B0AB",
                  padding: "3px",
                  color: "#99F6E4",
                }}
                username="sapna1309"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-5 mt-5 z-10">
            <div className="flex justify-center mt-5 flex-col shadow-lg shadow-gray-500 border-4 border-teal-400 rounded-lg bg-sky-800 p-2">
                <p className="text-2xl tracking-wide text-center md:text-3xl font-bold border-b-2 border-teal-500 text-teal-400 font-philosopher">
                  My GitHub Statistics
                </p>

              <div className="flex justify-center mt-6 md:mt-8">
                <img
                  src="https://github-readme-stats-eight-theta.vercel.app/api?username=sapna1309&show_icons=true&include_all_commits=true&count_private=true"
                  alt="sapna-sapna-states"
                />
              </div>
            </div>
            <div className="flex justify-center mt-5 flex-col shadow-lg shadow-gray-500 border-4 border-teal-400 rounded-lg bg-sky-800 p-2">
                <p className="text-2xl tracking-wide text-center md:text-3xl font-bold border-b-2 border-teal-500 text-teal-400 font-philosopher ">
                  GitHub Streak
                </p>
              <div className="flex justify-center mt-6 md:mt-8">
                <img
                  src="https://github-readme-streak-stats.herokuapp.com/?user=sapna1309&"
                  alt="sapna-sharma-streak"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubData;
