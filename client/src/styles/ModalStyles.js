import styled from 'styled-components'

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index:10;
    backdrop-filter: blur(5px);
`;

export const ModalWrapper = styled.div`
    position: relative;
    max-width: 80%;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width:767px){
        max-width: 90%;
    }
    @media only screen and (max-width:1024px){
    }
`;

export const ModalImageWrapper = styled.div`
    position: relative;
    margin: 0 auto;
    max-width: 80%;
    height: 80vh;

    @media only screen and (max-width:767px){
        height: 60vh;
    }
    @media only screen and (max-width:1024px){
    }
`;


export const ModalImage = styled.img.attrs(props => ({
    src: props.src.regular,
    srcSet: `${props.src.full} 1280w,${props.src.regular} 767w,${props.src.small} 300w`,
    alt: props.alt
    }))`
    
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

export const ExtraInfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;   
    padding: 1em 1em .5em 1em;

    @media only screen and (max-width:767px){
        
    }
`;

export const ModalActions = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1em 1em .5em 1em;

    @media only screen and (max-width:767px){
        
    }
`;

export const Avatar = styled.img.attrs(props => ({
    src: props.src,
    alt:props.alt
    }))`
        width: 50px;
        height: 50px;
        border-radius:50%;
        vertical-align: middle;
`;

export const InfoModalOverlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index:20;
    backdrop-filter: blur(5px);
`;

export const InfoWrapper = styled.div`
    position: relative;
    width 40%;
    padding: 1em;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;

    @media only screen and (max-width:767px){
        width: 80%;
    }
`;