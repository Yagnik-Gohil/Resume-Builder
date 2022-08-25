import React , { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {MdAddCircleOutline,MdEdit, MdClose, MdDelete} from 'react-icons/md';
import {HiOfficeBuilding} from 'react-icons/hi';
import {FaReact} from 'react-icons/fa';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {ImCheckmark,ImCross} from 'react-icons/im'

function Experience() {
  const [show, setShow] = useState(false);
  const [Alert, setAlert] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAlertClose = () => setAlert(false);
  const handleAlert = () => setAlert(true);

  return (
    <Row className="justify-content-center mt-2">
        <Col md={8} sm={12} className="d-flex justify-content-between align-items-center bg-light rounded">
            <h5 className="m-0">Experience</h5>
            <MdAddCircleOutline size={30} className="rounded edit" onClick={handleShow}/>
        </Col>
        <Col md={8} sm={12}>
            <Row className="border-bottom pt-3">

              <Col md={6} className="d-flex justify-content-start">
                <HiOfficeBuilding size={50} className="rounded color-blue bg-grey shadow-sm p-1"/>
                <div className="px-3">
                  <h5 className="m-0">Jr. Software Engineer</h5>
                  <p className="text-muted m-0">TatvaSoft • Jul 2021 - Apr 2022</p>
                  <p className="text-muted m-0">Ahmedabad, Gujarat, India</p>
                  <p>Worked as Full stack web developer.</p>
                </div>

              </Col>
              <Col md={4}>
                <h5>Skills</h5>
                <div className="d-flex flex-wrap">
                  <p className="tag rounded "><FaReact/> React</p>
                  <p className="tag rounded "><FaReact/> React</p>
                  
                </div>
              </Col>
              <Col md={2}>
                <div className="d-flex flex-wrap">
                  <MdEdit size={30} className="rounded edit" onClick={handleShow}/>
                  <MdDelete size={30} className="rounded edit" onClick={handleAlert}/>
                  
                </div>
              </Col>

            </Row>
            <Row className="border-bottom pt-3">

              <Col md={6} className="d-flex justify-content-start">
                <HiOfficeBuilding size={50} className="rounded color-blue bg-grey shadow-sm p-1"/>
                <div className="px-3">
                  <h5 className="m-0">Jr. Software Engineer</h5>
                  <p className="text-muted m-0">TatvaSoft • Jul 2021 - Apr 2022</p>
                  <p className="text-muted m-0">Ahmedabad, Gujarat, India</p>
                  <p>Worked as Full stack web developer.</p>
                </div>

              </Col>
              <Col md={4}>
                <h5>Skills</h5>
                <div className="d-flex flex-wrap">
                  <p className="tag rounded "><FaReact/> React</p>
                  <p className="tag rounded "><FaReact/> React</p>
                  <p className="tag rounded "><FaReact/> React</p>
                  <p className="tag rounded "><FaReact/> React</p>
                  <p className="tag rounded "><FaReact/> React</p>
                  
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
                      <Form.Label>Title</Form.Label>
                      <Form.Control type="email" size="sm" placeholder="Ex: React Developer" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Company Name</Form.Label>
                      <Form.Control type="email" size="sm" placeholder="Ex: Amazon" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="I am currently working in this role" />
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
                    <Form.Group className="mb-3">
                      <Form.Label>Location</Form.Label>
                      <Form.Control type="email" size="sm" placeholder="Ex: Pune, India" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Description</Form.Label>
                      <Form.Control type="email" size="sm" placeholder="Ex: Worked as a Front-End Developer" />
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

export default Experience