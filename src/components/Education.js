import React , { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {MdAddCircleOutline,MdEdit, MdClose, MdDelete} from 'react-icons/md';
import {GiGraduateCap} from 'react-icons/gi';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {ImCheckmark,ImCross} from 'react-icons/im'

function Education() {
  const [show, setShow] = useState(false);
  const [Alert, setAlert] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAlertClose = () => setAlert(false);
  const handleAlert = () => setAlert(true);

  return (
    <Row className="justify-content-center mt-2">
        <Col md={8} sm={12} className="d-flex justify-content-between align-items-center bg-light rounded">
            <h5 className="m-0">Education</h5>
            <MdAddCircleOutline size={30} className="rounded edit" onClick={handleShow}/>
        </Col>
        <Col md={8} sm={12}>
            <Row className="border-bottom pt-3">

              <Col md={10} className="d-flex justify-content-start">
                <GiGraduateCap size={50} className="rounded color-blue bg-grey p-1 shadow-sm"/>
                <div className="px-3">
                  <h5 className="m-0">Government engineering college Bhavnagar</h5>
                  <p className="text-muted m-0">Bachelor of Engineering • Computer Engineering</p>
                  <p className="text-muted">2017 - 2021</p>
                </div>

              </Col>
              <Col md={2}>
                <div className="d-flex flex-wrap">
                  <MdEdit size={30} className="rounded edit" onClick={handleShow}/>
                  <MdDelete size={30} className="rounded edit" onClick={handleAlert}/>
                  
                </div>
              </Col>

            </Row>

        </Col>
        <Modal show={show} onHide={handleClose} centered scrollable={true}>
            <Modal.Header>
                <Modal.Title>Experience</Modal.Title>
                <MdClose size={30} className="rounded edit" onClick={handleClose}/>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>School / College</Form.Label>
                      <Form.Control type="email" size="sm" placeholder="Ex: Government Engineering College" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Degree</Form.Label>
                      <Form.Control type="email" size="sm" placeholder="Ex: Bachelor of Engineering" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Field of study</Form.Label>
                      <Form.Control type="email" size="sm" placeholder="Ex: Computer Engineering" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Row>
                        <Col>
                          <Form.Label>Start Month - Year</Form.Label>
                          <div className="d-flex flex-wrap">
                              <DropdownButton id="dropdown-basic-button" title="Month">
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                              </DropdownButton>
                              <span className="mx-2"></span>
                              <DropdownButton id="dropdown-basic-button" title="Year">
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                              </DropdownButton>

                          </div>
                        </Col>
                        <Col>
                          <Form.Label>End Month - Year</Form.Label>
                          <div className="d-flex flex-wrap">
                              <DropdownButton id="dropdown-basic-button" title="Month">
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                              </DropdownButton>
                              <span className="mx-2"></span>
                              <DropdownButton id="dropdown-basic-button" title="Year">
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                              </DropdownButton>

                          </div>
                        </Col>
                      </Row>
                      
                    </Form.Group>
                    
                    
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <button type="submit" className="rounded edit px-2" onClick={handleClose}>
                    Save Changes
                </button>
            </Modal.Footer>
        </Modal>
        <Modal show={Alert} onHide={handleAlertClose} className="text-center" size="sm" centered>
          <Modal.Body>
            <h4>Are you sure ?</h4>
            <ImCheckmark size={30} className="rounded edit"/>
            <ImCross size={25} className="rounded edit" onClick={handleAlertClose}/>
          </Modal.Body>
        </Modal>
    </Row>
  )
}

export default Education