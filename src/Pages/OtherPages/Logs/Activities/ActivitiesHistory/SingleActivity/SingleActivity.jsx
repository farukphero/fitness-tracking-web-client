import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const SingleActivity = ({ activity, setDeleteActivity }) => {
  return (
    <>
      <tbody>
        <tr>
          <th className="font-normal">{activity?.activity_date?.slice(0, 10)}</th>
          <td>{activity?.activity_name}</td>
          <td>{activity?.steps ? activity?.steps : `N/A`}</td>
          <td>{activity?.distance}</td>
          <td>{activity?.duration ? activity?.duration : `N/A`}</td>
          <td>
            {activity?.calourie_burned ? activity?.calourie_burned : `N/A`}
          </td>
          <td>
            <Link to="/ActivitiesHistoryDetails">
              <button className="btn btn-xs">details</button>
            </Link>
          </td>
          <td>
              <label
                onClick={() => setDeleteActivity(activity)}
                htmlFor="ConfirmationModal"
                className="btn btn-xs btn-error"
              >
                delete
              </label>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default SingleActivity;
