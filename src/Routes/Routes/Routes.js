import { createBrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import Dashboardlayout from "../../Layout/Dashboardlayout.js/Dashboardlayout";
import SignIn from "../../Authentications/SignIn/SignIn";
import SignUp from "../../Authentications/SignUp/SignUp";
=======
 

import Dashboardlayout from "../../Layout/Dashboardlayout.js/Dashboardlayout";

import SignIn from "../../Authentications/SignIn/SignIn";
import SignUp from "../../Authentications/SignUp/SignUp";

 
 

import Dashboardlayout from "../../Layout/Dashboardlayout.js/Dashboardlayout";


import SignIn from "../../Authentications/SignIn/SignIn";
import SignUp from "../../Authentications/SignUp/SignUp";
 

import Dashboardlayout from "../../Layout/Dashboardlayout.js/Dashboardlayout";
import SignIn from "../../Authentications/SignIn/SignIn";
import SignUp from "../../Authentications/SignUp/SignUp";
 
 
>>>>>>> b91644cf4a8615feb6fd724d987bafb7b83ade99
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

import UserDetails from "../../Authentications/UserInfo/UserDetails";

import ServiceDetails from "../../Pages/Home/Services/ServiceDetails";
import LogsLayout from "../../Layout/LogsLayout/LogsLayout";
import Activities from "../../Pages/OtherPages/Logs/Activities/Activities/Activities";
import Food from "../../Pages/OtherPages/Logs/Food/Food/Food";
import Water from "../../Pages/OtherPages/Logs/Water/Water";
import Weight from "../../Pages/OtherPages/Logs/Weight/Weight";
import Sleep from "../../Pages/OtherPages/Logs/Sleep/Sleep";

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
        element: <ServiceDetails></ServiceDetails>,
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
 
        path: "/UserDetails",
        element: <UserDetails></UserDetails>,
      },
      {
<<<<<<< HEAD
=======
 
 
>>>>>>> b91644cf4a8615feb6fd724d987bafb7b83ade99
        path: "/Dashboard",
        element: <Dashboardlayout></Dashboardlayout>,
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
  {
    path: `/logs`,
    element: <LogsLayout></LogsLayout>,
    children: [
      {
        path: `/logs/activities`,
        element: <Activities></Activities>,
      },
      {
        path: `/logs/food`,
        element: <Food></Food>,
      },
      {
        path: `/logs/water`,
        element: <Water></Water>,
      },
      {
        path: `/logs/weight`,
        element: <Weight></Weight>,
      },
      {
        path: `/logs/sleep`,
        element: <Sleep></Sleep>,
      },
    ],
  },
]);
