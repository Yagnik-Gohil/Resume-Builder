import React, { Fragment } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {MdEdit} from 'react-icons/md';
import {HiLocationMarker,HiOfficeBuilding} from 'react-icons/hi';

function Profile() {
  return (
    
    <Fragment>
        <Row className="justify-content-center">
            <Col md={8} sm={12} className="d-flex justify-content-between img-column">
                <img src="./images/profile.jpg" className="profile-image" alt="..."></img>
                
                <MdEdit size={30} className="rounded edit"/>
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
    </Fragment>
    
  )
}

export default Profile