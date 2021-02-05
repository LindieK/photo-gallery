import React, { Component } from 'react'
import '../styles/search.css'


class Search extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            query: '' 
        }
    }
    
    handleSearchTermChange = (event) => {
        this.setState({
            query: event.target.value
        })
    }

    render() {
        return (
            <form>
                <input type='text' placeholder='Search' value={this.state.searchTerm} onChange={this.handleSearchTermChange}/>
            </form>
        )
    }
}

export default Search