import { createBrowserRouter } from "react-router-dom";
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
import ServiceDetails from "../../Pages/Home/Services/ServiceDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../Layout/Dashboardlayout.js/Dashboardlayout";
import UserDetails from "../../Authentications/UserDetails/UserDetails";
import LogsLayout from "../../Layout/LogsLayout/LogsLayout/LogsLayout";
import Activities from "../../Pages/OtherPages/Logs/Activities/Activities/Activities";
import Food from "../../Pages/OtherPages/Logs/Food/Food/Food";
import Weight from "../../Pages/OtherPages/Logs/Weight/Weight";
import Sleep from "../../Pages/OtherPages/Logs/Sleep/Sleep";
import Water from "../../Pages/OtherPages/Logs/Water/Water";
import AddTutorials from "../../Pages/OtherPages/Tutorials/AddTutorials/AddTutorials";
import Tutorial from "../../Pages/OtherPages/Tutorials/Tutorial/Tutorial";
  

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
        element:  <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/Leaderboard",
        element: <Leaderboard></Leaderboard>,
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
        path: "/AddTutorials",
        element: <AddTutorials></AddTutorials>,
      },
      {
        path:'/singleCategory/:id',
        loader:({params})=>fetch(`http://localhost:5000/singleCategory/${params.id}`),
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
  }
 

]);
