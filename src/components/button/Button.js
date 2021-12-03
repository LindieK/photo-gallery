import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  color: ${(props) => (props.secondary ? "#504CCA" : "#EEEFF1")};
  background-color: ${(props) => (props.secondary ? "transparent" : "#504CCA")};
  border: 2px solid #504cca;
  border-radius: 12px;
  padding: 1em 1.75em;
  margin: 0.5em 0;
  font-weight: bold;
  font-size: 0.8em;
  cursor: pointer;
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
