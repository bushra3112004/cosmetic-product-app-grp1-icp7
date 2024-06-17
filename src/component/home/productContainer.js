
//rfce
import React from 'react';
import './productContainer.css'; 

const ProductContainer = ({ productImg, productName, productPrice, rating }) => {
  return (
    <div className="product-card">
      
      <img src={productImg} alt={productName} className='productImg' />
      <div className="product-info">
        <h3>{productName}</h3>
        <p>{productPrice}</p>
        <div className="rating">
        <span className=''>Rating </span>  {rating}
        </div>
      </div>
    </div>
  )
};

export default ProductContainer;
