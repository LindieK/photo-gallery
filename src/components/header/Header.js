import React from "react";

import Categories from "../categories/Categories";

const Header = (props) => {
  const { setActiveTab, isTabActive } = props;
  return (
    <header>
      <Categories setActiveTab={setActiveTab} isTabActive={isTabActive} />
    </header>
  );
};
export default Header;
