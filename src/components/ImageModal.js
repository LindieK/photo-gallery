import React from 'react'
import ReactDOM from 'react-dom'
import {ModalOverlay, ModalWrapper, ModalImageWrapper, ModalImage, ModalActions, ExtraInfoWrapper, Avatar} from '../styles/ModalStyles'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus, faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import '../styles/ImageModal.css';

const ImageModal = (props) => {

    return ReactDOM.createPortal(
        <ModalOverlay onClick={props.onClose}>
            <ModalWrapper>
                <ModalActions>
                    <div className="authorInfo">
                        <Avatar src={props.image.user.profile_image.small} alt="Author sssssProfile Photo"/>
                        <div className="authorName">
                            <span>{props.image.user.name}</span>
                            <span>{props.image.user.instagram_username ? `@${props.image.user.instagram_username}` : ''}</span>
                        </div>
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
                        <span>{props.image.alt_description}</span>
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