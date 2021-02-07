import React, { Component } from 'react'
import '../styles/categories.css'
import Tab from './Tab'

class Categories extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             selectedTab: 1
        }

    }

    isTabActive(id){
        return this.state.selectedTab === id;
    }


    setActiveTab(selectedTabId){
        this.setState({
            selectedTab: selectedTabId
        })
    }

    render() { 
        const Tabs =[
            {id: 1, title: "For You"}, 
            {id: 2, title: "Portraits"}, 
            {id: 3, title: "Landscapes"}, 
            {id: 4, title: "Architecture"}, 
            {id: 5, title: "Profile"}, 
            {id: 6, title: "Nature"}
        ];

        return (
            <div>
                <ul>
                    {Tabs.map((tab) => <Tab key={tab.id} content={tab.title} isActive={this.isTabActive(tab.id)} onTabClick={() => this.setActiveTab(tab.id)}/> )}
                </ul>
            </div>
        )
    }
}

export default Categories