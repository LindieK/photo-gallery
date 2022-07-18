import React from "react";
import styled from "styled-components";

import icon from "../assets/search-results.svg";
import breakpoint from "../common/Breakpoints";
import GridLayout from "../layouts/GridLayout";
import { FetchErrorMessage } from "../common/CommonStyles";

const SearchPageLayout = styled.div`
  background: ${({ theme }) => theme.background};
  padding: 0.5em;

  @media only screen and ${breakpoint.device.lg} {
    padding: 1em;
  }
`;

const PageHeader = styled.div``;
const ResultsContainer = styled.div``;

const PageTitle = styled.h2``;

const ResultsIcon = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 10vw;
  height: 10vw;
`;

const SearchResults = (props) => {
  const { query } = props;

  return (
    <SearchPageLayout>
      <PageHeader>
        <PageTitle>{`${query} Photos`}</PageTitle>
      </PageHeader>
      <ResultsContainer>
        {/* {error && <FetchErrorMessage>{error}</FetchErrorMessage>}
        {results && <GridLayout></GridLayout>} */}
      </ResultsContainer>
    </SearchPageLayout>
  );
};
export default SearchResults;
