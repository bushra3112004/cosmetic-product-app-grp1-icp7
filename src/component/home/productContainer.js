import "./productConatainer.css"
//rfce
import React from 'react'

function productContainer({productImg ,productName ,productPrice ,rating}) {
  return (
    <div className="product-container container">
            
            <div >
                <img src={productImg} className="product-img img-fluid" />
            </div>
            <div className="description-container">
                <p className="product-name">{productName}</p> <br/>
                <p className="product-price">{productPrice}</p> <br/>
                <p className="product-rating">{rating}</p>
            </div>
        </div>
      
  )
}

export default productContainer;