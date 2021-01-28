import styled, {keyframes} from 'styled-components'


const loadingAnimation= keyframes`
    0%, 100%{
        background-color: #fff;
    }
    50%{
        background-color: #ccc;
    }
`;

export const ImageWrapper= styled.div`
    position: relative;    
    width: 100%;
    height:30vw;

    @media only screen and (max-width:767px){
        height: 50vw;
    }
`;

export const Placeholder= styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    animation:${loadingAnimation} 5s cubic-bezier(0.4, 0, 1, 1) infinite;
`;

export const StyledImage = styled.img`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;