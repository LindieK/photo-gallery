import React, { Component } from 'react'
import '../styles/categories.css'

class Categories extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             activeTab: ""
        }
    }
    
    onTabClick = (tab)=> {
        this.setState({
            activeTab: tab
        })
    }

    render() {
        const Tabs =["For You", "Portraits", "Landscapes", "Architecture", "Profile", "Nature"];
        return (
            <div>
                <ul>
                    {Tabs.map(tab => <li key={tab} onClick={this.onTabClick}>{tab}</li>)}
                </ul>
            </div>
        )
    }
}

export default Categories