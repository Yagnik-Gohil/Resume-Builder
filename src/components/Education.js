import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {MdEdit} from 'react-icons/md';
import {GiGraduateCap} from 'react-icons/gi';

function Education() {
  return (
    <Row className="justify-content-center mt-2">
        <Col md={8} sm={12} className="d-flex justify-content-between align-items-center bg-light rounded">
            <h5 className="m-0">Education</h5>
            <MdEdit size={30} className="rounded edit"/>
        </Col>
        <Col md={8} sm={12}>
            <Row className="border-bottom pt-3">

              <Col md={12} className="d-flex justify-content-start">
                <GiGraduateCap size={50} className="rounded color-blue bg-grey p-1 shadow-sm"/>
                <div className="px-3">
                  <h5 className="m-0">Government engineering college Bhavnagar</h5>
                  <p className="text-muted m-0">Bachelor of Engineering • Computer Engineering</p>
                  <p className="text-muted">2017 - 2021</p>
                </div>

              </Col>

            </Row>

        </Col>
    </Row>
  )
}

export default Education