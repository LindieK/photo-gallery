import React from "react";
import styled from "styled-components";

import Search from "../search/Search";
import DropdownMenu from "../dropdownmenu/DropdownMenu";
import breakpoint from "../../common/Breakpoints";

const StyledNav = styled.nav`
  background: ${({ theme }) => theme.background};
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  box-shadow: 0px 4px 16px 0 ${({ theme }) => theme.shadow};
  z-index: 2;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;

  .profile-icon {
    margin-right: 0.75em;

    @media only screen and ${breakpoint.device.md} {
      margin-right: 1em;
    }
  }
`;

const NavLogoText = styled.h3`
  font-weight: 800;
  font-size: 1.5em;
  padding-left: 0.75em;
  color: ${({ theme }) => theme.primary};

  @media only screen and ${breakpoint.device.md} {
    padding-left: 1em;
  }
  @media only screen and ${breakpoint.device.xlg} {
    font-size: 2.25em;
  }
`;

const Nav = (props) => {
  const { searchTerm, /*handleSearchTermChange,*/ handleFormSubmit } = props;

  return (
    <StyledNav>
      <NavLogoText>PG</NavLogoText>
      <NavItems>
        <Search
          searchTerm={searchTerm}
          //handleSearchTermChange={handleSearchTermChange}
          handleFormSubmit={handleFormSubmit}
        />
        <DropdownMenu />
      </NavItems>
    </StyledNav>
  );
};
export default Nav;
