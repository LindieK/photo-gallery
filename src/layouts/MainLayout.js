import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

import DefaultNav from "../components/nav/DefaultNav";
import HeroNav from "../components/nav/HeroNav";
import { useAuth } from "../context/AuthContext";

const StyledMainLayout = styled.div`
  position: relative;
`;

const MainLayout = () => {
  const { currentUser } = useAuth();
  return (
    <StyledMainLayout>
      {currentUser ? <DefaultNav /> : <HeroNav />}
      <Outlet />
    </StyledMainLayout>
  );
};
export default MainLayout;
