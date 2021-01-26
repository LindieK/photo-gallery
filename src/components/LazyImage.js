import React from 'react'
import styled, {keyframes} from 'styled-components'
/*import LazyLoad from 'react-lazyload'*/


const loadingAnimation= keyframes`
    0%, 100%{
        background-color: #fff;
    }
    50%{
        background-color: #ccc;
    }
`;

const ImageWrapper= styled.div`
    position: relative;    
    width: 100%;
    height:30vw;
`;

const Placeholder= styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    animation:${loadingAnimation} 5s cubic-bezier(0.4, 0, 1, 1) infinite;
`;

/*const StyledImage = styled.img`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;*/

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