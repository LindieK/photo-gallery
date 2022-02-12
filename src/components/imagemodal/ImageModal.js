import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Avatar from "react-avatar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import breakpoint from "../../common/Breakpoints";
import defaultPic from "../../assets/profile.png";
import {
  ModalOverlay,
  ModalWrapper,
  SecondaryLink,
} from "../../common/CommonStyles";
import {
  faPlus,
  faInfoCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const ImageModalOverlay = styled(ModalOverlay)`
  z-index: 10;

  #close {
    font-size: 1.5em;
    color: #d1d1d1;
    position: absolute;
    top: 0.5em;
    left: 0.5em;
  }
`;
const ImageModalWrapper = styled(ModalWrapper)`
  max-width: 80%;
  display: flex;
  flex-direction: column;

  @media only screen and (${breakpoint.device.sm}) {
    max-width: 90%;
  }
`;
const ModalActions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em 1em 0.5em 1em;

  .authorinfo {
    display: flex;

    .authorName {
      display: flex;
      flex-direction: column;
      margin-left: 0.5em;
    }
    #instagram-name {
      font-size: 0.8em;
      color: #767676;
    }
  }
  @media only screen and (${breakpoint.device.sm}) {
    .imageActions {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
`;
const ImageWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 80%;
  height: 80vh;

  @media only screen and (max-width: 767px) {
    height: 60vh;
  }
  @media only screen and (max-width: 1024px) {
  }
`;
const Image = styled.img.attrs((props) => ({
  src: props.src.regular,
  srcSet: `${props.src.full} 1280w,${props.src.regular} 767w,${props.src.small} 300w`,
  alt: props.alt,
}))`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const ExtraInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em 1em 0.5em 1em;

  .description {
    align-self: center;
    font-size: 0.8em;
    color: #767676;
  }

  @media only screen and (${breakpoint.device.sm}) {
  }
`;
const DownloadLink = styled(SecondaryLink)`
  text-decoration: none;
`;

const ImageModal = (props) => {
  return ReactDOM.createPortal(
    <ImageModalOverlay>
      <FontAwesomeIcon icon={faTimes} onClick={props.onClose} id="close" />
      <ImageModalWrapper>
        <ModalActions>
          <div className="authorInfo">
            <Avatar
              src={
                props.image.user.profile_image.medium
                  ? props.image.user.profile_image.medium
                  : defaultPic
              }
              alt="Author's Profile Photo"
              round={true}
              size={50}
            />
            <div className="authorName">
              <span>{props.image.user.name}</span>
              <span id="instagram-name">
                {props.image.user.instagram_username
                  ? `@${props.image.user.instagram_username}`
                  : ""}
              </span>
            </div>
          </div>

          <div className="imageActions">
            <SecondaryLink>
              <FontAwesomeIcon icon={faPlus} />
            </SecondaryLink>
            <DownloadLink
              download
              href={`${props.image.links.download}?force=true`}
            >
              Download
            </DownloadLink>
          </div>
        </ModalActions>

        <ImageWrapper>
          <Image src={props.image.urls} alt={props.image.alt_description} />
        </ImageWrapper>

        <ExtraInfo>
          <div className="description">
            <span>{props.image.alt_description}</span>
          </div>
          <SecondaryLink onClick={() => props.displayImageInfo(props.image)}>
            <FontAwesomeIcon icon={faInfoCircle} />
            <span>Info</span>
          </SecondaryLink>
        </ExtraInfo>
      </ImageModalWrapper>
    </ImageModalOverlay>,
    document.getElementById("modal-root")
  );
};

export default ImageModal;
