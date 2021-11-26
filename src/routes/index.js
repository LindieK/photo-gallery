import { useRoutes } from "react-router";

import Home from "../pages/Home";
import LoginSignUp from "../pages/LoginSignUp";
import Profile from "../pages/Profile";

const Router = () => {
  let element = useRoutes([
    { path: "/", element: <LoginSignUp /> },
    { path: "home", element: <Home /> },
    { path: "profile", element: <Profile /> },
  ]);

  return element;
};
export default Router;
