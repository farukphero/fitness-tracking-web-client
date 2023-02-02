import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/Routes/Routes";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import { useEffect } from "react";
import Spinner from "./Components/Spinner/Spinner";
import Loading from "./Components/Loading/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    }, 2000)
  })
  return (
 
    <div>
      {
      isLoading ? <Loading> </Loading>: <div className=" bg-black mx-auto text-white">
      <Toaster/>
 
    <div className={`bg-gradient-to-r from-gray-700 via-green-700 to-gray-700 hover:bg-gradient-to-r hover:from-gray-800 hover:via-green-700 hover:to-gray-800  mx-auto text-white`}>
 
      <RouterProvider router={router} />
    </div>
    </div>
    }
    </div>

  );
}

export default App;
