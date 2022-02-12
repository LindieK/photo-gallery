import React from "react";
import styled from "styled-components";

import breakpoint from "../../common/Breakpoints";
import LazyImageCard from "../lazyimage/LazyImageCard";

const GridBox = styled.div`
  width: 90vw;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1em;
  padding: 1em;
  margin: 0 auto;

  @media only screen and ${breakpoint.device.md} {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and ${breakpoint.device.lg} {
    grid-template-columns: 1fr 1fr 1fr;
    top: 10em;
    width: 75vw;
  }
`;
const Grid = (props) => {
  const { photos, displayModal } = props;
  return (
    <>
      {photos.length > 0 && (
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
};

export default Grid;
