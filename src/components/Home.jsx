import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-red-dark via-red-dark to-red-light"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-left h-full px-4 ">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-5xl sm:text-7xl font-bold text-pink-light">
            I'm a Front-End Developer
          </h2>
          <p className="text-pink-dark py-4 max-w-md">
            I create awesome and responsive websites.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-pink-light w-fit px-6 py-3 my-2 flex cursor-pointer items-center rounded-md bg-gradient-to-r from-[#2e7850] to-[#103b24]"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
