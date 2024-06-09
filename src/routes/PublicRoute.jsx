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
import MyReview from "@/pages/Dashboard/MyReview";
import ManageScholarships from "@/pages/Dashboard/ManageScholarships";
import ManageReviews from "@/pages/Dashboard/ManageReviews";
import AllAppliedScholarship from "@/pages/Dashboard/AllAppliedScholarship";
import ScholarshipDetails from "@/pages/ScholarshipDetails";

import Test from "../pages/Test";
import Payment from "@/pages/Payment";
import ApplicationForm from "@/pages/ApplicationForm";
import PrivateRoute from "./PrivateRoute";

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
      // {
      //   path: "/scholarship-details",
      //   element: <ScholarshipDetails></ScholarshipDetails>,
      // },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/test",
        element: <Test></Test>,
      },
      {
        path: "/details/:id",
        element: <ScholarshipDetails></ScholarshipDetails>,
      },
      {
        path: "/details/:id/payment",
        element: <Payment></Payment>,
      },
      {
        path: "/details/:id/payment/application-form",
        element: <ApplicationForm></ApplicationForm>,
      },
    ],
  },

  // Dashboard routes
  {
    path: "/dashboard",
    element: <Admin></Admin>,
    children: [
      {
        index: true,
        element: <AdminHome></AdminHome>,
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "my-application",
        element: <MyApplication></MyApplication>,
      },
      {
        path: "my-reviews",
        element: <MyReview></MyReview>,
      },
      {
        path: "manage-scholarships",
        element: <ManageScholarships></ManageScholarships>,
      },
      {
        path: "manage-reviews",
        element: <ManageReviews></ManageReviews>,
      },
      {
        path: "add-scholarship",
        element: <AddScholarship></AddScholarship>,
      },
      {
        path: "all-applied-scholarship",
        element: <AllAppliedScholarship></AllAppliedScholarship>,
      },
      {
        path: "manage-users",
        element: <ManageUsers></ManageUsers>,
      },
    ],
  },
]);
