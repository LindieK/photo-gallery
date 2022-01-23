import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import breakpoint from "../../common/Breakpoints";

const StyledSearchForm = styled.form`
  display: flex;

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

  svg {
    color: ${({ theme }) => theme.text38};
  }
`;

const StyledSearch = styled.input`
  padding: 0.75em 1em;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.border};
  width: 80%;
  background: none;
  color: ${({ theme }) => theme.text87};
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
