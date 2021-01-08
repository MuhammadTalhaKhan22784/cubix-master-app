import React from 'react'
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import ContactForm from '../Utills/ContactForm';

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton size="lg">
            </Modal.Header>
            <Modal.Body>
                <ContactForm isSmallHeading="false" />
            </Modal.Body>

        </Modal>
    );
}


export default MyVerticallyCenteredModal
