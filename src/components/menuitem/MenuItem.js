import React from "react";
import styled from "styled-components";

const StyledMenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1em 0;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text87};
    width: 100%;
  }
`;

const MenuItem = ({ children }) => {
  return <StyledMenuItem>{children}</StyledMenuItem>;
};
export default MenuItem;
