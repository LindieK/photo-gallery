import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledInput = styled.input`
  border: 1px solid #9e9ea0;
  border-radius: 8px;
  padding: 0.5em;
  font-size: 18px;

  &:focus {
    border: 2px solid #504cca;
    outline: none !important;
    background-color: #dcdbf4;
  }
`;
//TODO: create different component specifically for type= file

const Input = ({ name, type, placeholderText, handleChange }) => {
  return (
    <StyledInput
      name={name}
      type={type}
      placeholder={placeholderText}
      onChange={handleChange}
    />
  );
};
export default Input;
Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholderText: PropTypes.string,
  handleChange: PropTypes.func,
};
