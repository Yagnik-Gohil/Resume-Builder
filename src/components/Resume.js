import React, { Fragment } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {MdEdit} from 'react-icons/md';

function Resume() {
  return (
    <Fragment>

        <Container fluid className="p-0 top-image"></Container>
        <Container className="min-vh-100">

            <Row className="justify-content-center">
                <Col md={8} sm={12} className="d-flex justify-content-between">
                    <img src="./images/profile.jpg" className="profile-image" alt="..."></img>
                    
                    <MdEdit size={30} className="rounded edit"/>
                    
                </Col>
            </Row>

        </Container>
    </Fragment>
  )
}

export default Resume