import React from "react";

import Search from "../search/Search";

const Nav = (props) => {
  const { searchTerm, /*handleSearchTermChange,*/ handleFormSubmit } = props;
  return (
    <nav>
      <h1>PG</h1>
      <Search
        searchTerm={searchTerm}
        //handleSearchTermChange={handleSearchTermChange}
        handleFormSubmit={handleFormSubmit}
      />
    </nav>
  );
};
export default Nav;
