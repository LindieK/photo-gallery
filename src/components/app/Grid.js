import React, { Component } from 'react'
import {GridBox, SearchEmptyState, ResultsIcon, ResultsMsg} from '../../styles/GridBoxStyles'
import LazyImage from './LazyImage'
import icon from '../../image/search-results.svg'

class Grid extends Component {
    
    render() {
        const {photos, query, displayModal} = this.props;
        return (
            <>
                {photos.length === 0 ?
                
                <SearchEmptyState>
                    <ResultsIcon src={icon} alt="Empty Search State Icon" />
                    {query?
                        <ResultsMsg>
                            <p className="error-msg">No results for {query}</p>
                            <p className="error-msg">Try a different search term</p>
                        </ResultsMsg>
                        :
                        <ResultsMsg>
                            <p className="error-msg">Oh my something went wrong. There are no pictures to show you.</p>
                            <p className="error-msg">Try refreshing the page</p>
                        </ResultsMsg>
                    }
                    
                </SearchEmptyState>
                : 
                <GridBox>
                    {photos.map(photo => 
                    <LazyImage key={photo.id} image={photo.urls} alt={photo.alt_description} onImageClick={() => displayModal(photo)}/>
                    )}
                </GridBox>
                }
            </>
        )}
}

export default Grid;
