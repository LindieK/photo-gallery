import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import breakpoint from "../../common/Breakpoints";

const StyledButton = styled.button`
  color: ${(props) => (props.secondary ? "#504CCA" : "#EEEFF1")};
  background-color: ${(props) => (props.secondary ? "transparent" : "#504CCA")};
  border: 2px solid var(--main-color);
  border-radius: 12px;
  padding: 1em 1.75em;
  margin: 1em 0;
  font-weight: bold;
  font-size: 0.8em;
  cursor: pointer;

  @media only screen and ${breakpoint.device.xlg} {
    font-size: 1.6em;
  }
`;
//TODO: create default font size and font family

const Button = ({ secondary, text, handleClick }) => {
  return (
    <StyledButton secondary={secondary} onClick={handleClick}>
      {text}
    </StyledButton>
  );
};
export default Button;
Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};
