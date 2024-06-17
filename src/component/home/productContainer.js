
//rfce
import React from 'react';
import './productContainer.css'; 

const ProductContainer = ({ productImg, productName, productPrice, rating }) => {
  return (
    <div className='col-xs-12 col-lg-3'>
    <div className="product-card ">
      
      <img src={productImg} alt={productName} className='productImg' />
      <div className="product-info">
        <h3>{productName}</h3>
        <p>Price : {productPrice}</p>
        <div className="">
        Rating : {rating} ⭐
        </div>
      </div>
    </div>
    </div>
  )
};

export default ProductContainer;
