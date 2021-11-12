import React from "react";
import ReactDOM from "react-dom";
import {
  ModalOverlay,
  ModalWrapper,
  ModalImageWrapper,
  ModalImage,
  ModalActions,
  ExtraInfoWrapper,
  Avatar,
} from "../../styles/ModalStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faInfoCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "./ImageModal.scss";
import avatar from "../../image/user.png";

const ImageModal = (props) => {
  return ReactDOM.createPortal(
    <ModalOverlay>
      <FontAwesomeIcon icon={faTimes} onClick={props.onClose} id="close" />
      <ModalWrapper>
        <ModalActions>
          <div className="authorInfo">
            <Avatar
              src={
                props.image.user.profile_image.medium
                  ? props.image.user.profile_image.medium
                  : avatar
              }
              alt="Author sssssProfile Photo"
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
            <button className="btn">
              <FontAwesomeIcon icon={faPlus} />
            </button>
            <a
              className="btn"
              download
              href={`${props.image.links.download}?force=true`}
            >
              Download
            </a>
          </div>
        </ModalActions>

        <ModalImageWrapper>
          <ModalImage
            src={props.image.urls}
            alt={props.image.alt_description}
          />
        </ModalImageWrapper>

        <ExtraInfoWrapper>
          <div className="description">
            <span>{props.image.alt_description}</span>
          </div>
          <button
            className="btn"
            onClick={() => props.displayImageInfo(props.image)}
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            <span>Info</span>
          </button>
        </ExtraInfoWrapper>
      </ModalWrapper>
    </ModalOverlay>,
    document.getElementById("modal-root")
  );
};

export default ImageModal;
