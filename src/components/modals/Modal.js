import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import breakpoint from "../../common/Breakpoints";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  z-index: ${(props) => (props.isInfo ? "20" : "10")};
`;

const ModalWrapper = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.background};
  border-radius: 10px;
  padding: 1em;
  min-width: 50vw;

  @media only screen and (${breakpoint.device.md}) {
    min-width: 30vw;
  }
`;

const ExitBlock = styled.div`
  display: flex;
  justify-content: flex-end;

  svg {
    cursor: pointer;
  }
`;

const Modal = ({ isInfo, handleClick, children }) => {
  return (
    <ModalOverlay isInfo={isInfo} onClick={isInfo ? handleClick : undefined}>
      <ModalWrapper>
        <ExitBlock>
          <FontAwesomeIcon icon={faTimes} onClick={handleClick} />
        </ExitBlock>
        {children}
      </ModalWrapper>
    </ModalOverlay>
  );
};
export default Modal;
