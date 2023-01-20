import { createBrowserRouter } from "react-router-dom";
<<<<<<< HEAD

import Dashboardlayout from "../../Layout/Dashboardlayout.js/Dashboardlayout";

import SignIn from "../../Authentications/SignIn/SignIn";
import SignUp from "../../Authentications/SignUp/SignUp";

=======
import Dashboardlayout from "../../Layout/Dashboardlayout.js/Dashboardlayout";
import SignIn from "../../Authentications/SignIn/SignIn";
import SignUp from "../../Authentications/SignUp/SignUp";
>>>>>>> 28dc4898bdc67c265bb1db6ac7757aca8be03547
import KeepTrack from "../../Layout/KeepTrack/KeepTrack";
import Main from "../../Layout/Main/Main";
import Event from "../../Pages/Dashboard/Event/Event";
import Report from "../../Pages/Dashboard/Report/Report";
import SettingAndPrivacy from "../../Pages/Dashboard/SettingAndPrivacy/SettingAndPrivacy";
import Support from "../../Pages/Dashboard/Support/Support";
import UserInfo from "../../Pages/Dashboard/UserInfo/UserInfo";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Community from "../../Pages/OtherPages/Community/Community";
import Foods from "../../Pages/OtherPages/Foods/Foods";
import Goals from "../../Pages/OtherPages/Goals/Goals";
import Leaderboard from "../../Pages/OtherPages/Leaderboard/Leaderboard";
import Tutorials from "../../Pages/OtherPages/Tutorials/Tutorials";
<<<<<<< HEAD

import UserDetails from "../../Authentications/UserInfo/UserDetails";

import ServiceDetails from "../../Pages/Home/Services/ServiceDetails";
=======
import UserDetails from "../../Authentications/UserDetails/UserDetails";
import ServiceDetails from "../../Pages/Home/Services/ServiceDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
 
>>>>>>> 28dc4898bdc67c265bb1db6ac7757aca8be03547

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/serviceDetails/:id",
        element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
      },
      {
        path: "/Leaderboard",
        element: <Leaderboard></Leaderboard>,
      },
      {
        path: "/Goals",
        element: <Goals></Goals>,
      },
      {
        path: "/Community",
        element: <Community></Community>,
      },
      {
        path: "/Tutorials",
        element: <Tutorials></Tutorials>,
      },
      
      {
<<<<<<< HEAD
=======
 
 
>>>>>>> 28dc4898bdc67c265bb1db6ac7757aca8be03547
        path: "/Dashboard",
        element: <PrivateRoute><Dashboardlayout></Dashboardlayout></PrivateRoute>,
        children: [
          { path: "/Dashboard/userInfo", element: <UserInfo></UserInfo> },

          {
            path: "/Dashboard/setting",
            element: <SettingAndPrivacy></SettingAndPrivacy>,
          },
          { path: "/Dashboard/report", element: <Report></Report> },
          { path: "/Dashboard/event", element: <Event></Event> },
          { path: "/Dashboard/support", element: <Support></Support> },
        ],
      },
      {
        path: "/SignIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/SignUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
  
  {
 
    path: "/UserDetails",
    element: <PrivateRoute><UserDetails></UserDetails></PrivateRoute>,
  },
  {
    path: "/KeepTrack",
    element: <KeepTrack></KeepTrack>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/KeepTrack/Foods",
        element: <Foods></Foods>,
      },
    ],
  },
]);
