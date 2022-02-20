import React from "react";
import styled from "styled-components";

import breakpoint from "../../common/Breakpoints";
import Tab from "../tab/Tab";

const CategoryContainer = styled.div`
  width: 100vw;
  position: relative;
  padding: 2em 0;
  overflow: auto;
  white-space: nowrap;

  @media only screen and ${breakpoint.device.md} {
    width: 85vw;
    margin: 0 auto;
    padding: 3em 0;
    top: ${(props) => (props.currentUser ? "3em" : "unset")};
  }

  @media only screen and ${breakpoint.device.lg} {
    width: 70vw;
  }
`;

const CategoryList = styled.ul`
  list-style: none;
  display: inline-flex;
  padding: 0;
  justify-content: space-around;

  @media only screen and ${breakpoint.device.md} {
    width: 100%;
  }
`;

const Categories = ({ setActiveTab, isTabActive, currentUser }) => {
  const Tabs = [
    { id: 1, title: "For You" },
    { id: 2, title: "People" },
    { id: 3, title: "Technology" },
    { id: 4, title: "Architecture" },
    { id: 5, title: "Travel" },
    { id: 6, title: "Nature" },
  ];

  return (
    <CategoryContainer>
      <CategoryList>
        {Tabs.map((tab) => (
          <Tab
            key={tab.id}
            content={tab.title}
            isActive={isTabActive(tab.id)}
            onTabClick={() => setActiveTab(tab.id, tab.title)}
          />
        ))}
      </CategoryList>
    </CategoryContainer>
  );
};

export default Categories;
