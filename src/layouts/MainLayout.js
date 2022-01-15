import React from "react";
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
      {/* searchTerm={searchTerm} handleSearchTermChange={handleSearchTermChange}  handleFormSubmit={handleFormSubmit} */}
      <Outlet />
    </StyledMainLayout>
  );
};
export default MainLayout;
