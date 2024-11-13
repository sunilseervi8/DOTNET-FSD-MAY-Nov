import { createBrowserRouter } from "react-router-dom";
import SideNavBar from "./Components/navigation/SideNavBar";
import Home from "./Components/Home";
import AddTask from "./Components/User/addTask";

const myRoutes = createBrowserRouter([
  {

    path: "/",
    Component: Home,

    children: [
      {
        path: "user",
        Component:SideNavBar,
        children:[
          {
            path: "addtask",
            Component:AddTask
          }
        ]
       
      }
    ]
  }
]);
export default myRoutes;
