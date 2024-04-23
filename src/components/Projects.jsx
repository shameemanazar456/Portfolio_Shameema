import React from 'react'
import Button from 'react-bootstrap/Button';
import travel from "../components/travel.png"
import findweather from "../components/findweather.png"
import country from "../components/Countrysearch.png"
import rest from "../components/rest.png"
import bmi from "../components/bmi.png"

import './Projects.css'
import Carousel from 'react-bootstrap/Carousel';


function Projects() {
  return (

   <section className='Projects' id='Projects'>
         <h1 className='text-center text-warning'>My Works</h1>

      <Carousel>
        <Carousel.Item>
        <div className='wrapper'>
        <div className='image'>
          <img src={travel} alt="" />
          <div className='content' >
            <h3 className='text-warning'>Travel Website</h3>
            <p className='text-info p-2 bg-light'>A responsive website created using HTML and Bootstrap</p>

            <Button variant="primary"><a href='https://sweet-kitten-ab541c.netlify.app' style={{textDecoration:'none', color:'white'}}>View</a></Button>{' '}      
          </div>
        </div>
      </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className='wrapper'>
        <div className='image'>
          <img src={findweather} alt="" />
          <div className='content' >
            <h3 className='text-warning'>Find Weather</h3>
            <p className='text-info p-2 bg-light'>Project that displays fetch wether details using API Calls</p>

            <Button  variant="primary"><a className='text-light' href='https://guileless-seahorse-d116fb.netlify.app/' style={{textDecoration:'none', color:'white'}}>View</a></Button>{' '}      
          </div>
        </div>
      </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className='wrapper'>
        <div className='image'>
          <img src={country} alt="" />
          <div className='content' >
            <h3 className='text-warning'>Country Details</h3>
            <p className='text-info p-2 bg-light'>Project that displays searched country details by using API calls</p>

            <Button variant="primary"><a href='https://statuesque-pie-a336a8.netlify.app/' style={{textDecoration:'none', color:'white'}}>View</a></Button>{' '}      
          </div>
        </div>
      </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className='wrapper'>
        <div className='image'>
          <img src={rest} alt="" />
          <div className='content' >
            <h3 className='text-warning'>Restaurant</h3>
            <p className='text-info p-2 bg-light'>A simple static website developed using HTML & CSS</p>

            <Button variant="primary"><a href='https://flourishing-meringue-2de4a4.netlify.app' style={{textDecoration:'none', color:'white'}}>View</a></Button>{' '}      
          </div>
        </div>
      </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className='wrapper'>
        <div className='image'>
          <img src={bmi} alt="" />
          <div className='content' >
            <h3 className='text-warning'>BMI Calculator</h3>
            <p className='text-info p-2 bg-light'>A simple React application to calculate BMI</p>
            <Button variant="primary"><a href='https://bmi-calculator-wnft.vercel.app' style={{textDecoration:'none' , color:'white'}}>View</a></Button>{' '}      
          </div>
        </div>
      </div>
        </Carousel.Item>
        
      </Carousel>
   </section>
    
  )
}

export default Projects
