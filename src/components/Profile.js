import React, { Fragment, useState  } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {MdEdit, MdClose} from 'react-icons/md';
import {HiLocationMarker,HiOfficeBuilding} from 'react-icons/hi';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Profile() {

    const [file, setFile] = useState("./images/profile.jpg");
    function handleFile(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    const [profile,setProfile] = useState({
        name: "Your Name",
        location: "City, Name",
        position: "Your Position",
        tagline: "Describe yourself in one line"
    })

    const handleProfile = (e) => {
        setProfile((old)=>{
            return {
                ...old,
                [e.target.name]:e.target.value
            }
        })
    }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    
    <Fragment>
        <Row className="justify-content-center">
            <Col md={8} sm={12} className="d-flex justify-content-between img-column">
                <img src={file} className="profile-image" alt="..."></img>
                
                <MdEdit size={30} className="rounded edit" onClick={handleShow}/>
            </Col>
        </Row>
        <Row className="justify-content-center mt-2">
            <Col md={8} sm={12}>
                <h4>{profile.name}</h4>
            </Col>
            <Col md={8} sm={12} className="d-flex justify-content-start">
                <HiLocationMarker size={30} className="p-1"/><p className="p-1 m-0">{profile.location}</p>
                <HiOfficeBuilding size={30} className="p-1"/><p className="p-1 m-0">{profile.position}</p>
            </Col>
            <Col md={8} sm={12}>
                <p className="px-2">{profile.tagline}</p>
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
                        <Form.Control type="email" name="name" size="sm" placeholder="Your Name" value={profile.name} onChange={handleProfile}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" name="location" size="sm" placeholder="City, Country" value={profile.location} onChange={handleProfile}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" name="position" size="sm" placeholder="Your Position" value={profile.position} onChange={handleProfile}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" name="tagline" size="sm" placeholder="Describe yourself in one line" value={profile.tagline} onChange={handleProfile}/>
                    </Form.Group>
                    <Form.Group controlId="formFileSm" className="mb-3">
                        <Form.Label>Profile Picture</Form.Label>
                        <Form.Control type="file" size="sm" onChange={handleFile}/>
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