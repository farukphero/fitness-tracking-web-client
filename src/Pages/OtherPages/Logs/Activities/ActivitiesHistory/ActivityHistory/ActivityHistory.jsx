import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AiFillFire, AiOutlineCalendar } from "react-icons/ai";
import { FaWalking } from "react-icons/fa";
import { GiDuration } from "react-icons/gi";
import { IoFootstepsSharp } from "react-icons/io5";
import { MdOutlinePendingActions } from "react-icons/md";
import { RiPinDistanceFill } from "react-icons/ri";
import { VscReactions } from "react-icons/vsc";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Spinner from "../../../../../../Components/Spinner/Spinner";
import { AuthContext } from "../../../../../../Contexts/AuthProvider/AuthProvider";
import ConfirmationModal from "../../../../../Shared/ConfirmationModal/ConfirmationModal";
import SingleActivity from "../SingleActivity/SingleActivity";

const ActivitiesHistory = ({ activities, refetch }) => {
  const [deleteActivity, setDeleteActivity] = useState(null);

  const handleDeleteActivity = (activity) => {
    fetch(`https://fitness-tracking-web-server.vercel.app/activities/${activity._id}`, {
      method: `DELETE`,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          console.log(data);
          toast.success(`you have successfully deleted an activity`);
          refetch();
        }
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    refetch();
  };

  const closeModal = () => {
    setDeleteActivity(null);
  };

  return (
    <div className="mt-2 border p-4 rounded-md border-gray-600">
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

              {/* <th>
                <div className="flex gap-x-1 items-center">
                  <MdOutlinePendingActions className="text-2xl text-primary" />
                  <span>Details</span>
                </div>
              </th> */}
              <th>
                <div className="flex gap-x-1 items-center">
                  <VscReactions className="text-2xl text-primary" />
                  <span>Action</span>
                </div>
              </th>
            </tr>
          </thead>
          {activities?.map((activity) => (
            <SingleActivity
              activity={activity}
              key={activity._id}
              setDeleteActivity={setDeleteActivity}
            />
          ))}
        </table>
        <div className="my-4">
          <Link to={`/logs/allactivities`}>
            <button className="btn btn-log  bg-secondary text-black w-full border-none   rounded-md">
              see more
            </button>
          </Link>
        </div>
      </div>
      {deleteActivity && (
        <ConfirmationModal
          successAction={handleDeleteActivity}
          modalData={deleteActivity}
          closeModal={closeModal}
          successButtonName={`delete`}
          message={`if you delete we cannot recover the data`}
          title={`are you sure you want to delete?`}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default ActivitiesHistory;
