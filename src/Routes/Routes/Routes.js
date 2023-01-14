import { createBrowserRouter } from "react-router-dom";
import KeepTrack from "../../Layout/KeepTrack/KeepTrack";
import Main from "../../Layout/Main/Main";
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
      
    ],
  },
  {
    path: "/KeepTrack",
    element: <KeepTrack></KeepTrack>,
    errorElement: <ErrorPage />,
    children: [{
        path: "/KeepTrack/Foods",
        element: <Foods></Foods>,
    }]
  },
]);
