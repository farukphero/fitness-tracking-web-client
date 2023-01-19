import { createBrowserRouter } from "react-router-dom";
 

import Dashboardlayout from "../../Layout/Dashboardlayout.js/Dashboardlayout";

import SignIn from "../../Authentications/SignIn/SignIn";
import SignUp from "../../Authentications/SignUp/SignUp";

 
 

import Dashboardlayout from "../../Layout/Dashboardlayout.js/Dashboardlayout";


import SignIn from "../../Authentications/SignIn/SignIn";
import SignUp from "../../Authentications/SignUp/SignUp";
 

import Dashboardlayout from "../../Layout/Dashboardlayout.js/Dashboardlayout";
import SignIn from "../../Authentications/SignIn/SignIn";
import SignUp from "../../Authentications/SignUp/SignUp";
 
 
import KeepTrack from "../../Layout/KeepTrack/KeepTrack";
import LogsLayout from "../../Layout/LogsLayout/LogsLayout";
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
import Sleep from "../../Pages/OtherPages/Logs/Sleep/Sleep";
import Water from "../../Pages/OtherPages/Logs/Water/Water";
import Weight from "../../Pages/OtherPages/Logs/Weight/Weight";
import Tutorials from "../../Pages/OtherPages/Tutorials/Tutorials";
<<<<<<< HEAD
import Food from "../../Pages/OtherPages/Logs/Food/Food/Food";
import Activities from "../../Pages/OtherPages/Logs/Activities/Activities/Activities";
=======
 
import UserDetails from "../../Authentications/UserInfo/UserDetails";
 
import ServiceDetails from "../../Pages/Home/Services/ServiceDetails";
 
>>>>>>> main

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
<<<<<<< HEAD
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
=======
      {
 
        path: "/UserDetails",
        element: <UserDetails></UserDetails>,
      },
      {
 
 
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
 
      
 
 
>>>>>>> main
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
]);
