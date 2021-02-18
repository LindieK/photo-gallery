import React from 'react'
import ReactDOM from 'react-dom'
import {ModalOverlay, ModalWrapper, ModalImageWrapper, ModalImage, ModalActions, ExtraInfoWrapper} from '../styles/ModalStyles'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus, faArrowDown, faInfoCircle, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import '../styles/ImageModal.css';

const ImageModal = (props) => {
    let camera = `${props.image.exif.make} ${props.image.exif.model}`;
    let resolution = `${props.image.width} x ${props.image.height}`;
    const isMobile = window.innerWidth < 480;


    return ReactDOM.createPortal(
        <ModalOverlay onClick={props.onClose}>
            {/*
                    <div className="imageInfo">
                        <p>Image Name: {props.image.alt_description}</p>
                        <p>Upload Date: {props.image.updated_at}</p>
                        <p>Image Resolution: {resolution}</p>
                        <p>Camera: {camera}</p>
                        <p>Downloads: {props.image.downloads}</p>
                        <p>Author: {props.image.user.name}</p>
                    </div>
                */}
            <ModalWrapper>
                <ModalActions>
                    <div className="authorInfo">

                    </div>

                    <div className="imageActions">
                        <button className="btn">
                            <FontAwesomeIcon icon={faPlus}/>
                        </button>
                        <button className="btn" value="">
                        Download
                        </button>
                    </div>
                </ModalActions>
                
                <ModalImageWrapper>
                    <ModalImage src={props.image.urls.regular} alt={props.image.alt_description}/>
                </ModalImageWrapper>
                
                <ExtraInfoWrapper>
                    <div className="description">
                        <p>{props.image.alt_description}</p>
                    </div>
                    <button className="btn">
                        <FontAwesomeIcon icon={faInfoCircle}/>
                        <span>Info</span>
                    </button>             
                </ExtraInfoWrapper>
            </ModalWrapper>
        </ModalOverlay>
        ,document.getElementById('modal-root')
    )
}

export default ImageModal