import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

import Modal from "./Modal";
import breakpoint from "../../common/Breakpoints";

const StyledTitle = styled.div`
  margin-bottom: 0.75em;

  h2 {
    color: ${({ theme }) => theme.text87};
    margin: 0.25em 0;
  }
  span {
    font-size: 0.8em;
    color: ${({ theme }) => theme.text60};
  }
`;

const StatContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.75em 0;

  @media only screen and (${breakpoint.device.md}) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const StyledStat = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1.25em 0.5em;

  .icon {
    font-size: 2em;
  }
  .text {
    margin-left: 1.25em;

    h3 {
      color: ${({ theme }) => theme.text87};
      margin: 0;
    }
    span {
      color: ${({ theme }) => theme.text60};
      font-size: 0.8em;
    }
  }
`;

const InfoModal = ({ imageInfo, onClose }) => {
  let datePubllished = `${imageInfo.created_at}`.substring(0, 10);

  return ReactDOM.createPortal(
    <Modal isInfo={true} handleClick={onClose}>
      <StyledTitle>
        <h2>Info</h2>
        <span>published on {datePubllished}</span>
      </StyledTitle>

      <StatContainer>
        <StyledStat>
          <FontAwesomeIcon icon={faDownload} className="icon" />
          <div className="text">
            <h3>{imageInfo.downloads}</h3>
            <span>downloads</span>
          </div>
        </StyledStat>
        <StyledStat>
          <FontAwesomeIcon icon={faThumbsUp} className="icon" />
          <div className="text">
            <h3>{imageInfo.likes}</h3>
            <span>likes</span>
          </div>
        </StyledStat>
      </StatContainer>
    </Modal>,
    document.getElementById("info-root")
  );
};
export default InfoModal;
