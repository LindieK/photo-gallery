import React, { Component } from 'react'
import '../styles/search.css'


class Search extends Component {
    

    render() {
        const {searchTerm, handleSearchTermChange, handleFormSubmit} = this.props;
        const pattern = /[^-!$%^&*()_+|~=`{}[\]:";'<>?,./\n ]+/;
        return (
            <form onSubmit={handleFormSubmit}>
                <input type='text' placeholder='Search' value={searchTerm} onChange={handleSearchTermChange} pattern={pattern} title="Must be letters and/or numbers only"/>
            </form>
        )
    }
}

export default Search