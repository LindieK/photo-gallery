import React from "react";

import Categories from "../categories/Categories";
import Nav from "../nav/Nav";

const Header = (props) => {
  const {
    setActiveTab,
    isTabActive,
    searchTerm,
    handleSearchTermChange,
    handleFormSubmit,
  } = props;
  return (
    <header>
      <Nav
        searchTerm={searchTerm}
        handleSearchTermChange={handleSearchTermChange}
        handleFormSubmit={handleFormSubmit}
      />
      <Categories setActiveTab={setActiveTab} isTabActive={isTabActive} />
    </header>
  );
};
export default Header;
