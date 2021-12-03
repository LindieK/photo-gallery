import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledInputContainer = styled.div`
  margin: 1em 0;
  display: flex;
  flex-direction: column;
`;

const StyledInputLabel = styled.label`
  font-weight: bold;
  font-size: 0.75em;
  color: #333333;
  margin-bottom: 0.5em;
`;

const StyledInput = styled.input`
  border: 1px solid #9e9ea0;
  border-radius: 8px;
  padding: 0.75em;
  font-size: 18px;

  &:focus {
    border: 2px solid #504cca;
    outline: none !important;
    background-color: #dfdef9;
  }
`;
//TODO: create different component specifically for type= file

const Input = ({ name, label, type, placeholderText, handleChange }) => {
  return (
    <StyledInputContainer>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledInput
        name={name}
        type={type}
        placeholder={placeholderText}
        onChange={handleChange}
      />
    </StyledInputContainer>
  );
};
export default Input;
Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholderText: PropTypes.string,
  handleChange: PropTypes.func,
};
