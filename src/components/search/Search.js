import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import breakpoint from "../../common/Breakpoints";

const StyledSearchForm = styled.form`
  width: 14em;

  @media only screen and ${breakpoint.device.md} {
    width: 20em;
  }
`;
const SearchIcon = styled.button`
  position: relative;
  padding: 0.25em;
  left: -35px;
  background: none;
  border: none;
  cursor: pointer;
`;

const StyledSearch = styled.input`
  padding: 0.5em 1em;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.secondaryText};
  width: 80%;
`;

const Search = ({
  searchTerm,
  /*handleSearchTermChange,*/ handleFormSubmit,
}) => {
  const pattern = /[^\n ]+/;
  return (
    <StyledSearchForm onSubmit={handleFormSubmit}>
      <StyledSearch
        type="text"
        placeholder="Search"
        value={searchTerm}
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
