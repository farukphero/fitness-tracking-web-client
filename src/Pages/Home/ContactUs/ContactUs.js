import React from "react";
import "./Contact.css";

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="mt-12"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="2000"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 border border-green-500 p-7">
        <div>
          <h2 className="text-3xl lg:text-4xl text-all-green font-semibold text-center pt-10">
            Get In Touch 
          </h2>
          <p className="text-white text-center lg:w-11/12 mx-auto pt-2 ">
            
            Great genius takes shape by contact with another great genius, <span className="flex lg:hidden">but,
            less by assimilation than by friction.</span>
          </p>
          <p className="text-white text-start lg:w-8/12 mx-auto hidden lg:flex">but,
            less by assimilation than by friction.</p>
        </div>
        <div>
          <form>
            <div className="mb-1">
              <label
                htmlFor="name"
                className="inline-block mb-1 text-white font-medium"
              >
                Name
              </label>
              <input
                placeholder="Your Full Name"
                required
                type="text"
                className="flex-grow w-full h-12 text-white px-4 mb-2 transition duration-200 bg-gray-600 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
              />
            </div>
            <div className="mb-1">
              <label
                htmlFor="email"
                className="inline-block mb-1 text-white font-medium"
              >
                E-mail
              </label>
              <input
                placeholder="...@gmail.com"
                required
                type="email"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-gray-600 text-white rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
              />
            </div>
            <div className="mb-1">
              <label className="inline-block text-white mb-1 font-medium">
                Your Message
              </label>
              <textarea
                className="textarea textarea-bordered flex-grow w-full   transition duration-200 bg-gray-600 text-white rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline mb-6"
                placeholder="Your Message"
              ></textarea>
            </div>
            <input
              type="submit"
              value="Submit"
              className="btn bg-secondary hover:bg-secondary text-black w-full border-2  border-green-600 rounded-md"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
