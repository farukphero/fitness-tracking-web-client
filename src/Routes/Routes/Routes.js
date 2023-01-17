import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/Dashboardlayout.js/Dashboardlayout";
import Dashboardlayout from "../../Layout/Dashboardlayout.js/Dashboardlayout";
import SignIn from "../../Authentications/SignIn/SignIn";
import SignUp from "../../Authentications/SignUp/SignUp";
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
    path: "/Dashboard",
    element: <DashboardLayout></DashboardLayout>,
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
