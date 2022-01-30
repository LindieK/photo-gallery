import React from "react";
import styled from "styled-components";

import breakpoint from "../../common/Breakpoints";

const StyledTab = styled.li`
  color: ${({ theme }) => theme.text38};
  border: 0.5px solid ${({ theme }) => theme.border};
  padding: 0.5em 1.25em;
  margin: 0 0.5em;
  border-radius: 16px;
  font-size: 0.85em;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.primary};
    border: 1px solid ${({ theme }) => theme.primary};
  }

  &.active {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.button};
    font-weight: bold;
    border: none;
  }

  @media only screen and ${breakpoint.device.md} {
    margin: 0;
  }
`;

const Tab = (props) => {
  let classValue = props.isActive ? "active" : "";
  return (
    <StyledTab className={classValue} onClick={props.onTabClick}>
      {props.content}
    </StyledTab>
  );
};

export default Tab;
