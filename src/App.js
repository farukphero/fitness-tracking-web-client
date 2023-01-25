import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/Routes/Routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className=" bg-black mx-auto text-white">
      <Toaster/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
