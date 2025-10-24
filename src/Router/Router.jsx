import { createBrowserRouter } from "react-router";
import RootLayouts from "../Pages/Layouts/RootLayouts";
import Home from "../Pages/Home/Home";
import AllServices from "../Pages/AllServices/AllServices";
import AddService from "../Pages/AddService/AddService";
import AuthLayouts from "../Pages/Layouts/AuthLayouts";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Error from "../Pages/Error/Error";
import PrivateRoute from "../AuthProvider/PrivateRoute";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Loading from "../Pages/Loading/Loading";
import ManageServices from "../Pages/ManageServices/ManageServices";
import EditService from "../Pages/ManageServices/EditService";
import BookedServices from "../Pages/BookedServices/BookedServices";
import ServiceToDo from "../Pages/ServiceToDo/ServiceToDo";
import About from "../Pages/About/About";
import ContactUs from "../Pages/Contact/ContactUs";
import PrivacyPolicy from "../Pages/PrivacyPolicyy/PrivacyPolicy ";
import TermsOfService from "../Pages/TermsOfServicee/TermsOfService ";
import ProviderDashboard from "../Pages/Dashboard/ProviderDashboard ";
import UserDashboard from "../Pages/Dashboard/UserDashboard ";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: ContactUs,
      },
      {
        path: "/all-services",
        Component: AllServices,
      },
      {
        path: "/add-service",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/provider-dashboard",
        element: (
          <PrivateRoute>
            <ProviderDashboard></ProviderDashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "/user-dashboard",
        element: (
          <PrivateRoute>
            <UserDashboard></UserDashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "/service-details/:id",
        loader: () => fetch("https://fixitron-server.vercel.app/services"),
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-services",
        element: (
          <PrivateRoute>
            <ManageServices></ManageServices>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-service/:id",
        loader: () => fetch("https://fixitron-server.vercel.app/services"),
        element: (
          <PrivateRoute>
            <EditService></EditService>
          </PrivateRoute>
        ),
      },
      {
        path: "/booked-services",
        element: (
          <PrivateRoute>
            <BookedServices></BookedServices>
          </PrivateRoute>
        ),
      },
      {
        path: "/service-todo",
        element: (
          <PrivateRoute>
            <ServiceToDo></ServiceToDo>
          </PrivateRoute>
        ),
      },
      {
        path: "/privacy-policy",
        Component: PrivacyPolicy,
      },
      {
        path: "/terms",
        Component: TermsOfService,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayouts,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/*",
    Component: Error,
  },
]);

export default router;
