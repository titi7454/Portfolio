import React from "react";
import EEInfo from "../assets/portfolio/EEInfo.gif";
import WeatherApp from "../assets/portfolio/WeatherApp.gif";

function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: EEInfo,
      code: "https://github.com/titi7454/Ethernal-Elves-Info",
      demo: "https://titi7454.github.io/Ethernal-Elves-Info/",
    },
    {
      id: 2,
      src: WeatherApp,
      code: "https://github.com/titi7454/weather-app",
      demo: "https://titi7454.github.io/weather-app/",
    },
    /*{
      id: 3,
      src: ,
      code: "",
      demo: "",
    },
    {
      id: 4,
      src: ,
      code: "",
      demo: "",
    },
    {
      id: 5,
      src: ,
      code: "",
      demo: "",
    },
    {
      id: 6,
      src: ,
      code: "",
      demo: "",
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
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-pink-600 rounded-lg">
              <img src={src} alt="" className="rounded-md" />
              <div className="flex item-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-100 hover:font-bold hover:w-10/12 hover:border-none hover:bg-pink-900 border-l-2 whitespace-nowrap border-pink-600 ">
                  <a target={"_blank"} rel={"noopener noreferrer"} href={demo}>
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-100 hover:font-bold hover:w-full hover:border-none hover:bg-pink-900 border-r-2  border-pink-600">
                  <a target={"_blank"} rel={"noopener noreferrer"} href={code}>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
