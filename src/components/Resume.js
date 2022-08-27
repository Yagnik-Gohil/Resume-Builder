import React, { Fragment } from 'react'
import Container from 'react-bootstrap/Container';
import Profile from './Profile';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';

function Resume() {
  return (
    <Fragment>

      <Container fluid className="p-0 top-image"></Container>
      <Container className="min-vh-100">

        <Profile></Profile>

        <About></About>

        <Experience></Experience>

        <Education></Education>

        <Skills></Skills>



        <div className="d-grid col-6 mx-auto my-4">
          <button className="btn btn-secondary" type="button">Download</button>
        </div>

      </Container>
    </Fragment>
  )
}

export default Resume