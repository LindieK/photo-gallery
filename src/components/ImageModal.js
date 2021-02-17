import React, {useRef} from 'react'
import ReactDOM from 'react-dom'
import {ModalOverlay, ModalWrapper, ModalImageWrapper, ModalImage, ModalActions, ImageInfoWrapper, ImagePlaceholder} from '../styles/ModalStyles'
import LazyLoad from 'react-lazyload'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus, faArrowDown, faTimes} from '@fortawesome/free-solid-svg-icons'

const ImageModal = (props) => {
    let camera = `${props.image.exif.make} ${props.image.exif.model}`
    let resolution = `${props.image.width} x ${props.image.height}`;

    const placeholderRef = useRef(null);

    const removePlaceholder= () => {
        placeholderRef.current.remove();
    }

    return ReactDOM.createPortal(
        <ModalOverlay onClick={props.onClose}>
            <ModalWrapper>
                <ModalImageWrapper>
                    <ImagePlaceholder ref={placeholderRef}/>
                    <LazyLoad>
                        <ModalImage onLoad={removePlaceholder} src={props.image.urls.regular} alt={props.image.alt_description}/>
                    </LazyLoad>
                </ModalImageWrapper>

                <ImageInfoWrapper>
                    <ModalActions>
                        <div className="imageActions">
                            <button>
                                <FontAwesomeIcon icon={faPlus}/>
                                Add Favourites
                            </button>
                            <button>
                                <FontAwesomeIcon icon={faArrowDown}/>
                                Download
                            </button>
                        </div>
                        <button onClick={props.onClose}>
                            <FontAwesomeIcon icon={faTimes}/>
                        </button>
                    </ModalActions>
                    <div className="imageInfo">
                        <p>Image Name: {props.image.alt_description}</p>
                        <p>Upload Date: {props.image.updated_at}</p>
                        <p>Image Resolution: {resolution}</p>
                        <p>Camera: {camera}</p>
                        <p>Downloads: {props.image.downloads}</p>
                        <p>Author: {props.image.user.name}</p>
                    </div>
                </ImageInfoWrapper>
            </ModalWrapper>
        </ModalOverlay>
        ,document.getElementById('modal-root')
    )
}

export default ImageModal