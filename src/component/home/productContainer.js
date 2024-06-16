import "./productConatainer.css"
//rfce
import React from 'react'

function productContainer() {
  return (
    <div className="product-container">
            
            <div >
                <img src={productImg} />
            </div>
            <div>
                <p>{productName}</p> <br/>
                <p>{productPrice}</p> <br/>
                <p>{rating}</p>
            </div>
        </div>
      
  )
}

export default productContainer