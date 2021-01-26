import React from 'react'
import styled from 'styled-components'
import LazyImage from './LazyImage'

const GridBox = styled.div`
    position: relative;
    top: 139px;
    width:70vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1em;
    padding: 1em;
    margin: 0 auto;


`;


export default function Grid() {
    return (
        <GridBox>
            <LazyImage />
            <LazyImage />
            <LazyImage />
            <LazyImage />
            <LazyImage />
            <LazyImage />
            <LazyImage />
            <LazyImage />
            <LazyImage />
        </GridBox>
    )
}
