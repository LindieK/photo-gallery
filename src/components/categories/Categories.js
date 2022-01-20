import React from "react";
import styled from "styled-components";

import breakpoint from "../../common/Breakpoints";
import Tab from "../tab/Tab";

const CategoryList = styled.ul`
  list-style: none;
  display: inline-flex;
  width: 100vw;
  padding: 0;
  overflow: auto;
  white-space: nowrap;

  @media only screen and ${breakpoint.device.md} {
    justify-content: space-around;
  }

  li {
    color: #6f788a;
    padding: 1em;
    cursor: pointer;

    &:hover {
      color: black;
    }

    @media only screen and ${breakpoint.device.md} {
      padding: 1em 1.25em;
    }
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
    <div>
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
    </div>
  );
};

export default Categories;
