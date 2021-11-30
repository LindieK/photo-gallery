import { Navigate, useRoutes } from "react-router";

import Home from "../pages/Home";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";

const Router = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        { path: "login", element: <Login /> },
        { path: "signup", element: <SignUp /> },
        { path: "/", element: <Navigate to="/login" /> },
      ],
    },
    {
      element: <MainLayout />,
      children: [
        { path: "home", element: <Home /> },
        { path: "profile", element: <Profile /> },
      ],
    },
  ]);

  return element;
};
export default Router;
