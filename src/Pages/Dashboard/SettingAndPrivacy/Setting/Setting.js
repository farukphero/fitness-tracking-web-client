import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../../../Hooks/useTitle/useTitle";

const Setting = () => {
  useTitle("Dashboard/Setting");
  return (
    <div>
      <div className="flex flex-col mx-auto -ml-32 -mt-16 mb-16  ">
        <Link
          className="border-2 px-6 py-2 text-center text-2xl font-bold border-green-600 btn-explore rounded-md mb-2"
          to="/dashboard/setting/plan"
        >
          Plan
        </Link>
        {/* <Link
          className="border-2 px-6 py-2 text-center text-2xl font-bold border-green-600 btn-explore rounded-md mb-2"
          to="/dashboard/setting/team"
        >
          Team
        </Link> */}
        <Link
          className="border-2 px-6 py-2 text-2xl text-center font-bold border-green-600 btn-explore rounded-md mb-2"
          to="/dashboard/setting/notification"
        >
          Notifications
        </Link>
        <Link
          className="border-2 px-6 py-2 text-2xl text-center font-bold border-green-600 btn-explore rounded-md mb-2"
          to="/dashboard/setting/integration"
        >
          Integrations
        </Link>
        <Link
          className="border-2 px-6 py-2 text-center text-2xl font-bold border-green-600 btn-explore rounded-md mb-2"
          to="/dashboard/setting/authprofile"
        >
          Profile
        </Link>
      </div>
    </div>
  );
};

export default Setting;
