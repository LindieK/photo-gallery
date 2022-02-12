import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router";

//import DefaultNav from "../components/nav/DefaultNav";
import HeroNav from "../components/nav/HeroNav";

const StyledMainLayout = styled.div`
  position: relative;
`;

const MainLayout = () => {
  return (
    <StyledMainLayout>
      <HeroNav />
      {/*<DefaultNav />*/}
      {/* searchTerm={searchTerm} handleSearchTermChange={handleSearchTermChange}  handleFormSubmit={handleFormSubmit} */}
      <Outlet />
    </StyledMainLayout>
  );
};
export default MainLayout;
