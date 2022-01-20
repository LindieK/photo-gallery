import { useRoutes } from "react-router";

import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import Landing from "../pages/Landing";
import Profile from "../pages/Profile";

const Router = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        { path: "login", element: <Login /> },
        { path: "signup", element: <SignUp /> },
        { path: "/", element: <Landing /> },
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
