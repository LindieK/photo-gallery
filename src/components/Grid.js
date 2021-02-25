import React, { Component } from 'react'
import {GridBox, SearchEmptyState, ResultsIcon} from '../styles/GridBoxStyles'
import LazyImage from './LazyImage'
import icon from '../image/search-results.svg'

class Grid extends Component {
    
    render() {
        const {photos, query, displayModal} = this.props;
        return (
            <>
                {photos.length > 0 ?
                
                <GridBox>
                    {photos.map(photo => 
                    <LazyImage key={photo.id} image={photo.urls} alt={photo.alt_description} onImageClick={() => displayModal(photo)}/>
                    )}
                </GridBox>
                 : 
                <SearchEmptyState>
                    <ResultsIcon>
                        <img src={icon} alt="Empty Search State Icon"/>
                    </ResultsIcon>
                    <p>No results for {query}</p>
                    <p>Try a different search term</p>
                </SearchEmptyState>
                }
            </>
        )}
}

export default Grid;
