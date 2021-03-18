import React from 'react'
import ReactDOM from 'react-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowDown} from '@fortawesome/free-solid-svg-icons'
import {InfoModalOverlay, InfoWrapper} from '../styles/ModalStyles'
import '../styles/InfoModal.css'

 const InfoModal = (props) => {
    let resolution = `${props.imageInfo.width} x ${props.imageInfo.height}`;
    let datePubllished = `${props.imageInfo.created_at}`.substring(0, 10)

    return ReactDOM.createPortal(
        <InfoModalOverlay onClick={props.onClose}>
            <InfoWrapper>
                <div id="modalTitle">
                    <h2>Info</h2>
                    <span className="text">Published on {datePubllished}</span>
                </div>
                <div id="downloads">
                    <div className="title">
                        <FontAwesomeIcon icon={faArrowDown} className="icon"/>
                        <span>Downloads</span>
                    </div>
                    <span className="titleValue">{props.imageInfo.downloads ? props.imageInfo.downloads : "N/A"}</span>
                </div>
                <hr/>
                <div id="cameraDetails">
                    <div id="resolution">
                        <span className="text">Resolution</span>
                        <span>{resolution}</span>
                    </div>
                    <div id="cameraMake">
                        <span className="text">Camera Make</span>
                        <span>{props.imageInfo.exif.make ? props.imageInfo.exif.make : "N/A"}</span>
                    </div>
                    <div id="cameraModel">
                        <span className="text">Camera Model</span>
                        <span>{props.imageInfo.exif.model ? props.imageInfo.exif.model : "N/A"}</span>
                    </div>
                    <div id="aperture">
                        <span className="text">Aperture</span>
                        <span>{props.imageInfo.exif.aperture ? props.imageInfo.exif.aperture : "N/A"}</span>
                    </div>
                    <div id="focalLength">
                        <span className="text">Focal Length</span>
                        <span>{props.imageInfo.exif.focal_length ? props.imageInfo.exif.focal_length : "N/A"}</span>
                    </div>
                </div>
                
            </InfoWrapper>
        </InfoModalOverlay>
        ,document.getElementById('info-root')
    )
}

export default InfoModal
