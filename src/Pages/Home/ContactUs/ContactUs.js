import React from "react";

const ContactUs = () => {
  return (
    <section className="mt-12">
      <h2 className="text-4xl text-white font-bold text-center py-10">Feel Free To Contact Us</h2>
      <div className="overflow-hidden bg-gray-700">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between xl:flex-row">
          <div className="w-full hidden md:flex w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
            
            <p className="mb-4 text-base hidden lg:flex text-white md:text-xl">
            Great genius takes shape by contact with another great genius, but, less by assimilation than by friction.

            </p>
            
          </div>
          <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
            <div className="relative">
             
              <div className="relative bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                 Share your Opinion
                </h3>
                <form>
                  <div className="mb-1">
                    <label
                      htmlFor="name"
                      className="inline-block mb-1 font-medium"
                    >
                      Name
                    </label>
                    <input
                      placeholder="Your Full Name"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="name"
                      name="name"
                    />
                  </div>
                  <div className="mb-1">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium"
                    >
                      E-mail
                    </label>
                    <input
                      placeholder="*******@gmail.com"
                      required
                      type="email"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className="mb-1">
                    <label
                      className="inline-block mb-1 font-medium"
                    >
                      Your Message
                    </label>
                    <textarea className="textarea textarea-bordered flex-grow w-full   transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline" placeholder="Your Message"></textarea>
                  </div>
                 
                  <input type="submit" value="Submit" className="btn w-full" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default ContactUs;
