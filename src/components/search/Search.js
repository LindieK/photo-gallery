import React, { Component } from "react";
import "./Search.scss";

class Search extends Component {
  render() {
    const { searchTerm, /*handleSearchTermChange,*/ handleFormSubmit } =
      this.props;
    const pattern = /[^\n ]+/;
    return (
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          //onChange={handleSearchTermChange}
          pattern={pattern}
          title="Must be letters and/or numbers only"
          required
        />
      </form>
    );
  }
}

export default Search;
