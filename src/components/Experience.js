import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {MdEdit} from 'react-icons/md';
import {HiOfficeBuilding} from 'react-icons/hi';
import {FaReact} from 'react-icons/fa';

function Experience() {
  return (
    <Row className="justify-content-center mt-2">
        <Col md={8} sm={12} className="d-flex justify-content-between align-items-center bg-light rounded">
            <h5 className="m-0">Experience</h5>
            <MdEdit size={30} className="rounded edit"/>
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
              <Col md={6}>
                <h5>Skills</h5>
                <div className="d-flex flex-wrap">
                  <p className="tag shadow-sm rounded"><FaReact/>&nbsp; React</p>
                  <p className="tag shadow-sm rounded"><FaReact/>&nbsp; React</p>
                  
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
              <Col md={6}>
                <h5>Skills</h5>
                <div className="d-flex flex-wrap">
                  <p className="tag shadow-sm rounded "><FaReact/> React</p>
                  <p className="tag shadow-sm rounded "><FaReact/> React</p>
                  
                </div>
              </Col>

            </Row>

        </Col>
    </Row>
  )
}

export default Experience