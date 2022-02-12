import React from "react";
import styled from "styled-components";

const SpinnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-items: center;
  align-items: center;
  height: 50vh;
`;
const SpinnerCircle = styled.div`
  height: 2em;
  width: 2em;
  margin: 0 auto;
  background: ${({ theme }) => theme.primary20};
  border-radius: 50%;
  transform: scale(0);
  background: ${({ theme }) => theme.primary};
  opacity: 1;
  animation: spinner 800ms linear infinite;

  @keyframes spinner {
    to {
      transform: scale(1.5);
      opacity: 0;
    }
  }
`;

const Spinner = () => {
  return (
    <SpinnerContainer>
      <SpinnerCircle />
    </SpinnerContainer>
  );
};
export default Spinner;
