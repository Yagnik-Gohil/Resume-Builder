import React , { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {MdEdit, MdClose} from 'react-icons/md';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function About() {

    const [about, setAbout] = useState("Write about yourself");
    const handleAbout = (e) => {
        setAbout(e.target.value)
    }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Row className="justify-content-center mt-2">
        <Col md={8} sm={12} className="d-flex justify-content-between align-items-center bg-light rounded">
            <h5 className="m-0">About</h5>
            <MdEdit size={30} className="rounded edit" onClick={handleShow}/>
        </Col>
        <Col md={8} sm={12}>
            <p className="py-2">
            {about}
            </p>
        </Col>
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header>
                <Modal.Title>About</Modal.Title>
                <MdClose size={30} className="rounded edit" onClick={handleClose}/>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Control as="textarea" rows={6} placeholder="Write about yourself" value={about} onChange={handleAbout}/>
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <button type="submit" className="rounded edit px-2" onClick={handleClose}>
                    Save Changes
                </button>
            </Modal.Footer>
        </Modal>
    </Row>
  )
}

export default About