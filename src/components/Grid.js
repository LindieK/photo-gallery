import React, { Component } from 'react'
import {GridBox} from '../styles/GridBoxStyles'
import LazyImage from './LazyImage'
import axios from 'axios'


const clientID = "1e93497bee7b143fe497bd50d3baaac2536d4d7abfc0fea16090aa38614ad135";
const numberOfPhotos = 30;
const url = "https://api.unsplash.com/photos/random/?client_id=" + clientID + "&count=" + numberOfPhotos;


class Grid extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             photos: []
        }
    }

    
    componentDidMount(){
        axios.get(url)
        .then(response => {
            this.setState({
                photos: response.data
            })
        })
        .catch()
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
