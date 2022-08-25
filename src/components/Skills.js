import React , { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {MdEdit, MdClose} from 'react-icons/md';
import {GiGraduateCap} from 'react-icons/gi';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Skills() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Row className="justify-content-center mt-2">
        <Col md={8} sm={12} className="d-flex justify-content-between align-items-center bg-light rounded">
            <h5 className="m-0">Skills</h5>
            <MdEdit size={30} className="rounded edit" onClick={handleShow}/>
        </Col>
        <Col md={8} sm={12}>
            <Row className="pt-3">

              <Col md={12} className="d-flex flex-wrap">
                <p className="technology rounded"><GiGraduateCap/>&nbsp; React</p>
                <p className="technology rounded"><GiGraduateCap/>&nbsp; React</p>
                <p className="technology rounded"><GiGraduateCap/>&nbsp; React</p>
                <p className="technology rounded"><GiGraduateCap/>&nbsp; React</p>
                <p className="technology rounded"><GiGraduateCap/>&nbsp; React</p>
                <p className="technology rounded"><GiGraduateCap/>&nbsp; React</p>
                <p className="technology rounded"><GiGraduateCap/>&nbsp; React</p>
                <p className="technology rounded"><GiGraduateCap/>&nbsp; React</p>
                <p className="technology rounded"><GiGraduateCap/>&nbsp; React</p>
                <p className="technology rounded"><GiGraduateCap/>&nbsp; React</p>
                <p className="technology rounded"><GiGraduateCap/>&nbsp; React</p>
                <p className="technology rounded"><GiGraduateCap/>&nbsp; React</p>
                <p className="technology rounded"><GiGraduateCap/>&nbsp; React</p>
                <p className="technology rounded"><GiGraduateCap/>&nbsp; React</p>

              </Col>

            </Row>

        </Col>
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header>
                <Modal.Title>Skills</Modal.Title>
                <MdClose size={30} className="rounded edit" onClick={handleClose}/>
            </Modal.Header>

            <Modal.Body>
                <Form className="d-flex flex-wrap">
                    <Form.Group className="mb-3 mx-2" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="react" />
                    </Form.Group>
                    <Form.Group className="mb-3 mx-2" controlId="formBasicCheckbox1">
                      <Form.Check type="checkbox" label="html" />
                    </Form.Group>
                    <Form.Group className="mb-3 mx-2" controlId="formBasicCheckbox2">
                      <Form.Check type="checkbox" label="css" />
                    </Form.Group>
                    <Form.Group className="mb-3 mx-2" controlId="formBasicCheckbox3">
                      <Form.Check type="checkbox" label="js" />
                    </Form.Group>
                    <Form.Group className="mb-3 mx-2" controlId="formBasicCheckbox4">
                      <Form.Check type="checkbox" label="node" />
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

export default Skills