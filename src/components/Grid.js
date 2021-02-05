import React, { Component } from 'react'
import {GridBox} from '../styles/GridBoxStyles'
import LazyImage from './LazyImage'
import {getInitialPics} from '../Api'



class Grid extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             photos: []
        }
    }

    
    componentDidMount(){
        getInitialPics().then(response => {
            this.setState({
                photos: response.data
            })
        })
    }

    
    render() {
        const {photos} = this.state;
        return (
            <GridBox>
                {photos.length ? 
                photos.map(photo => 
                    <LazyImage key={photo.id} image={photo.urls.regular} alt={photo.alt_description}/>
                    ) : 
                null
                }
            </GridBox>
        )}
}

export default Grid;
