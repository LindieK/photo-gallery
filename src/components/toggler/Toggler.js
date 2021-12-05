import React, { useContext } from "react";
import styled from "styled-components";

import { ThemeContext } from "../../context/ThemeContext";

const Toggle = styled.button``;

const Toggler = ({ ...props }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Toggle {...props}>{theme.modeIcon}</Toggle>
    </>
  );
};
export default Toggler;
