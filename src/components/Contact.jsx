import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-red-dark via-red-dark to-red-light text-pink-light"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-400">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/d2767885-2a39-4cb6-ba19-cb823bb94f2b"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <div className="">Name:</div>
            <input
              type="text"
              name="name"
              className="mb-4 p-2 bg-transparent border-2 rounded-md text-pink-ligth focus:outline-none"
            />
            <div>Email:</div>
            <input
              type="text"
              name="email"
              className=" mb-4 p-2 bg-transparent border-2 rounded-md text-pink-ligth focus:outline-none"
            />
            <div>Message:</div>
            <textarea
              name="message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-pink-ligth focus:outline-none"
            ></textarea>
            <button className="text-pink-light bg-gradient-to-b from-[#2e7850] to-[#103b24] px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Send message!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
