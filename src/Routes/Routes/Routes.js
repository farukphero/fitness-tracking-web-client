import { createBrowserRouter } from "react-router-dom";
import KeepTrack from "../../Layout/KeepTrack/KeepTrack";
import LogsLayout from "../../Layout/LogsLayout/LogsLayout";
import Main from "../../Layout/Main/Main";
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
import Food from "../../Pages/OtherPages/Logs/Food/Food/Food";
import Activities from "../../Pages/OtherPages/Logs/Activities/Activities/Activities";

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
