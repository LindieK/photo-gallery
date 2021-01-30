import React from 'react'
import {GridBox} from '../styles/GridBoxStyles'
import LazyImage from './LazyImage'
import {library}from '../ImageLibrary'




export default function Grid() {
    return(
        <GridBox>
            {library.map(image => (
                <LazyImage key={image.id} image={`https://picsum.photos/1000/1000?random=${image.id}`} />
            ))}
        </GridBox>
    )
}
