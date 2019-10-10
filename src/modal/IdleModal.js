import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export const IdleTimeOutModal = ({showModal, handleClose, handleLogout, remainingTime}) => {

    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>You Have Been Idle!</Modal.Title>
            </Modal.Header>
            <Modal.Body>You Will Get Timed Out. You want to stay?</Modal.Body>
            <Modal.Footer>
            <Button variant="danger" onClick={handleLogout}>
                Logout
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Stay
            </Button>
            </Modal.Footer>
        </Modal>
    )
}