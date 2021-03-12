import React, {useRef} from 'react'
import {ImageWrapper, Placeholder, StyledImage} from '../styles/ImagesStyles'
import LazyLoad from 'react-lazyload'


const LazyImage = (props) => {
    const placeholderRef = useRef(null);

    const removePlaceholder= () => {
        placeholderRef.current.remove();
    }
    return (
        <ImageWrapper key={props.id}>
            <Placeholder ref={placeholderRef}/>
            <LazyLoad>
                <StyledImage key={props.id} src={props.image} alt={props.alt} onLoad={removePlaceholder} onError={removePlaceholder} onClick={props.onImageClick}/>
            </LazyLoad>
        </ImageWrapper>
    ) 
}

export default LazyImage