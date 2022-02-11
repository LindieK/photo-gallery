import React from "react";
import styled from "styled-components";

import icon from "../assets/search-results.svg";

const SearchEmptyState = styled.div`
  position: relative;
  top: 14em;
  width: 75vw;
  height: 50vh;
  margin: 0 auto;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ResultsMsg = styled.div`
  font-size: 1.25em;
  text-align: center;
  color: #c4c4c4;
`;

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
    <SearchEmptyState>
      <ResultsIcon src={icon} alt="Empty Search State Icon" />
      {query ? (
        <ResultsMsg>
          <p className="error-msg">No results for {query}</p>
          <p className="error-msg">Try a different search term</p>
        </ResultsMsg>
      ) : (
        <ResultsMsg>
          <p className="error-msg">
            Oh my something went wrong. There are no pictures to show you.
          </p>
          <p className="error-msg">Try refreshing the page</p>
        </ResultsMsg>
      )}
    </SearchEmptyState>
  );
};
export default SearchResults;
