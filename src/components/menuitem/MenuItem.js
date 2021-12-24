import React from "react";
import styled from "styled-components";

const StyledMenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1em 0;
`;

const MenuItem = ({ children }) => {
  return <StyledMenuItem>{children}</StyledMenuItem>;
};
export default MenuItem;
