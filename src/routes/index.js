import { useRoutes } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import SearchResults from "../pages/SearchResults";
import ResetPassword from "../pages/ResetPassword";

const Router = () => {
  let element = useRoutes([
    {
      element: <AuthLayout />,
      children: [
        { path: "login", element: <Login /> },
        { path: "signup", element: <SignUp /> },
        { path: "resetpassword", element: <ResetPassword /> },
      ],
    },
    {
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "profile/:username", element: <Profile /> },
        { path: "search/:query", element: <SearchResults /> },
      ],
    },
  ]);

  return element;
};
export default Router;
