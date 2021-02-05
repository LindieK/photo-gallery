import React, { Component } from 'react'
import '../styles/categories.css'

class Categories extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li className="active">For You</li>
                    <li>Potraits</li>
                    <li>Landscapes</li>
                    <li>Architecture</li>
                    <li>People</li>
                    <li>Nature</li>
                </ul>
            </div>
        )
    }
}

export default Categories