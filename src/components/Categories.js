import React, { Component } from 'react'
import '../styles/categories.css'

class Categories extends Component {
    render() {
        const Tabs =["For You", "Portraits", "Landscapes", "Architecture", "Profile", "Nature"];
        return (
            <div>
                <ul>
                    {Tabs.map(tab => <li>{tab}</li>)}
                </ul>
            </div>
        )
    }
}

export default Categories