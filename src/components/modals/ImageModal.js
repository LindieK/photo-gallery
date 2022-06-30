import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Avatar from "react-avatar";
import { saveAs } from "file-saver";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as faBookmarkRegular } from "@fortawesome/free-regular-svg-icons";
import {
  faDownload,
  faInfoCircle,
  faBookmark as faBookmarkSolid,
} from "@fortawesome/free-solid-svg-icons";

import Modal from "./Modal";
import breakpoint from "../../common/Breakpoints";
import { SecondaryLink, UnsplashImage } from "../../common/CommonStyles";
import defaultPic from "../../assets/profile.png";
import { trackDownload } from "../../Api";

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

const BookmarkButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  border-radius: 5px;
  border: 1.5px solid ${({ theme }) => theme.primary};
  padding: 0.5em 0.6em;
  margin: 0 0.25em;
  font-size: 0.9em;
`;

const DownloadButton = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.button};
  cursor: pointer;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.primary};
  padding: 0.5em 0.6em;
  margin: 0 0.25em;
  font-size: 0.9em;

  &:active {
    background-color: ${({ theme }) => theme.button};
    border: 2px solid ${({ theme }) => theme.button};
    color: ${({ theme }) => theme.primary};
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
  const handleDownload = (downloadPath) => {
    trackDownload(downloadPath).then((response) => {
      response.data.url &&
        saveAs(response.data.url, `${image.user.username}_${image.user.id}`);
    });
  };

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
          <BookmarkButton>
            <FontAwesomeIcon
              size="xs"
              icon={isBookmarked ? faBookmarkSolid : faBookmarkRegular}
            />
          </BookmarkButton>
          <DownloadButton
            onClick={() => handleDownload(image.links.download_location)}
          >
            <FontAwesomeIcon icon={faDownload} />
          </DownloadButton>
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
