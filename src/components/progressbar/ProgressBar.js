import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { ThemeContext } from "../../context/ThemeContext";

const StyledContainer = styled.div`
  margin: 0.75em 0;
`;

const StyledBar = styled.div`
  height: 0.25em;
  background-color: ${({ theme }) => theme.border};
  border-radius: 10px;
  margin-bottom: 0.25em;
`;

const Filler = styled.div`
  height: 100%;
  width: ${(props) => props.completed};
  background-color: ${(props) => props.bgcolor};
  border-radius: inherit;
  transition: 0.4s linear;
  transition-property: width, background-color;
`;
const IndicatorText = styled.p`
  font-size: 0.75em;
  color: ${(props) => props.bgcolor};
`;

const ProgressBar = ({ indicator, message }) => {
  const [completed, setCompleted] = useState("0");
  const [bgcolor, setBgColor] = useState();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (indicator === "100") {
      setCompleted("100%");
      setBgColor(theme.success);
    } else if (indicator === "60") {
      setCompleted("60%");
      setBgColor(theme.warning);
    } else if (indicator === "30") {
      setCompleted("30%");
      setBgColor(theme.error);
    }
  }, [indicator]);

  return (
    <StyledContainer>
      <StyledBar>
        <Filler completed={completed} bgcolor={bgcolor} />
      </StyledBar>
      <IndicatorText bgcolor={bgcolor}>{message}</IndicatorText>
    </StyledContainer>
  );
};
export default ProgressBar;
