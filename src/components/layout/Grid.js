import React, { Component } from "react";
import styled from "styled-components";

import {
  SearchEmptyState,
  ResultsIcon,
  ResultsMsg,
} from "../../common/CommonStyles";
import LazyImageCard from "../lazyimage/LazyImageCard";
import icon from "../../assets/search-results.svg";

const GridBox = styled.div`
  position: relative;
  top: 14em;
  width: 75vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1em;
  padding: 1em;
  margin: 0 auto;

  @media only screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    top: 10em;
    width: 90vw;
  }
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
    top: 12em;
  }
`;
class Grid extends Component {
  render() {
    const { photos, query, displayModal } = this.props;
    return (
      <>
        {photos.length === 0 ? (
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
        ) : (
          <GridBox>
            {photos.map((photo) => (
              <LazyImageCard
                key={photo.id}
                image={photo.urls}
                alt={photo.alt_description}
                onImageClick={() => displayModal(photo)}
              />
            ))}
          </GridBox>
        )}
      </>
    );
  }
}

export default Grid;
