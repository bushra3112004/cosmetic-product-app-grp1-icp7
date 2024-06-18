import React from 'react'
import "./testimonialCard.css"
import Background from "./../../views/Home/homeImg/bg1.jpg"
import { theme } from '../../configData'

function testimonialCards({clientName , clientSay}) {
  return (
    <div class="image-container">
    <img src={Background} alt="Image" className='test-img'/>
    <div class="text-container text-overlay d-flex ">
      <p className='headingFont fs-3' style={{color:theme.primaryColor}}> Testimonials</p> 
      <p className='subHeadingFont fs-5'> What Our Clients Say</p>
      <div className=''>
      <p className='descriptionFont'>{clientSay}</p>
      <p className='descriptionFont'> - {clientName}</p>
      </div>
    </div>
</div>
  )
}

export default testimonialCards