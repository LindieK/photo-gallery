import React from "react";
import styled from "styled-components";

import breakpoint from "../../common/Breakpoints";
import Tab from "../tab/Tab";

const CategoryList = styled.ul`
  list-style: none;
  display: inline-flex;
  padding: 0;
  justify-content: space-around;

  @media only screen and ${breakpoint.device.md} {
    width: 100%;
  }
`;

const Categories = ({ setActiveTab, isTabActive }) => {
  const Tabs = [
    { id: 1, title: "For You" },
    { id: 2, title: "People" },
    { id: 3, title: "Technology" },
    { id: 4, title: "Architecture" },
    { id: 5, title: "Travel" },
    { id: 6, title: "Nature" },
  ];

  return (
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
  );
};

export default Categories;
