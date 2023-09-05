import React from 'react';

import './Modal.css'

const Modal = ({content, displayModal, setDisplayModal}) => {

    const closeModal = () => {
        setDisplayModal(false);
    }

    return (
        <>
            {
                displayModal && 
                <div className='modal'>
                    <div className="modal-wrapper">
                        <span className="modal-close-button" onClick={(e) => closeModal(e)}>X</span>
                        <span className="modal-message">{content}</span>
                    </div>
                </div>
            }
        </>
    );
};

export default Modal;