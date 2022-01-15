import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import breakpoint from "../../common/Breakpoints";
import { ModalOverlay, ModalWrapper } from "../../common/CommonStyles";

const InfoModalOverlay = styled(ModalOverlay)`
  z-index: 20;
`;
const InfoModalWrapper = styled(ModalWrapper)`
  width 40%;
  padding: 1em;

  #modalTitle{
    h2{
      margin: .8em 0 0;
    }
    .text{
      font-size: .8em;
      color: #767676;
      display: block;
      margin-bottom: .2em;
    }
  }

  #downloads{
    padding: 1em 0;

    .titleValue{
      font-size: 1.25em;
    }
    span{
      font-size: .8em;
      margin-left: .25em;
    }

    .icon{
      margin-right: .25em;
      font-size: .8em;
    }
  }

  hr{
    color: #d1d1d1;
  }

  #cameraDetails{
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    div{
      padding: .5em;
    }
  }

  @media only screen and (${breakpoint.device.sm}){
    width: 80%;
  }
`;

const InfoModal = (props) => {
  let resolution = `${props.imageInfo.width} x ${props.imageInfo.height}`;
  let datePubllished = `${props.imageInfo.created_at}`.substring(0, 10);

  return ReactDOM.createPortal(
    <InfoModalOverlay onClick={props.onClose}>
      <InfoModalWrapper>
        <div id="modalTitle">
          <h2>Info</h2>
          <span className="text">Published on {datePubllished}</span>
        </div>
        <div id="downloads">
          <div className="title">
            <FontAwesomeIcon icon={faArrowDown} className="icon" />
            <span>Downloads</span>
          </div>
          <span className="titleValue">
            {props.imageInfo.downloads ? props.imageInfo.downloads : "N/A"}
          </span>
        </div>
        <hr />
        <div id="cameraDetails">
          <div id="resolution">
            <span className="text">Resolution</span>
            <span>{resolution}</span>
          </div>
          <div id="cameraMake">
            <span className="text">Camera Make</span>
            <span>
              {props.imageInfo.exif.make ? props.imageInfo.exif.make : "N/A"}
            </span>
          </div>
          <div id="cameraModel">
            <span className="text">Camera Model</span>
            <span>
              {props.imageInfo.exif.model ? props.imageInfo.exif.model : "N/A"}
            </span>
          </div>
          <div id="aperture">
            <span className="text">Aperture</span>
            <span>
              {props.imageInfo.exif.aperture
                ? props.imageInfo.exif.aperture
                : "N/A"}
            </span>
          </div>
          <div id="focalLength">
            <span className="text">Focal Length</span>
            <span>
              {props.imageInfo.exif.focal_length
                ? props.imageInfo.exif.focal_length
                : "N/A"}
            </span>
          </div>
        </div>
      </InfoModalWrapper>
    </InfoModalOverlay>,
    document.getElementById("info-root")
  );
};

export default InfoModal;
