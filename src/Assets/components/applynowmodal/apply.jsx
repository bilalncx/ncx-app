import {React, useState, useEffect} from 'react';
import Modal from 'react-modal';
import './apply.css';
import HubspotForm from 'react-hubspot-form'
import HubspotContactForm from './hubsportaccount';
import { ReactComponent as CloseIcon } from '../../images/close-icon.svg';


const ApplyNowModal = props => {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
    };
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

   return(
        <div>
            <button className='apply-nowbtn' onClick={openModal}>Apply Now</button>
            <Modal
                id="applynow_form"
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="heading_corss">
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Apply Now</h2>
                    <button onClick={closeModal}><CloseIcon /></button>
                </div>
                
                <HubspotContactForm 
                    region="na1"
                    portalId="24207595"
                    formId='d0af61e7-cf62-42cc-91dd-17c0c61696fc'
                />
                <div className='empty-div'></div>
            </Modal>
        </div>
   ) 
}
export default ApplyNowModal;