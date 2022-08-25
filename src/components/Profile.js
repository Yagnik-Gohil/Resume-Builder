import React, { Fragment, useState  } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {MdEdit, MdClose} from 'react-icons/md';
import {HiLocationMarker,HiOfficeBuilding} from 'react-icons/hi';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Profile() {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    
    <Fragment>
        <Row className="justify-content-center">
            <Col md={8} sm={12} className="d-flex justify-content-between img-column">
                <img src="./images/profile.jpg" className="profile-image" alt="..."></img>
                
                <MdEdit size={30} className="rounded edit" onClick={handleShow}/>
            </Col>
        </Row>
        <Row className="justify-content-center mt-2">
            <Col md={8} sm={12}>
                <h4>Your Name</h4>
            </Col>
            <Col md={8} sm={12} className="d-flex justify-content-start">
                <HiLocationMarker size={30} className="p-1"/><p className="p-1 m-0">City, Country</p>
                <HiOfficeBuilding size={30} className="p-1"/><p className="p-1 m-0">Your Position</p>
            </Col>
            <Col md={8} sm={12}>
                <p className="px-2">Describe yourself in one line</p>
            </Col>
        </Row>
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header>
                <Modal.Title>Profile Details</Modal.Title>
                <MdClose size={30} className="rounded edit" onClick={handleClose}/>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Control type="email" size="sm" placeholder="Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" size="sm" placeholder="City, Country" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" size="sm" placeholder="Your Position" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" size="sm" placeholder="Describe yourself in one line" />
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <button type="submit" className="rounded edit px-2" onClick={handleClose}>
                    Save Changes
                </button>
            </Modal.Footer>
        </Modal>
    </Fragment>
    
  )
}

export default Profile