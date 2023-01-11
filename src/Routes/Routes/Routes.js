import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main>Hello world!</Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home>Hello world!</Home>,
      },
    ],
  },
]);
