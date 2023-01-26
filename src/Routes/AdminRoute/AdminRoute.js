import React, { useContext }  from "react";
import { ThreeCircles } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import useAdmin from "../../Hooks/useAdmin/useAdmin";
  
 

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <div>
        <div className="my-20 flex justify-center">
          
            <ThreeCircles
              height="100"
              width="100"
              color="#4fa94d"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="three-circles-rotating"
              outerCircleColor=""
              innerCircleColor=""
              middleCircleColor=""
            />
          
        </div>
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/SignIn" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
