import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCalendarDay, faCalendarDays, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
FontAwesomeIcon
faCalendarDays


function Footer() {
  return (
    <div>
       <footer className='mt-5 Footer' id='Footer'>
       <Row>
        <Col sm={12} md={4}>
        <div className='mt-3 p-5'>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" placeholder='Enter your Message' rows={2} />
      </Form.Group>
    <button className='btn btn-success'>Send</button>
    </Form>
        </div>
        </Col>
        <Col sm={12} md={4}>
        <div className='mt-3 p-5'>
        <h4>Personal Details</h4>
        <p><FontAwesomeIcon icon={faPhone} className='me-1'/><i>+919645224371</i></p>
        <p><FontAwesomeIcon icon={faEnvelope} className='me-1' /><i>shameemanazar456@gmail.com</i></p>
        <p><FontAwesomeIcon icon={faCalendarDays} className='me-1' /><i>DOB: 07 Aug 1996</i></p>


        <div className="d-flex justify-content-center mt-5 mb-3  ">
    <a className="btn btn-light me-3" href="https://github.com/shameemanazar456" role="button"
    ><FontAwesomeIcon icon={faGithub} /></a>
    <a className="btn btn-light me-3" href="https://github.com/shameemanazar456" role="button"
    ><FontAwesomeIcon icon={faLinkedin} /></a>
    </div>

        </div>
        </Col>
        <Col sm={12} md={4} className='mt-3 p-5'>
        <div className=''>
        <h4 className='mb-3'>Important Links</h4>
        <h6><a href="#Home" className=' mb-5'>Home</a></h6>
       <h6> <a href="#About" className=' mb-4'>Skills</a></h6>
       <h6> <a href="#Projects" className=' mb-4'>Projects</a></h6>
        </div>
        </Col>
       </Row>
        
       </footer>

    </div>
  )
}

export default Footer
