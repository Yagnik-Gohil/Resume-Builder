import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {MdEdit} from 'react-icons/md';
import {GiGraduateCap} from 'react-icons/gi';

function Skills() {
  return (
    <Row className="justify-content-center mt-2">
        <Col md={8} sm={12} className="d-flex justify-content-between align-items-center bg-light rounded">
            <h5 className="m-0">Skills</h5>
            <MdEdit size={30} className="rounded edit"/>
        </Col>
        <Col md={8} sm={12}>
            <Row className="pt-3">

              <Col md={12} className="d-flex flex-wrap">
                <p className="technology shadow-sm rounded"><GiGraduateCap/>&nbsp; React</p>
                <p className="technology shadow-sm rounded"><GiGraduateCap/>&nbsp; React</p>
                <p className="technology shadow-sm rounded"><GiGraduateCap/>&nbsp; React</p>
                <p className="technology shadow-sm rounded"><GiGraduateCap/>&nbsp; React</p>
                <p className="technology shadow-sm rounded"><GiGraduateCap/>&nbsp; React</p>
                <p className="technology shadow-sm rounded"><GiGraduateCap/>&nbsp; React</p>
                <p className="technology shadow-sm rounded"><GiGraduateCap/>&nbsp; React</p>
                <p className="technology shadow-sm rounded"><GiGraduateCap/>&nbsp; React</p>
                <p className="technology shadow-sm rounded"><GiGraduateCap/>&nbsp; React</p>
                <p className="technology shadow-sm rounded"><GiGraduateCap/>&nbsp; React</p>
                <p className="technology shadow-sm rounded"><GiGraduateCap/>&nbsp; React</p>
                <p className="technology shadow-sm rounded"><GiGraduateCap/>&nbsp; React</p>
                <p className="technology shadow-sm rounded"><GiGraduateCap/>&nbsp; React</p>
                <p className="technology shadow-sm rounded"><GiGraduateCap/>&nbsp; React</p>

              </Col>

            </Row>

        </Col>
    </Row>
  )
}

export default Skills