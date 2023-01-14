import React from "react";
import Resume from "../assets/Resume.pdf";

function About() {
  return (
    <div
      name="about"
      className="w-full  bg-gradient-to-b from-red-light to-red-dark text-pink-light"
    >
      <div className="max-w-screen-lg  md:grid md:grid-cols-2 p-4 mx-auto flex flex-col w-full ">
        <div>
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-pink-400">
              About
            </p>
          </div>
          <p className="text-xl">
            Hello, my name is Konstantin and I'm a Front-End developer.
          </p>
          <br />
          <p className=" text-xl">
            I have a passion for creating responsive, easy-to-use websites that
            provide out of this world user experience. I strive to learn and
            improve everyday.
          </p>
        </div>
        <div className="flex items-start md:justify-end md:mt-24 mb-24 py-8 ">
          <a
            href={Resume}
            download={true}
            className="text-pink-light font-medium px-6 py-3 cursor-pointer rounded-md bg-gradient-to-r from-[#2e7850] to-[#103b24]"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
