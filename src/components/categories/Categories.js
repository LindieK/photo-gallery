import React from "react";

import "../../styles/categories.css";
import Tab from "../tab/Tab";

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
      <ul>
        {Tabs.map((tab) => (
          <Tab
            key={tab.id}
            content={tab.title}
            isActive={isTabActive(tab.id)}
            onTabClick={() => setActiveTab(tab.id, tab.title)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Categories;
