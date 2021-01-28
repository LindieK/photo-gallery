import React from 'react'
import {ImageWrapper, Placeholder} from '../styles/ImagesStyles'
/*import LazyLoad from 'react-lazyload'*/



const LazyImage = () => {
    return (
        <ImageWrapper>
            <Placeholder />
            {/*<LazyLoad>
                <StyledImage src={src} alt={alt} />
            </LazyLoad>*/}
        </ImageWrapper>
    )
}

export default LazyImage