import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImg from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

const Experience = () => {
  const skills = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImg,
      title: "react",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "TailWind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b pb-10 to-red-dark from-red-light w-full "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-pink-light">
        <div>
          <p className="text-4xl font-bold border-b-4 border-pink-400 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with:</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 text-center w-full gap-8 py-8 px-12 sm:px-0">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={` bg-[#381417e1] shadow-md rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
