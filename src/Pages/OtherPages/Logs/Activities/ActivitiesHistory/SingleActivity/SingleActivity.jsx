import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const SingleActivity = ({activity}) => {
  return (
    <>
      <tbody>
        <tr>
          <th className="font-normal">Jan 20, 10:00AM</th>
          <td>{activity?.activity_name}</td>
          <td>{activity?.steps ? activity?.steps : `N/A`}</td>
          <td>{activity?.distance}</td>
          <td>{activity?.duration ? activity?.duration : `N/A`}</td>
          <td>{activity?.calourie_burned ? activity?.calourie_burned : `N/A`}</td>
          <td>
            {" "}
            <Link>
              <button className="btn btn-xs">details</button>
            </Link>{" "}
          </td>
          <td>
            <RiDeleteBin5Fill className="text-2xl text-error" />{" "}
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default SingleActivity;
