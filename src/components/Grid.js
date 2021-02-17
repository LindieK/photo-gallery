import React, { Component } from 'react'
import {GridBox} from '../styles/GridBoxStyles'
import LazyImage from './LazyImage'


class Grid extends Component {
    
    render() {
        const {photos, displayModal} = this.props;
        return (
            <GridBox>
                {photos.length ? 
                photos.map(photo => 
                    <LazyImage key={photo.id} image={photo.urls.regular} alt={photo.alt_description} onImageClick={() => displayModal(photo)}/>
                    ) : 
                null
                }
            </GridBox>
        )}
}

export default Grid;
