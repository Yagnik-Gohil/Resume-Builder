import React from 'react'

function SkillList() {

  const list = []

  return (
    <Fragment>
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
    </Fragment>
  )
}

export default SkillList