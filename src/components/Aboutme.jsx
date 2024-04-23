import React from 'react'
import Button from 'react-bootstrap/Button';
import cv from '../components/shameema_resume.pdf'



function Aboutme() {
  return (
    <section className='Home' id='Home'>
    <div className='text-center  d-flex justify-content-center align-items-center flex-column ' style={{ backgroundImage:'url(https://www.shutterstock.com/image-illustration/elegant-futuristic-light-reflection-grid-600nw-536582824.jpg)', backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'bottom  '}}>
    <div className='text-light d-flex justify-content-center align-items-center mt-5 flex-column' style={{height:'75vh', width:'55%'}}>
      <h1>Hi, I'm <span className='' style={{color:'#63057D'}}>Shameema O N</span> </h1>
      <h2 className='mb-3'>FullStack Developer</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia et tempora ullam magni itaque perspiciatis doloremque accusamus, ut est facere ducimus ipsa ad magnam, quas rem suscipit? Suscipit, quibusdam quaerat!</p>
      <Button className='mt-3' variant="light"><b><a href={cv} download style={{textDecoration:'none'}}>Download CV</a></b></Button>
    </div>
    </div>
    </section>
  )
}

export default Aboutme
