import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdAddCircleOutline, MdEdit, MdClose, MdDelete } from 'react-icons/md';
import { HiOfficeBuilding } from 'react-icons/hi';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { ImCheckmark, ImCross } from 'react-icons/im'
import Months from '../smallComponents/Months';
import Years from '../smallComponents/Years';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

function Experience() {

  const experienceList = useSelector(state => state.experienceList)
  const dispatch = useDispatch();
  const {addExperience, editExperience, removeExperience} = bindActionCreators(actionCreators, dispatch);

  const [show, setShow] = useState(false);
  const [Alert, setAlert] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleClose = () => {
    setValidated(false);
    setShow(false);
    setForm({
      id:"",
      title: "",
      company: "",
      isWorking: false,
      startMonth: "",
      startYear: "",
      endMonth: "",
      endYear: "",
      location: "",
      description: "",
      isEdit: false
    })
  }
  const handleShow = () => setShow(true);
  const handleAlertClose = () => setAlert(false);
  const handleAlert = (id) => {
    setDeleteId(id)
    setAlert(true);
  }


  // const [list, setList] = useState([]);
  const [form, setForm] = useState({
    id:"",
    title: "",
    company: "",
    isWorking: false,
    startMonth: "",
    startYear: "",
    endMonth: "",
    endYear: "",
    location: "",
    description: "",
    isEdit:false
  });
  const handleForm = (e) => {
    setForm((old) => {
      return {
        ...old,
        [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
      }
    })
  }


  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const valid = event.currentTarget;
    if(!valid.checkValidity()){
      setValidated(true);
    }
    else{
      if(form.isEdit){
        editExperience(form);
        // list[form.id] = form;
        // setList(list);
      }
      else{
        addExperience(form)
        // const newList = list.concat({ ...form });
        // setList(newList);
      }
      setShow(false);
      setForm({
        id:"",
        title: "",
        company: "",
        isWorking: false,
        startMonth: "",
        startYear: "",
        endMonth: "",
        endYear: "",
        location: "",
        description: "",
        isEdit: false
      })
    }
    
  }

  const handleEdit = (id) => {
    const form = experienceList[id];
    form.isEdit = true;
    form.id = id
    setForm(form)
    setShow(true);
  }

  const handleDelete = (id) => {
    removeExperience(id);
    // list.splice(id, 1);
    // setList(list);
    setAlert(false);
  }

  return (
    <Row className="justify-content-center mt-2">
      <Col md={8} sm={12} className="d-flex justify-content-between align-items-center bg-light rounded">
        <h5 className="m-0">Experience</h5>
        <MdAddCircleOutline size={30} className="rounded edit" onClick={handleShow} />
      </Col>
      <Col md={8} sm={12}>
        { 
          experienceList.map((item,id) => {
              return (
                <Row className="border-bottom pt-3" key={id}>
                  <Col md={10} className="d-flex justify-content-start">
                    <HiOfficeBuilding size={50} className="rounded color-blue bg-grey shadow-sm p-1" />
                    <div className="px-3">
                      <h5 className="m-0">{item.title}</h5>
                      <p className="text-muted m-0">{item.company} • {item.startMonth} {item.startYear} {`${item.isWorking ? " - Present" : " - "+item.endMonth+" "+item.endYear }`}</p>
                      <p className="text-muted m-0">{item.location}</p>
                      <p>{item.description}</p>
                    </div>

                  </Col>
                  <Col md={2}>
                    <div className="d-flex flex-wrap justify-content-end">
                      <MdEdit size={30} className="rounded edit" onClick={() => {handleEdit(id)}}/>
                      <MdDelete size={30} className="rounded edit" onClick={() => {handleAlert(id)}}/>
                    </div>
                  </Col>
                </Row>
              )
            })
        }

      </Col>
      <Modal show={show} onHide={handleClose} centered scrollable={true} backdrop="static">
        <Modal.Header>
          <Modal.Title>Experience</Modal.Title>
          <MdClose size={30} className="rounded edit" onClick={handleClose} />
        </Modal.Header>

        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control required type="text" size="sm" placeholder="Ex: React Developer" name="title" value={form.title} onChange={handleForm} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Company Name</Form.Label>
              <Form.Control required type="text" size="sm" placeholder="Ex: Amazon" name="company" value={form.company} onChange={handleForm} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="I am currently working in this role" name="isWorking" checked={form.isWorking} onChange={handleForm} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col>
                  <Row>
                    <Form.Label>Start Month - Year</Form.Label>
                  </Row>
                  <Row>
                    <Col>
                      <select title={form.startMonth} name="startMonth"  value={form.startMonth} onChange={handleForm} className="form-select">
                        <Months/>
                      </select>
                    </Col>
                    <Col>
                      <select title={form.startYear} name="startYear" value={form.startYear} onChange={handleForm} className="form-select">
                        <Years/>
                      </select>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>

                    <Col>
                      <Row>
                        <Form.Label>End Month - Year</Form.Label>
                      </Row>
                      <Row>
                        <Col>
                          <select title={form.endMonth} name="endMonth" value={form.endMonth} onChange={handleForm} disabled={form.isWorking} className="form-select">
                            <Months />
                          </select>
                        </Col>
                        <Col>
                          <select title={form.endYear} name="endYear" value={form.endYear} onChange={handleForm} disabled={form.isWorking} className="form-select">
                            <Years/>
                          </select>
                        </Col>
                      </Row>

                    </Col>

                  </Row>




                </Col>
              </Row>

            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control required type="text" size="sm" placeholder="Ex: Pune, India" name="location" value={form.location} onChange={handleForm} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control required type="text" size="sm" placeholder="Ex: Worked as a Front-End Developer" name="description" value={form.description} onChange={handleForm} />
            </Form.Group>
            <button type="submit" className="rounded edit px-2">
              Save Changes
            </button>

          </Form>
        </Modal.Body>

      </Modal>
      <Modal show={Alert} onHide={handleAlertClose} className="text-center" size="sm" centered>
        <Modal.Body>
          <h4>Are you sure ?</h4>
          <ImCheckmark size={30} className="rounded edit" onClick={() => {handleDelete(deleteId)}}/>
          <ImCross size={25} className="rounded edit" onClick={handleAlertClose} />
        </Modal.Body>
      </Modal>
    </Row>
  )
}

export default Experience