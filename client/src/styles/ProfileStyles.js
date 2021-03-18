import styled from 'styled-components';

export const CollectionBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1em;
    padding: 1em;
    margin: 0 auto;

    @media only screen and (max-width:767px){
        grid-template-columns: 1fr;
    }
    @media only screen and (min-width:768px) and (max-width: 992px){
        grid-template-columns: 1fr 1fr;
    }
`;

export const CollectionWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 20vh;
`;

export const Avatar = styled.img.attrs(props => ({
    src: props.src,
    alt: props.alt
}))`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    vertical-align: middle;

`;

export const Header = styled.header`
    padding: 0 auto;
    display: flex;
`;

export const UserInfo = styled.div`
    width: 20vw;
    padding: 0 1em;
    margin: auto 0;
`;