import styled from 'styled-components'

export const GridBox = styled.div`
    position: relative;
    top: 14em;
    width:75vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1em;
    padding: 1em;
    margin: 0 auto;

    @media only screen and (max-width:767px){
        grid-template-columns: 1fr;
        top: 10em;
        width: 90vw;
    }
    @media only screen and (min-width:768px) and (max-width: 992px){
        grid-template-columns: 1fr 1fr;
        top: 12em;
    }
`;

export const SearchEmptyState = styled.div`
    position: relative;
    top: 14em;
    width: 75vw;
    height: 50vh;
    margin: 0 auto;
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
`;

export const ResultsIcon = styled.img.attrs(props => ({
    src: props.src,
    alt: props.alt
}))`
    width: 10vw;
    height: 10vw;
`;

export const ResultsMsg = styled.div`
    font-size: 1.25em;
    color: #c4c4c4;
`;