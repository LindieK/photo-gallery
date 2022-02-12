import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import breakpoint from "../../common/Breakpoints";

const StyledSearchForm = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;

  @media only screen and ${breakpoint.device.sm} {
    width: 80%;
  }

  @media only screen and ${breakpoint.device.md} {
    width: 60%;
  }

  @media only screen and ${breakpoint.device.lg} {
    width: 40%;
  }
`;
const SearchIcon = styled.button`
  position: relative;
  padding: 0.25em;
  left: -35px;
  background: none;
  border: none;
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.text38};
  }
`;

const StyledSearch = styled.input`
  padding: 1.25em;
  border-radius: 5px;
  border: ${(props) =>
    props.outline ? `1px solid ${({ theme }) => theme.border}` : "none"};
  width: 100%;
  background: ${(props) =>
    props.outline ? "none" : ({ theme }) => theme.background};
  color: ${({ theme }) => theme.text87};
`;

const Search = ({
  searchTerm,
  outline,
  /*handleSearchTermChange,*/ handleFormSubmit,
}) => {
  const pattern = /[^\n ]+/;
  return (
    <StyledSearchForm onSubmit={handleFormSubmit}>
      <StyledSearch
        type="text"
        placeholder="Search"
        value={searchTerm}
        outline={outline}
        //onChange={handleSearchTermChange}
        pattern={pattern}
        title="Must be letters and/or numbers only"
        required
      />
      <SearchIcon>
        <FontAwesomeIcon icon={faSearch} />
      </SearchIcon>
    </StyledSearchForm>
  );
};

export default Search;
