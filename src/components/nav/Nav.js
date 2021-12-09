import React from "react";

import Search from "../search/Search";
import Avatar from "react-avatar";

import defaultPic from "../../assets/profile.png";

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

      <Avatar
        name="Default"
        src={defaultPic}
        alt="user profile picture"
        round={true}
      />
    </nav>
  );
};
export default Nav;
