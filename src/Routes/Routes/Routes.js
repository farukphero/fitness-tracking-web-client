import { createBrowserRouter } from "react-router-dom";
import SignIn from "../../Authentications/SignIn/SignIn";
import KeepTrack from "../../Layout/KeepTrack/KeepTrack";
import Main from "../../Layout/Main/Main";

import UserDetails from "../../Authentications/UserDetails/UserDetails";
import LogsLayout from "../../Layout/LogsLayout/LogsLayout/LogsLayout";

import UserInfo from "../../Pages/Dashboard/UserInfo/UserInfo";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import ServiceDetails from "../../Pages/Home/Services/ServiceDetails";

 import GetUserDetails from "../../Authentications/GetUserDetails/GetUserDetails";
import DashboardLayout from "../../Layout/Dashboardlayout.js/Dashboardlayout";
import AllInstructors from "../../Pages/AllInstructors/AllInstructors";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Notification from "../../Pages/Dashboard/SettingAndPrivacy/Notification/Notification";
import Questions from "../../Pages/Dashboard/SettingAndPrivacy/Questions/Questions";
import Setting from "../../Pages/Dashboard/SettingAndPrivacy/Setting/Setting";
import BlogDetails from "../../Pages/Home/Blog/BlogDetails";
import BloodTracking from "../../Pages/Home/Calculator/BloodTracking/BloodTracking";
import Bmi from "../../Pages/Home/Calculator/Bmi/Bmi";
import Bmr from "../../Pages/Home/Calculator/Bmr/Bmr";
import Protein from "../../Pages/Home/Calculator/Protein/Protein";
import WaterTracking from "../../Pages/Home/Calculator/WaterTracking/WaterTracking";
import Faqs from "../../Pages/Home/FAQ/FAQ";
import WeightCalculator from "../../Pages/Home/WeightCalculator/WeightCalculator";
import InstructorsDetails from "../../Pages/InstructorDetails/InstructorDetails/InstructorsDetails";
import AllActivities from "../../Pages/OtherPages/AllActivities/AllActivities/AllActivities";
import CommunityFriend from "../../Pages/OtherPages/CommunityFriend/CommunityFriend";
import Friends from "../../Pages/OtherPages/CommunityFriend/Friends/Friends";
import Leaderboard from "../../Pages/OtherPages/Leaderboard/Leaderboard";
import Activities from "../../Pages/OtherPages/Logs/Activities/Activities/Activities";
import ActivitiesHistoryDetails from "../../Pages/OtherPages/Logs/Activities/Activities/ActivitiesHistoryDetails/ActivitiesHistoryDetails";
import Food from "../../Pages/OtherPages/Logs/Food/Food/Food";
import Sleep from "../../Pages/OtherPages/Logs/Sleep/Sleep/Sleep";
import Water from "../../Pages/OtherPages/Logs/Water/Water";
import Weight from "../../Pages/OtherPages/Logs/Weight/Weight";
import AddTutorials from "../../Pages/OtherPages/Tutorials/AddTutorials/AddTutorials";
import Tutorial from "../../Pages/OtherPages/Tutorials/Tutorial/Tutorial";
import Tutorials from "../../Pages/OtherPages/Tutorials/Tutorials";
import CallingRoom from "../../Pages/VideoCalling/CallingRoom/CallingRoom";
import VideoCalling from "../../Pages/VideoCalling/VideoCalling/VideoCalling";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
        element: <PrivateRoute><Leaderboard></Leaderboard></PrivateRoute>,
      },

      {
        path: "/Tutorials",
        element: <PrivateRoute><Tutorials></Tutorials></PrivateRoute>,
      },
      {
        path: "/faq",
        element: <Faqs></Faqs>,
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
        path: `/instructor/instructors/:id`,
        element: <InstructorsDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/instructors/${params.id}`),
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
            path: "/Profile/notification",
            element: <Notification></Notification>,
          },
          {
            path: "/Profile/AllUsers",
            element: (
              <AdminRoute>
                <AllUsers></AllUsers>
              </AdminRoute>
            ),
          },
          {
            path: "/Profile/questions",
            element: (
              <AdminRoute>
                <Questions></Questions>
              </AdminRoute>
            ),
          },
        ],
      },

      {
        path: "/singleCategory/:id",
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/singleCategory/${params.id}`
          ),

        element: <Tutorial></Tutorial>,
      },

      {
        path: "/SignIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/SignUp",
        element: <GetUserDetails></GetUserDetails>,
      },
      // {
      //   path: "/SignUp",
      //   element: <PersonalInfo></PersonalInfo>,
      // },
      // {
      //   path: "/SignUpSuccess",
      //   element: <SignUp></SignUp>,
      // },
      {
        path: "/Community/AllUsers",
        element:<PrivateRoute> <CommunityFriend></CommunityFriend></PrivateRoute>,
      },
      {
        path: "/Community/friends",
        element: <PrivateRoute><Friends></Friends></PrivateRoute>,
      },
      {
        path: `/instructor/instructors`,
        element: <AllInstructors />,
      },
      {
        path: `/logs/allactivities`,
        element: <AllActivities />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails></BlogDetails>,
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
        element: <Food></Food>,
      },
    ],
  },
  {
    path: "/Logs",
    element:<PrivateRoute> <LogsLayout></LogsLayout></PrivateRoute>,
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
    path: `/video`,
    element: <VideoCalling />,
  },
  {
    path: `/video/room/:roomid`,
    element: <CallingRoom />,
  },
]);
