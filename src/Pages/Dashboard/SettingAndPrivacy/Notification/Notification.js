import React from "react";

const Notification = () => {
  return (
    <div className="mt-16 mb-32  ">
      <div className="flex flex-col ml-16 lg:ml-72  ">
        <div className="mb-6">
          <h1 className="text-4xl font-bold"> Notification Setting</h1>
          <p>Get email to finds out .What going on when you are not online.</p>
        </div>
        <div>
          <div>
            <div className="flex flex-col">
              <div className="form-control w-52">
                <label className="cursor-pointer label">
                  <span className="label-text text-black font-bold ">
                    News and update
                  </span>

                  <input
                    type="checkbox"
                    className="toggle toggle-primary"
                    checked
                  />
                </label>
              </div>
              <h1 className="mb-4">News about activity and features update</h1>
              <div className="form-control w-52">
                <label className="cursor-pointer label">
                  <span className="label-text text-black font-bold">
                    Tips and Tutorials
                  </span>
                  <input
                    type="checkbox"
                    className="toggle toggle-secondary"
                    checked
                  />
                </label>
              </div>
              <h1 className="mb-4">
                Tips and Getting and more out of Untitled
              </h1>
              <div className="form-control w-52">
                <label className="cursor-pointer label">
                  <span className="label-text text-black font-bold ">
                    Use recharge
                  </span>
                  <input
                    type="checkbox"
                    className="toggle toggle-secondary"
                    checked
                  />
                </label>
              </div>
              <h1 className="mb-4">
                Get involved in our beta testing program or participate
              </h1>
              <div className="form-control w-52">
                <label className="cursor-pointer label">
                  <span className="label-text text-black font-bold ">
                    Comments
                  </span>
                  <input
                    type="checkbox"
                    className="toggle toggle-secondary"
                    checked
                  />
                </label>
              </div>
              <h1 className="mb-4">
                Comments on your post and replies to comment
              </h1>
              <div className="form-control w-52">
                <label className="cursor-pointer label">
                  <span className="label-text text-black font-bold ">
                    Reminder
                  </span>
                  <input
                    type="checkbox"
                    className="toggle toggle-secondary"
                    checked
                  />
                </label>
              </div>
              <h1 className="mb-4">
                These are notification to remind you of updates you might have a
                missed
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
