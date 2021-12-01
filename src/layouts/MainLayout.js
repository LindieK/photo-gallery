import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Outlet } from "react-router";

import Nav from "../components/nav/Nav";

const StyledMainLayout = styled.div`
  position: relative;
`;

const MainLayout = () => {
  return (
    <StyledMainLayout>
      <Nav />
      <Outlet />
    </StyledMainLayout>
  );
};
export default MainLayout;
