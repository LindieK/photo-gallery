import React, { Component } from 'react'
import '../styles/search.css'


//search call: https://api.unsplash.com/photos/random/?client_id=1e93497bee7b143fe497bd50d3baaac2536d4d7abfc0fea16090aa38614ad135&count=4&query=dogs

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