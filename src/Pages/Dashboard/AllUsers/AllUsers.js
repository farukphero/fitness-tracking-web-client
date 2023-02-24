import React from "react";
import { toast } from "react-hot-toast";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useQuery } from "react-query";
import useTitle from "../../../Hooks/useTitle/useTitle";
import "./AllUsers.css";

const AllUsers = () => {
  useTitle("Profile/AllUsers")
  const {
    isLoading,
    error,
    data: allUsers = [],
    refetch,
  } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://fitness-tracking-web-server.vercel.app/users").then(
        (res) => res.json()
      ),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const handleAdmin = (id) => {
    fetch(`https://fitness-tracking-web-server.vercel.app/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Admin make Successfully");
          refetch();
        }
      });
  };

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      fetch(`https://fitness-tracking-web-server.vercel.app/users/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Successfully Delete");
            refetch();
          }
        });
    }
  };
  return (
    <div className="h-[730px] w-11/12 mx-auto pb-8 bg-gray-800 ">
      <div className="overflow-x-auto all-bg">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th className=" th-bg  text-white text-lg">SL</th>
              <th className="th-bg text-white text-lg">Users</th>
              <th className="th-bg text-white text-lg">Name</th>
              <th className="th-bg text-white text-lg">Email</th>
              <th className="th-bg text-white text-lg">Admin </th>
              <th className="th-bg text-white text-lg">
                {" "}
                <RiDeleteBin6Fill className="h-6 w-6"></RiDeleteBin6Fill> 
              </th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((allUser, idx) => (
              <tr key={allUser._id}>
                <th className=" all-bg  text-black">{idx + 1}</th>
                <th className="   all-bg  text-black">
                  {" "}
                  <img
                    className="h-12 w-12 rounded "
                    src={allUser?.picture}
                    alt=""
                  />{" "}
                </th>

                <td className="  all-bg  text-black">
                  {allUser.firstName} {allUser.lastName}{" "}
                </td>
                <td className="all-bg  text-black">{allUser.email}</td>
                <td className="  all-bg  text-black">
                  {allUser?.role !== "admin" && (
                    <button
                      onClick={() => handleAdmin(allUser._id)}
                      className="btn btn-outline tb-button btn-sm text-white"
                    >
                      Admin
                    </button>
                  )}
                </td>
                <td className="all-bg text-white text-lg">
                  <button
                    onClick={() => handleDelete(allUser._id)}
                  >
                    <RiDeleteBin6Fill className="h-6 w-6 tb-button"></RiDeleteBin6Fill>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
