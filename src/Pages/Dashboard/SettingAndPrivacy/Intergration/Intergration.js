import React from "react";
import { SiNotion } from "react-icons/si";
import { FaGoogleDrive } from "react-icons/fa";
import { SiLoom } from "react-icons/si";

const Intergration = () => {
  return (
    <div className="flex justify-center mt-16 mb-32 text-white w-1/2 mx-auto">
      <div>
        <h1 className="text-4xl font-bold ">Add Integrations</h1>
        <h1 className="text-2xl">
          Supercharge your workFlow and connect the tools you use everyday.
        </h1>
        <div className="mt-8  ">
          <div className="mt-6 mb-4 ">
            <a href="https://www.notion.so/desktop">
              {" "}
              <SiNotion className="text-6xl text-white"></SiNotion>
              <h1 className="mt-2 text-2xl">
                Note your own activity and improve it easily.
              </h1>
            </a>
          </div>
          <hr></hr>
          <div className="mt-4 mb-4">
            <a href="https://www.google.com/drive/">
              <FaGoogleDrive className="text-6xl text-white"></FaGoogleDrive>
              <h1 className="mt-2 text-2xl">
                Add powerful search capabilities that offer speed <br />{" "}
                reliability and collaboration
              </h1>
            </a>
          </div>
          <hr></hr>
          <div className="mt-4 mb-4">
            <a href="https://www.loom.com/">
              <SiLoom className="text-6xl text-white"></SiLoom>
              <h1 className="mt-2 text-2xl">
                Boost your productivity with async video <br /> collaboration
                and recording.
              </h1>
            </a>
          </div>
          <hr></hr>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Intergration;
