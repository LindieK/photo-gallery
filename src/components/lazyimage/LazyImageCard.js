import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import LazyLoad from "react-lazyload";

import breakpoint from "../../common/Breakpoints";

const loadingAnimation = keyframes`
    0%, 100%{
        background-color: #fff;
    }
    50%{
        background-color: #ccc;
    }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 240px;

  @media only screen and ${breakpoint.device.md} {
    height: 300px;
  }
  @media only screen and ${breakpoint.device.xlg} {
    height: 400px;
  }
`;

const Placeholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 20px;
  animation: ${loadingAnimation} 5s cubic-bezier(0.4, 0, 1, 1) infinite;
`;

const StyledImage = styled.img.attrs((props) => ({
  src: props.src,
  //src: props.src.regular,
  //srcSet: `${props.src.full} 1280w,${props.src.regular} 767w,${props.src.small} 300w`,
  //alt: props.alt,
}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  cursor: pointer;
`;

const LazyImageCard = ({ id, image, alt, onImageClick }) => {
  const placeholderRef = useRef(null);

  const removePlaceholder = () => {
    placeholderRef.current.remove();
  };
  return (
    <ImageWrapper key={id}>
      <Placeholder ref={placeholderRef} />
      <LazyLoad>
        <StyledImage
          key={id}
          src={image}
          alt={alt}
          onLoad={removePlaceholder}
          onError={removePlaceholder}
          onClick={onImageClick}
        />
      </LazyLoad>
    </ImageWrapper>
  );
};

export default LazyImageCard;
