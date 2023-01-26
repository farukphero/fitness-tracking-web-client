import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FaWalking } from "react-icons/fa";
import { IoFootstepsSharp } from "react-icons/io5";
import { RiDeleteBin5Fill, RiPinDistanceFill } from "react-icons/ri";
import { GiDuration } from "react-icons/gi";
import { AiFillFire } from "react-icons/ai";
import { VscReactions } from "react-icons/vsc";
import { MdOutlinePendingActions } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";
import axios from "axios";
import SingleActivity from "../SingleActivity/SingleActivity";
import { AuthContext } from "../../../../../../Contexts/AuthProvider/AuthProvider";

const ActivitiesHistory = () => {
  const { user } = useContext(AuthContext);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/activities?activist=${user?.email}`)
      .then((res) => setActivities(res?.data));
  }, [user?.email]);

  return (
    <div className="lg:mx-8 border p-4 rounded-md border-gray-600">
      <h2 className="font-bold text-3xl">Activity History</h2>
      <p className="my-3">You have not logged any activities</p>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <div className="flex gap-x-1 items-center">
                  <AiOutlineCalendar className="text-2xl text-primary" />
                  <span>Date</span>
                </div>
              </th>
              <th>
                <div className="flex gap-x-1 items-center">
                  <FaWalking className="text-2xl text-primary" />
                  <span>Activity</span>
                </div>
              </th>
              <th>
                <div className="flex gap-x-1 items-center">
                  <IoFootstepsSharp className="text-2xl text-primary" />
                  <span>Steps</span>
                </div>
              </th>
              <th>
                <div className="flex gap-x-1 items-center">
                  <RiPinDistanceFill className="text-2xl text-primary" />
                  <span>Distance</span>
                </div>
              </th>
              <th>
                <div className="flex gap-x-1 items-center">
                  <GiDuration className="text-2xl text-primary" />
                  <span>Duration</span>
                </div>
              </th>
              <th>
                <div className="flex gap-x-1 items-center">
                  <AiFillFire className="text-2xl text-primary" />
                  <span>Calourie</span>
                </div>
              </th>
              <th>
                <div className="flex gap-x-1 items-center">
                  <MdOutlinePendingActions className="text-2xl text-primary" />
                  <span>Details</span>
                </div>
              </th>
              <th>
                <div className="flex gap-x-1 items-center">
                  <VscReactions className="text-2xl text-primary" />
                  <span>Action</span>
                </div>
              </th>
            </tr>
          </thead>
          {activities.map((activity) => (
            <SingleActivity activity={activity} key={activity._id} />
          ))}
        </table>
      </div>
    </div>
  );
};

export default ActivitiesHistory;
