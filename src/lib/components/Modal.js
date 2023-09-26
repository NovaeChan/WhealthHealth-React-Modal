import React from 'react';

//style
import './Modal.css'

/**
 * 
 * @component
 * @returns {JSX.Element} The rendered modal component
 */
const Modal = ({content, displayModal, setDisplayModal}) => {

    /**
     * Function to close the modal
     * @returns {void}
     */
    const closeModal = () => {
        setDisplayModal(false);
    }

    return (
        <>
            {
                displayModal && 
                <section className='overlay'>
                    <div className='modal'>
                        <div className="modal-wrapper">
                            <span className="modal-close-button" onClick={(e) => closeModal(e)}>X</span>
                            <span className="modal-message">{content}</span>
                        </div>
                    </div>
                </section>
                
            }
        </>
    );
};

export default Modal;