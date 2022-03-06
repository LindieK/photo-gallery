import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import breakpoint from "../../common/Breakpoints";
import { ErrorMessage } from "../../common/CommonStyles";

const StyledInputContainer = styled.div`
  margin: 1em 0;
  display: flex;
  flex-direction: column;
`;

const StyledInputLabel = styled.label`
  font-weight: bold;
  font-size: 0.75em;
  color: ${({ theme }) => theme.text87};
  margin-bottom: 0.5em;

  @media only screen and ${breakpoint.device.xlg} {
    font-size: 1.5em;
  }
`;

const StyledInput = styled.input`
  border: 1px solid
    ${(props) =>
      props.hasError
        ? ({ theme }) => theme.error
        : ({ theme }) => theme.border};
  background-color: transparent;
  border-radius: 8px;
  padding: 0.75em;
  font-size: 1em;

  &:focus {
    border: 2px solid #504cca;
    outline: none !important;
    background-color: ${({ theme }) => theme.panel};
  }

  &::placeholder {
    color: ${({ theme }) => theme.text38};
  }

  @media only screen and ${breakpoint.device.xlg} {
    border-width: 2px;
    font-size: 2em;
    border-radius: 20px;

    &:focus {
      border-width: 4px;
    }
  }
`;

//TODO: create different component specifically for type= file

const Input = ({
  name,
  label,
  type,
  error,
  hasError,
  placeholderText,
  handleChange,
  handleBlur,
}) => {
  return (
    <StyledInputContainer>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledInput
        name={name}
        type={type}
        placeholder={placeholderText}
        onChange={handleChange}
        onBlur={handleBlur}
        hasError={hasError}
      />
      {hasError && <ErrorMessage>{error}</ErrorMessage>}
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
  handleBlur: PropTypes.func,
};
