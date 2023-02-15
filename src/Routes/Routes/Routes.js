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
import WaterTracking from "../../Pages/Home/Calculator/WaterTracking/WaterTracking";
import CommunityFeed from "../../Pages/OtherPages/Communityfeed/CommunityFeed";
import Tutorials from "../../Pages/OtherPages/Tutorials/Tutorials";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";

import Sleep from "../../Pages/OtherPages/Logs/Sleep/Sleep/Sleep";



import BloodTracking from "../../Pages/Home/Calculator/BloodTracking/BloodTracking";
import Protein from "../../Pages/Home/Calculator/Protein/Protein";
import BlogDetails from "../../Pages/Home/Blog/BlogDetails";
import Friends from "../../Pages/OtherPages/CommunityFriend/Friends/Friends";
import Friend from "../../Pages/OtherPages/CommunityFriend/Friends/Friend";
import AllActivities from "../../Pages/OtherPages/AllActivities/AllActivities/AllActivities";
import MeetInstructors from "../../Layout/MeetInstructors/MeetInstructors";
import AllInstructors from "../../Pages/AllInstructors/AllInstructors";
import VideoCalling from "../../Pages/VideoCalling/VideoCalling/VideoCalling";
import CallingVideo from "../../Layout/CallingVideo/CallingVideo";
import CallingRoom from "../../Pages/VideoCalling/CallingRoom/CallingRoom";

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
        element: <Tutorials></Tutorials>,
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
        path: "blood",
        element: <BloodTracking></BloodTracking>,
      },
      {
        path: "protein",
        element: <Protein></Protein>,
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
      // {
      //   path: "/Community",
      //   element: <CommunityLaout></CommunityLaout>,
      //   children: [
      //     {
      //       path: "/Community/friends",
      //       element: <Friends></Friends>,
      //     },
      //     {
      //       path: "/Community/AllUsers",
      //       element: <CommunityFriend></CommunityFriend>,
      //     },
      //     {
      //       path: "/Community/group",
      //       element: <CommunityGroup></CommunityGroup>,
      //     },
      //   ],
      // },
      {
        path: "/Profile",
        element: <DashboardLayout></DashboardLayout>,
        children: [
          { path: "/Profile/userInfo", element: <UserInfo></UserInfo> },
          {
            path: "/Profile/Setting",
            element: <Setting></Setting>,
          },
          {
            path: "/Profile/AllUsers",
            element: (
              <AdminRoute>
                <AllUsers></AllUsers>
              </AdminRoute>
            ),
          },
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

      {
        path: "/SignIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/SignUp",
        element: <SignUp></SignUp>,
      },
      {
              path: "/Community/AllUsers",
              element: <CommunityFriend></CommunityFriend>,
            },
      // {
      //   path: "/Friends",
      //   element: <Friends></Friends>,
      // },
      {
        path: "/Community/friends",
        element: <Friends></Friends>,
      },
      {
        path: `/logs/allactivities`,
        element: <AllActivities />,
      },
      {
        path: "/Friends/Friend/:id",
        element: <Friend></Friend>,
        loader: ({params}) => fetch (`http://localhost:5000/friends/${params.id}`)
      },
      {
        path: "/blog/:id",
        element: <BlogDetails></BlogDetails>
      }
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
        element: <Sleep />,
      },
    ],
  },
  {
    path: `/checkup/`,
    element: <MeetInstructors />,
    children: [
      {
        path: `/checkup/`,
        element: <AllInstructors />,
      },
    ],
  },
  {
    path: `/video`,
    element: <CallingVideo />,
    children: [
      {
        path: `/video`,
        element: <VideoCalling />,
      },
      {
        path: `/video/room/:roomid`,
        element: <CallingRoom />,
      },
    ],
  },
]);
