import React from 'react';
import './productFeature.css'; 
import { theme } from '../../configData';
import FeatureImg from "./../../views/Home/homeImg/featureImg.jpg"
import Button from '../ButtonBox/ButtonBox';

const ProductFeature = () => {
  return (
    <div className="feature-container">
      <div className="feature-image">
        <img src={FeatureImg} alt="Product" />
      </div>
      <div className="feature-text">
        <h2 className="feature-title headingFont  fs-1" style={{color:theme.primaryColor}}>Features</h2>
        <h1 className="feature-heading subHeadingFont" style={{color:theme.description,fontStyle: "italic"}}>Only High Quality Products</h1>
        <p className="feature-description descriptionFont">
          Popularized through customer relationships with some of the world’s most recognizable faces, the “brow revolution” she ignited has become a landmark contribution to beauty history. In 2014, debuted its new color makeup line on Instagram, cultivating a relationship with customers.
        </p>
       <Button text="Explore More" />
       
      </div>
    </div>
  );
};

export default ProductFeature;
