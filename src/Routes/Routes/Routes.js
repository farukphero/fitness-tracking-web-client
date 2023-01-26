import { createBrowserRouter } from "react-router-dom";
import SignIn from "../../Authentications/SignIn/SignIn";
import SignUp from "../../Authentications/SignUp/SignUp";
import KeepTrack from "../../Layout/KeepTrack/KeepTrack";
import Main from "../../Layout/Main/Main";
import Event from "../../Pages/Dashboard/Event/Event";
import Report from "../../Pages/Dashboard/Report/Report";

import Support from "../../Pages/Dashboard/Support/Support";
import UserInfo from "../../Pages/Dashboard/UserInfo/UserInfo";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Community from "../../Pages/OtherPages/Community/Community";
import Foods from "../../Pages/OtherPages/Foods/Foods";
import Leaderboard from "../../Pages/OtherPages/Leaderboard/Leaderboard";
import Tutorials from "../../Pages/OtherPages/Tutorials/Tutorials";
import ServiceDetails from "../../Pages/Home/Services/ServiceDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UserDetails from "../../Authentications/UserDetails/UserDetails";
import LogsLayout from "../../Layout/LogsLayout/LogsLayout/LogsLayout";
import Activities from "../../Pages/OtherPages/Logs/Activities/Activities/Activities";
import Food from "../../Pages/OtherPages/Logs/Food/Food/Food";
import Weight from "../../Pages/OtherPages/Logs/Weight/Weight";
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
import CommunityFeed from "../../Pages/OtherPages/Communityfeed/CommunityFeed";
import CommunityPosted from "../../Pages/OtherPages/CommunityPosted/CommunityPosted";
import CommunityPost from "../../Pages/OtherPages/CommunityPost/CommunityPost";
import CommunityFriend from "../../Pages/OtherPages/CommunityFriend/CommunityFriend";
import CommunityGroup from "../../Pages/OtherPages/CommunityGroup/CommunityGroup";
import ActivitiesHistoryDetails from "../../Pages/OtherPages/Logs/Activities/Activities/ActivitiesHistoryDetails/ActivitiesHistoryDetails";

 

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
 

      { path: "/Dashboard/userInfo", element: <UserInfo></UserInfo> },
      {
        path: "/Dashboard/setting/plan",
        element: <Plan></Plan>,
      },
      {
        path: "/Dashboard/setting/team",
        element: <Team></Team>,
      },
      {
        path: "/Dashboard/setting/notification",
        element: <Notification></Notification>,
      },
      {
        path: "/Dashboard/setting/integration",
        element: <Intergration></Intergration>,
      },
      {
        path: "/Dashboard/setting/authprofile",
        element: <AuthProfile></AuthProfile>,
      },

      {
        path: "/Dashboard/setting",
        element: <Setting></Setting>,
      },

 
      {
        path: "/AddTutorials",
        element: <AddTutorials></AddTutorials>,
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
            element: <Community></Community>
          },
          {
            path: "/Community/feed",
            element: <CommunityFeed></CommunityFeed>
          },
          {
            path: "/Community/post",
            element: <CommunityPost></CommunityPost>
          },
          {
            path: "/Community/posted",
            element: <CommunityPosted></CommunityPosted>
          },
          {
            path: "/Community/friend",
            element: <CommunityFriend></CommunityFriend>
          },
          {
            path: "/Community/group",
            element: <CommunityGroup></CommunityGroup>
          },
          

        ]
      },
      {
        path: '/singleCategory/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/singleCategory/${params.id}`),
        element: <Tutorial></Tutorial>,
      },



      { path: "/Dashboard/userInfo", element: <UserInfo></UserInfo> },

      {
        path: "/Dashboard/setting",
        element: <SettingAndPrivacy></SettingAndPrivacy>,
      },
 
      { path: "/Dashboard/report", element: <Report></Report> },
      { path: "/Dashboard/event", element: <Event></Event> },
      { path: "/Dashboard/support", element: <Support></Support> },
 
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
        element: <Weight></Weight>,
      },
      {
        path: "/Logs/Sleep",
        element: <Sleep></Sleep>,
      },
     
    ],
 
  },
 
  }

 
]);
