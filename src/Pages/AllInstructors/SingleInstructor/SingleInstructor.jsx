import React from "react";

const SingleInstructor = () => {
  return (
    <div className="card flex flex-col md:flex-row w-11/12 my-6 mx-auto bg-base-100 justify-center">
      <div className="basis-1/4">
        <figure className="p-4">
          <img
            src="https://i.ibb.co/5FQQfXp/2023-01-15-01-22.png"
            alt="Shoes"
            className="rounded-xl w-32 h-32"
          />
        </figure>
      </div>
      <div className="flex flex-col gap-y-2 basis-1/4">
        <div>
          <h4 className="font-bold text-xl">dr. euhan sarkar</h4>
          <p>MBBS</p>
        </div>
        <div>
          <p>specialties</p>
          <h6>General Physician, General Physician, General Physician,</h6>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 basis-1/4">
        <div>
          <h4 className="font-bold text-xl">dr. euhan sarkar</h4>
          <p>MBBS</p>
        </div>
        <div>
          <p>specialties</p>
          <h6>General Physician, General Physician, General Physician,</h6>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 basis-1/4">
        <div>
          <h4 className="font-bold text-xl">dr. euhan sarkar</h4>
          <p>MBBS</p>
        </div>
        <div>
          <p>specialties</p>
          <h6>General Physician, General Physician, General Physician,</h6>
        </div>
      </div>
    </div>
  );
};

export default SingleInstructor;
