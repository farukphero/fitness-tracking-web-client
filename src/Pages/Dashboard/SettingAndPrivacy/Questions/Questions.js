import React, { useEffect, useState } from "react";
import GotQuetions from "./GotQuetions";

const Questions = () => {
  const [qusetions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("https://fitness-tracking-web-server.vercel.app/question")
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);
  console.log(qusetions);
  return (
    <section className="mt-20">
      <div >
        <div className="m-5 mt-20">
          <p className="text-4xl font-semibold  text-center mb-9">
            User Questions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
            {qusetions.map((quetion) => (
              <GotQuetions quetion={quetion} key={quetion._id}></GotQuetions>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
