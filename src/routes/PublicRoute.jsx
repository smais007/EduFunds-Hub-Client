import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Root from "../layouts/Web/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Scholarship from "../pages/Scholarship";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Admin from "../layouts/dashboard/Admin";
import AdminHome from "../pages/Dashboard/AdminHome";
import MyProfile from "../layouts/dashboard/MyProfile";
import AddScholarship from "../layouts/dashboard/AddScholarship";
import ManageUsers from "../layouts/dashboard/ManageUsers";
import MyApplication from "../layouts/dashboard/MyApplication";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/scholarship",
        element: <Scholarship></Scholarship>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },

  // Dashboard routes
  {
    path: "dashboard",
    element: <Admin></Admin>,
    children: [
      {
        index: true,
        element: <AdminHome></AdminHome>,
      },
      {
        path: "profile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "my-application",
        element: <MyApplication></MyApplication>,
      },
      {
        path: "add-scholarship",
        element: <AddScholarship></AddScholarship>,
      },
      {
        path: "manage-users",
        element: <ManageUsers></ManageUsers>,
      },
    ],
  },
]);
