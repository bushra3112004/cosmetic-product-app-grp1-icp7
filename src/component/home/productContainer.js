
//rfce
import React from 'react';
import './productContainer.css'; 

const ProductContainer = ({ productImg, productName, productPrice, rating }) => {
  return (
    <div className="product-card">
      
      <img src={productImg} alt={productName} />
      <div className="product-info">
        <h2>{productName}</h2>
        <p>{productPrice}</p>
        <div className="rating">
          {rating}
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
