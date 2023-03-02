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
import Spinner from "../../../../Components/Spinner/Spinner";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";
import ConfirmationModal from "../../../Shared/ConfirmationModal/ConfirmationModal";
import SingleActivity from "../../Logs/Activities/ActivitiesHistory/SingleActivity/SingleActivity";

const AllActivities = () => {
  const { user } = useContext(AuthContext);
  const [deleteActivity, setDeleteActivity] = useState(null);

  const {
    data: activities,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [`activities`, user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://fitness-tracking-web-server.vercel.app/allActivity?activist=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    <Spinner />;
  }

  const handleDeleteActivity = (activity) => {
    fetch(`https://fitness-tracking-web-server.vercel.app/activities/${activity._id}`, {
      method: `DELETE`,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`you have successfully deleted an activity`);
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
    <div className="w-11/12 my-6 mx-auto">
      <h2 className="my-5 text-3xl font-bold capitalize">
        all previous activities
      </h2>
      <div>
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

export default AllActivities;
