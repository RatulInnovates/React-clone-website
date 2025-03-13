import React from "react";
import Footer from "./Footer";

const ContactForm = () => {
  return (
    <>
  
    <div className="md:flex md:flex-row flex-col">
    <div className="  flex flex-col bg-black text-white mt-9 px-6">
      <div className=" w-full">
        <h1 className="text-4xl font-bold">SAY HELLO!</h1>
        <p className="text-gray-400 mt-2">
          My creative spirit comes alive in the digital realm. With nimble fingers flying across the keyboard.
        </p>

        <div className="flex items-center gap-2 mt-6">
          <p className="uppercase font-semibold">Fill this form out</p>
          
        </div>

        <form className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 bg-black border border-gray-700 rounded-md focus:outline-none focus:border-white"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 bg-black border border-gray-700 rounded-md focus:outline-none focus:border-white"
          />
          <textarea
            placeholder="Message"
            className="w-full p-3 bg-black border border-gray-700 rounded-md h-32 focus:outline-none focus:border-white"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-white text-black font-semibold py-3 rounded-md hover:bg-gray-200 transition duration-300"
          >
            SEND EMAIL
          </button>
        </form>
      </div>
    </div>
    <div className="img-container h-[30rem] w-full md:w-[50%] p-4 mt-9 ">
      <img src="https://wpriverthemes.com/bronx/wp-content/uploads/2024/05/hero-full.png" alt="" className='w-full h-full object-cover rounded-2xl' />
    </div>
    
    </div>
    <div className="h-[5rem] hidden md:block"></div>
    <Footer/>
    </>
  );
};

export default ContactForm;
