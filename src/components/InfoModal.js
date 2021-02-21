import React from 'react'
import ReactDOM from 'react-dom'
import {InfoModalOverlay, InfoWrapper} from '../styles/ModalStyles'

 const InfoModal = (props) => {
    let camera = `${props.imageInfo.exif.make} ${props.imageInfo.exif.model}`;
    let resolution = `${props.imageInfo.width} x ${props.imageInfo.height}`;

    return ReactDOM.createPortal(
        <InfoModalOverlay onClick={props.onClose}>
            <InfoWrapper>
                <p>Upload Date: {props.imageInfo.updated_at}</p>
                <p>Image Resolution: {resolution}</p>
                <p>Camera: {camera}</p>
                <p>Downloads: {props.downloads}</p>
            </InfoWrapper>
        </InfoModalOverlay>
        ,document.getElementById('info-root')
    )
}

export default InfoModal
