import React, { useContext } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ThemeContext } from "../../context/ThemeContext";

const Toggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const Toggler = ({ ...props }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Toggle {...props}>
        <FontAwesomeIcon
          icon={theme.modeIcon}
          color={theme.text87}
          className="fa-2x"
        />
      </Toggle>
    </>
  );
};
export default Toggler;
