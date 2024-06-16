import React from 'react'
import "./featureContainer.css";
//import Naturalbbeauty from "./../../views/Home/homeImg/natural-beauty.png"

const featureContainer= ({featureImg , FeatureTitle})=> {
  return (
    <>
      <div className="feature-container">
           <img src={featureImg} className="feature-img"/> <br/>
           <p className='feature-Title'>{FeatureTitle}</p>
      </div>
    
    </> 
  )
}

export default featureContainer