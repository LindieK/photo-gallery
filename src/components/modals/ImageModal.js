import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Avatar from "react-avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faInfoCircle,
  faBookmark as faBookmarkSolid,
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark as faBookmarkRegular } from "@fortawesome/free-regular-svg-icons";

import Modal from "./Modal";
import breakpoint from "../../common/Breakpoints";
import { SecondaryLink, UnsplashImage } from "../../common/CommonStyles";
import defaultPic from "../../assets/profile.png";

const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.75em;

  @media only screen and ${breakpoint.device.md} {
    flex-direction: row;
    justify-content: space-between;
    padding: 1em;
  }
`;

const AuthorInfo = styled.div`
  display: flex;

  .authorName {
    display: flex;
    flex-direction: column;
    margin-left: 0.5em;
    font-size: 0.75em;

    .instagram-name {
      color: ${({ theme }) => theme.text60};
    }

    @media only screen and ${breakpoint.device.md} {
      font-size: 0.88em;
    }
  }
`;

const ImageActions = styled.div`
  margin-top: 1em;

  @media only screen and ${breakpoint.device.md} {
    margin-top: 0;
  }

  & svg {
    width: 0.75em;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 90%;
  height: 60vh;

  @media only screen and (${breakpoint.device.md}) {
    height: 80vh;
  }
`;

const ExtraInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em 1em 0.5em 1em;

  .description {
    align-self: center;
    font-size: 0.8em;
    color: ${({ theme }) => theme.text60};
  }

  @media only screen and (${breakpoint.device.sm}) {
  }
`;

const ImageModal = ({ isBookmarked, image, displayImageInfo, onClose }) => {
  return ReactDOM.createPortal(
    <Modal isInfo={false} handleClick={onClose}>
      <Header>
        <AuthorInfo>
          <Avatar
            src={
              image.user.profile_image.medium
                ? image.user.profile_image.medium
                : defaultPic
            }
            alt="Author's Profile Photo"
            round={true}
            size={40}
          />
          <div className="authorName">
            <span>{image.user.name && image.user.name}</span>
            <span className="instagram-name">
              {image.user.instagram_username &&
                `@${image.user.instagram_username}`}
            </span>
          </div>
        </AuthorInfo>

        <ImageActions>
          <SecondaryLink>
            <FontAwesomeIcon
              size="xs"
              icon={isBookmarked ? faBookmarkSolid : faBookmarkRegular}
            />
          </SecondaryLink>
          <SecondaryLink>
            <FontAwesomeIcon icon={faDownload} />
          </SecondaryLink>
        </ImageActions>
      </Header>
      <ImageWrapper>
        <UnsplashImage src={image.urls} alt={image.alt_description} />
      </ImageWrapper>

      <ExtraInfo>
        <span className="description">{image.alt_description}</span>

        <SecondaryLink onClick={() => displayImageInfo(image)}>
          <FontAwesomeIcon icon={faInfoCircle} />
          <span>Info</span>
        </SecondaryLink>
      </ExtraInfo>
    </Modal>,
    document.getElementById("modal-root")
  );
};
export default ImageModal;
