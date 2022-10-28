import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ConfirmationModal(props) {
    function handleXbutton (){
        props.closeModal(false)
    }
  return (
    <div className='modalBackground'>
     <Modal show={props.closeModal} onHide={handleXbutton}>
        <Modal.Header closeButton>
          <Modal.Title>Thank you your message</Modal.Title>
        </Modal.Header>
        <Modal.Body>I will contact you soon!!!!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleXbutton}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        
    </div>
  )
}
