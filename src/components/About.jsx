import React from 'react'
import { Row , Col} from 'react-bootstrap'

function About() {
  return (
    <div  style={{width:'90%'}} className='About' id='About'>
        <div className='d-flex justify-content-center align-items-center my-5 ' > 
          <Row className='border ms-5'>
            <Col sm={2}></Col>
          <Col sm={4} className='text-center mt-5' >
                <h1 className='mt-5 mb-4 text-light'> What I Do</h1>
                <p className='text-light'>I am a skilled and Passionate fullstack developer with experience in creating user-friendly websites.  I am professional in HTML, CSS, JavaScript and React</p>
            </Col>
            <Col sm={5} className='my-2 py-3'>
                <ul className='text-light' style={{listStyle:'none'}}>
                    <li className='mt-5 border p-3'>
                   <b> Frontend Developer</b><br></br>
                    I'm a frontend developer with experience in building responsive and optimized sites
                    </li>
                    <li className='mt-3 border p-3'> 
                        <b>UI Designer</b><br></br>
                        I have designed multiple landing pages and have created design systems as well
                    </li>
                </ul>
        </Col>

          </Row>
          
        </div>
    </div>
  )
}

export default About
