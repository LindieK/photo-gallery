import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import ProgressBar from "../progressbar/ProgressBar";
import { ErrorMessage } from "../../common/CommonStyles";
import breakpoint from "../../common/Breakpoints";

const StyledPasswordInputContainer = styled.div`
  margin: 1em 0;
  display: flex;
  flex-direction: column;
`;

const StyledPasswordInputLabel = styled.label`
  font-weight: bold;
  font-size: 0.75em;
  color: ${({ theme }) => theme.text87};
  margin-bottom: 0.5em;

  @media only screen and ${breakpoint.device.xlg} {
    font-size: 1.5em;
  }
`;

const StyledPasswordInput = styled.input`
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

const PasswordInput = ({
  name,
  label,
  placeholderText,
  error,
  hasError,
  passwordStrength,
  handleChange,
  handleBlur,
}) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (passwordStrength === "100") {
      setMessage("Okay!");
    } else if (passwordStrength === "60") {
      setMessage("Getting Warm");
    } else if (passwordStrength === "30") {
      setMessage("Too Easy!");
    }
  }, [passwordStrength]);
  return (
    <StyledPasswordInputContainer>
      <StyledPasswordInputLabel>{label}</StyledPasswordInputLabel>
      <StyledPasswordInput
        name={name}
        type="password"
        placeholder={placeholderText}
        onChange={handleChange}
        onBlur={handleBlur}
        hasError={hasError}
      />
      {hasError ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        passwordStrength && (
          <ProgressBar indicator={passwordStrength} message={message} />
        )
      )}
    </StyledPasswordInputContainer>
  );
};
export default PasswordInput;
PasswordInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  passwordStrength: PropTypes.string,
  placeholderText: PropTypes.string,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
};
