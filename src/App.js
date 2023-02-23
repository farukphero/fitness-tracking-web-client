import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/Routes/Routes";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "./Components/Loading/Loading";
import { Provider } from "react-redux";
import store from "./redux/store";
import logo from "../src/images/apple-touch-icon.png"

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });
  return (
    <div>
      {isLoading ? (
        <Loading> </Loading>
      //  <div className="flex h-full w-full items-center justify-center">
      //     <img className="h-10 w-10 rounded-md" src={logo} alt="" />
      //         <h1 className="ml-2 text-2xl font-bold tracking-wide text-gray-100 uppercase ">
      //           <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-white">
      //             FitLessian{" "}
      //           </span>
      //         </h1>
      //  </div>
      ) : (
        <div className=" bg-black mx-auto text-white">
          <Toaster />

          <div
            className={`bg-gradient-to-r from-gray-700 via-green-700 to-gray-700 hover:bg-gradient-to-r hover:from-gray-800 hover:via-green-700 hover:to-gray-800  mx-auto text-white`}
          >
            <Provider store={store}>
              <RouterProvider router={router} />
            </Provider>
            {/* <RouterProvider router={router} /> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
