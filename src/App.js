import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/Routes/Routes";

function App() {
  return (
    <div className=" bg-black mx-auto text-white">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
