import React, { useContext } from "react";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";

const AuthProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex justify-center w-1/2 mx-auto text-black mt-16 mb-16">
      <div className="shadow-md shadow-green-600 p-8">
        <div className="flex justify-between">
          <div className="mr-32">
            <h1 className="text-3xl font-bold text-black mb-4">My profile</h1>
            <h1 className="mb-2 text-black font-bold">{user?.displayName}</h1>
          </div>

          <div>
            <MdOutlineSwitchAccount className="text-5xl text-green-600"></MdOutlineSwitchAccount>
          </div>
        </div>
        <hr className="  divide-gray-600"></hr>
        <div className="mt-4">
          <h1 className="text-2xl">Email</h1>
          <h1>{user?.email}</h1>

          <h1 className="mt-4 text-2xl mb-2">UserPhoto</h1>
          <div className="tooltip " data-tip={user?.email}>
            <div className="avatar mb-4">
              <div className="w-12 rounded-full">
                <img src={user?.photoURL} alt="" />
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
      </div>
    </div>
  );
};

export default AuthProfile;
