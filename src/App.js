import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/Routes/Routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
 
    <div className=" bg-black mx-auto text-white">
      <Toaster/>
 
    <div className={`bg-gradient-to-r from-gray-700 via-green-700 to-gray-700 hover:bg-gradient-to-r hover:from-gray-800 hover:via-green-700 hover:to-gray-800  mx-auto text-white`}>
 
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
