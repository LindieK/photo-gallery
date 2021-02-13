import React, { Component } from 'react'
import '../styles/search.css'


class Search extends Component {
    

    render() {
        const {searchTerm, handleSearchTermChange, handleFormSubmit} = this.props;
        return (
            <form onSubmit={handleFormSubmit}>
                <input type='text' placeholder='Search' value={searchTerm} onChange={handleSearchTermChange} />
            </form>
        )
    }
}

export default Search