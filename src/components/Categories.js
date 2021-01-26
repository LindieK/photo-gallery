import React, { Component } from 'react'
import '../styles/categories.css'

class Categories extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><a>For You</a></li>
                    <li><a>Potraits</a></li>
                    <li><a>Landscapes</a></li>
                    <li><a>Architecture</a></li>
                    <li><a>People</a></li>
                    <li><a>Nature</a></li>
                </ul>
            </div>
        )
    }
}

export default Categories