import {
  createBrowserRouter,
} from "react-router";
import RootLayouts from "../Pages/Layouts/RootLayouts";
import Home from "../Pages/Home/Home";
import AllServices from "../Pages/AllServices/AllServices";


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: "/all-services",
            Component: AllServices
        }
    ]
  },
]);

export default router;
