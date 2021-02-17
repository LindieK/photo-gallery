import styled from 'styled-components'
import {loadingAnimation} from './ImagesStyles'

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index:10;
`;

export const ModalWrapper = styled.div`
    position: relative;
    min-width: 60vw;
    min-height: 40vw;
    background-color: rgb(225, 225, 225);
    border-radius: 20px;
    display: flex;

    @media only screen and (max-width:767px){
        flex-direction: column;
    }
`;

export const ModalImageWrapper = styled.div`
    position: relative;
    width:50vw;
    min-height: 40vw;
    display: flex;
    flex-direction: row;
    border-radius: 20px 0 0 20px;

    @media only screen and (max-width:767px){
        flex-direction: column;
}
`;

export const ImagePlaceholder = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px 0 0 20px;
    animation:${loadingAnimation} 5s cubic-bezier(0.4, 0, 1, 1) infinite;
`;

export const ModalImage = styled.img.attrs(props => ({
    src: props.src,
    alt: props.alt,
    }))`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px 0 0 20px;
`;

export const ImageInfoWrapper = styled.div`
    width: 50%;
    padding: 1.25em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: rgb(255, 255, 255);
    border-radius: 0 20px 20px 0;

    @media only screen and (max-width:767px){
        width: 100%;
    }
`;

export const ModalActions = styled.div`
    display: flex;
    justify-content: space-between;
`;