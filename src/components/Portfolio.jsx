import React from "react";
import EEInfo from "../assets/portfolio/EEInfo.gif";
import WeatherApp from "../assets/portfolio/WeatherApp.gif";
import WitcherBasics from "../assets/portfolio/WitcherBasics.gif";
import Hangman from "../assets/portfolio/Hangman.gif";
import CompanyManager from "../assets/portfolio/CompanyManager.gif";

function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: EEInfo,
      code: "https://github.com/titi7454/Ethernal-Elves-Info",
      demo: "https://ethernal-elves-info.vercel.app/",
      description:
        "Analytics website for a Web3.0 project that provides it's users to check the latest prices and stats. It also provides the ability to spy on other users to create a strategy and act accordingly.",
      tags: "html, css, react",
    },

    {
      id: 2,
      src: CompanyManager,
      code: "https://github.com/titi7454/compay-manager",
      demo: "https://company-manager-eta.vercel.app/",
      description:
        "A website which permits the user to create tasks, employees and projects. Each employee can be assigned with tasks and to different projects. There is also a leaderboard with the most tasks done per eemployee.",
      tags: "html, react, tailwind",
    },
    {
      id: 3,
      src: WitcherBasics,
      code: "https://github.com/titi7454/TheWitcherBasics",
      demo: "https://titi7454.github.io/TheWitcherBasics/",
      description:
        "Wikipedia website about The witcher 3 which helps the user by showing useful information about the enemies' weak points and loot",
      tags: "html, tailwind, react",
    },
    {
      id: 4,
      src: Hangman,
      code: "https://github.com/titi7454/Hangman",
      demo: "https://titi7454.github.io/Hangman/",
      description:
        "A game of hanman with a score tracker and a hint button to help with 1 letter each round. A total of 6 mistakes can be commited.",
      tags: "html, css, react, typescript",
    },
    {
      id: 5,
      src: WeatherApp,
      code: "https://github.com/titi7454/weather-app",
      demo: "https://titi7454.github.io/weather-app/",
      description:
        "A website bringing forth a chosen city and it's weather. There is also the option to see the 5-day forecast.",
      tags: "html, css, react",
    },

    /*
    {
      id: 6,
      src: ,
      code: "",
      demo: "",
      description: "aaa",
      tags: "",
    },*/
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-red-dark to-red-light w-full text-pink-light py-10"
    >
      <div className="max-w-screen-lg p-4 h-auto mx-auto flex flex-col justify-center w-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-400">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid mb-20 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code, description, tags }) => (
            <div key={id} className="shadow-md shadow-pink-600 rounded-lg">
              <img src={src} alt="" className="rounded-md" />
              <div className="flex justify-center items-center text-center border-b-2 border-pink-600 mx-4 py-2 px-2">
                {description}
              </div>
              <div className="flex items-center justify-center text-center pb-2 mt-2 mx-4 border-b-2 border-pink-600">
                {tags}
              </div>
              <div className="flex text-center">
                <a
                  className="w-1/2 px-6 py-3 mx-4 my-4 duration-100 hover:font-bold hover:w-10/12 hover:border-none hover:bg-pink-900 border-l-2 whitespace-nowrap border-pink-600 "
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                  href={demo}
                >
                  Demo
                </a>
                <a
                  className="w-1/2 px-6 py-3 mx-4 my-4 duration-100 hover:font-bold hover:w-full hover:border-none hover:bg-pink-900 border-r-2  border-pink-600"
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                  href={code}
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
