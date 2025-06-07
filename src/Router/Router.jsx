import {
  createBrowserRouter,
} from "react-router";
import RootLayouts from "../Pages/Layouts/RootLayouts";
import Home from "../Pages/Home/Home";
import AllServices from "../Pages/AllServices/AllServices";
import AddService from "../Pages/AddService/AddService";
import AuthLayouts from "../Pages/Layouts/AuthLayouts";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Error from "../Pages/Error/Error";
import PrivateRoute from "../AuthProvider/PrivateRoute";


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
        },
        {
            path: "/add-service",
            element: <PrivateRoute><AddService></AddService></PrivateRoute>
        }
    ]
  },
  {
    path: "/auth",
    Component: AuthLayouts,
    children:[
      {
        path: "/auth/login",
        Component: Login
      },
      {
        path: "/auth/register",
        Component: Register
      }
    ]
  },
  {
    path: "/*",
    Component: Error
  }
]);

export default router;
