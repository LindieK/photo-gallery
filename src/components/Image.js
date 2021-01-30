import React from 'react'
import {StyledImage} from '../styles/ImagesStyles'

export default function Image(props) {
    return (
        <StyledImage  src={props.image}/>
    )
}
