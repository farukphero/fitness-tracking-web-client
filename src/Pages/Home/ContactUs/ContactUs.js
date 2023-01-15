import React from "react";
import "./Contact.css";

const ContactUs = () => {
  return (
    <section className="mt-12">
      <h2 className="text-3xl lg:text-4xl text-all-green font-semibold text-center pt-10">
        Get In Touch{" "}
      </h2>
      <p className="text-white text-center lg:w-1/3 mx-auto pt-2 mb-6">
        {" "}
        Great genius takes shape by contact with another great genius, but, less
        by assimilation than by friction.
      </p>
      <div className="overflow-hidden ">
        <div className="px-4   pb-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  ">
          <div className="w-full border-2 border-green-600 xl:px-8 xl:w-6/12 mx-auto">
            <div className="relative">
              <div className="relative  rounded shadow-2xl p-7 sm:p-10">
                <h3 className=" text-xl text-white text-start sm:mb-6 sm:text-2xl">
                  {" "}
                  Contact Form <hr />
                </h3>

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
                    className="btn btn-contact text-white "
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
