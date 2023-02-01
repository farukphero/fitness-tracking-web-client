import { createBrowserRouter } from "react-router-dom";
import SignIn from "../../Authentications/SignIn/SignIn";
import SignUp from "../../Authentications/SignUp/SignUp";
import KeepTrack from "../../Layout/KeepTrack/KeepTrack";
import Main from "../../Layout/Main/Main";
import Event from "../../Pages/Dashboard/Event/Event";
import Report from "../../Pages/Dashboard/Report/Report";

import UserDetails from "../../Authentications/UserDetails/UserDetails";
import LogsLayout from "../../Layout/LogsLayout/LogsLayout/LogsLayout";
import Support from "../../Pages/Dashboard/Support/Support";
import UserInfo from "../../Pages/Dashboard/UserInfo/UserInfo";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import ServiceDetails from "../../Pages/Home/Services/ServiceDetails";
import Community from "../../Pages/OtherPages/Community/Community";
import Foods from "../../Pages/OtherPages/Foods/Foods";
import Leaderboard from "../../Pages/OtherPages/Leaderboard/Leaderboard";
import Activities from "../../Pages/OtherPages/Logs/Activities/Activities/Activities";
import Food from "../../Pages/OtherPages/Logs/Food/Food/Food";
import Sleep from "../../Pages/OtherPages/Logs/Sleep/Sleep";
import Water from "../../Pages/OtherPages/Logs/Water/Water";

import Setting from "../../Pages/Dashboard/SettingAndPrivacy/Setting/Setting";
import Plan from "../../Pages/Dashboard/SettingAndPrivacy/Plan/Plan";
import Team from "../../Pages/Dashboard/SettingAndPrivacy/Team/Team";
import Notification from "../../Pages/Dashboard/SettingAndPrivacy/Notification/Notification";
import Intergration from "../../Pages/Dashboard/SettingAndPrivacy/Intergration/Intergration";
import AuthProfile from "../../Pages/Dashboard/SettingAndPrivacy/AuthProfile/AuthProfile";

import AddTutorials from "../../Pages/OtherPages/Tutorials/AddTutorials/AddTutorials";
import Tutorial from "../../Pages/OtherPages/Tutorials/Tutorial/Tutorial";
import CommunityLaout from "../../Layout/CommunityLaout/CommunityLaout";
import WeightCalculator from "../../Pages/Home/WeightCalculator/WeightCalculator";
import CommunityFriend from "../../Pages/OtherPages/CommunityFriend/CommunityFriend";
import CommunityGroup from "../../Pages/OtherPages/CommunityGroup/CommunityGroup";
import CommunityPost from "../../Pages/OtherPages/CommunityPost/CommunityPost";
import CommunityPosted from "../../Pages/OtherPages/CommunityPosted/CommunityPosted";
import ActivitiesHistoryDetails from "../../Pages/OtherPages/Logs/Activities/Activities/ActivitiesHistoryDetails/ActivitiesHistoryDetails";
import AdminRoute from "../AdminRoute/AdminRoute";
import DashboardLayout from "../../Layout/Dashboardlayout.js/Dashboardlayout";
 
import Bmi from "../../Pages/Home/Calculator/Bmi/Bmi";
import Bmr from "../../Pages/Home/Calculator/Bmr/Bmr";
import Weight from "../../Pages/OtherPages/Logs/Weight/Weight";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
 
import WeightCalculator from "../../Pages/Home/WeightCalculator/WeightCalculator";
import Bmi from "../../Pages/Home/Calculator/Bmi/Bmi";
import Bmr from "../../Pages/Home/Calculator/Bmr/Bmr";
import WaterTracking from "../../Pages/Home/Calculator/WaterTracking/WaterTracking";
 

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
        path: "/Tutorials",
        element: <Tutorial></Tutorial>,
      },

      {
        path: "/WeightCalculator",
        element: <WeightCalculator></WeightCalculator>,
      },
      {
        path: "/bmi",
        element: <Bmi></Bmi>,
      },
      {
        path: "/bmr",
        element: <Bmr></Bmr>,
      },
 
 
      {
        path: "water",
        element: <WaterTracking></WaterTracking>,
      },
 

      {
        path: "/AddTutorials",
        element: (
          <AdminRoute>
            <AddTutorials></AddTutorials>
          </AdminRoute>
        ),
      },
      {
        path: "/ActivitiesHistoryDetails",
        element: <ActivitiesHistoryDetails></ActivitiesHistoryDetails>,
      },
      {
        path: "/Community",
        element: <CommunityLaout></CommunityLaout>,
        children: [
          {
            path: "/Community/community",
            element: <Community></Community>,
          },
          // {
          //   path: "/Community",
          //   element: <CommunityFeed></CommunityFeed>
          // },
          {
            path: "/Community/post",
            element: <CommunityPost></CommunityPost>,
          },
          {
            path: "/Community",
            element: <CommunityPosted></CommunityPosted>,
          },
          {
            path: "/Community/friend",
            element: <CommunityFriend></CommunityFriend>,
          },
          {
            path: "/Community/group",
            element: <CommunityGroup></CommunityGroup>,
          },
        ],
      },
      {
        path: "/Profile",
        element: <DashboardLayout></DashboardLayout>,
        children: [
          { path: "/Profile/userInfo", element: <UserInfo></UserInfo> },
          {
            path: "/Profile/Setting",
            element: <Setting></Setting>,
          },
          // {
          //   path: "/Dashboard/Setting/team",
          //   element: <Team></Team>,
          // },
          // {
          //   path: "/Dashboard/Setting/notification",
          //   element: <Notification></Notification>,
          // },
          // {
          //     path: "/Dashboard/Setting/integration",
          //     element: <Intergration></Intergration>,
          //   },
          //   {
          //     path: "/Dashboard/authprofile",
          //     element: <AuthProfile></AuthProfile>,
          //   },

          // ]
          // },
          //   {
          //     path: "/Dashboard/Setting/notification",
          //     element: <Notification></Notification>,
          //   },
          // {
          //     path: "/Dashboard/Setting/integration",
          //     element: <Intergration></Intergration>,
          //   },
          //   {
          //     path: "/Dashboard/authprofile",
          //     element: <AuthProfile></AuthProfile>,
          //   },
        ],
      },
      {
        path: "/singleCategory/:id",
        loader: ({ params }) =>
          fetch(
            `https://fitness-tracking-web-server.vercel.app/singleCategory/${params.id}`
          ),
        element: <Tutorial></Tutorial>,
      },

      // { path: "/Dashboard/userInfo", element: <UserInfo></UserInfo> },

      // {
      //   path: "/Dashboard/setting",
      //   element: <SettingAndPrivacy></SettingAndPrivacy>,
      // },
      // {
      //   path: "/Dashboard/Setting",
      //   element: <Setting></Setting>,
      // },

      // { path: "/Dashboard/report", element: <Report></Report> },
      // { path: "/Dashboard/event", element: <Event></Event> },
      // { path: "/Dashboard/support", element: <Support></Support> },

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
    element: (
      <PrivateRoute>
        <UserDetails></UserDetails>
      </PrivateRoute>
    ),
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
    path: "/Logs",
    element: <LogsLayout></LogsLayout>,
    children: [
      {
        path: "/Logs/Activities",
        element: <Activities></Activities>,
      },
      {
        path: "/Logs/Food",
        element: <Food></Food>,
      },
      {
        path: "/Logs/Water",
        element: <Water></Water>,
      },
      {
        path: "/Logs/Weight",
        element: <Weight />,
      },
      {
        path: "/Logs/Sleep",
        element: <Sleep></Sleep>,
      },
    ],
  },
]);
