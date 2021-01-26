import React from 'react'
import Search from './Search'
import Categories from './Categories'
import '../styles/nav.css'

export default function Nav() {
    return (
        <header>
            <div className='Nav'>
                <h1>PHOTO GALLERY</h1>
                <Search />
            </div>
            <Categories />
        </header>
    )
}
