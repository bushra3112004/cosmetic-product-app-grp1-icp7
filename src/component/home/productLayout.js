// App.js
import React from 'react';
import ProductList from "./productList";
import ProductContainer from './productContainer';

const productLayout= () => {
  return (
    <div className="product-list row">
      {ProductList.map((productObject, i) => {
        const { productImg, 
            productName,
             productPrice,
              rating } = productObject
        
        return (
          <ProductContainer
            key={i}
            productImg={productImg}
            productName={productName}
            productPrice={productPrice}
            rating={rating}
        
          />
        )
      })}
    </div>
  )
}

export default productLayout;



/*import "./productLayout.css"
import ProductList from "./productList";
import ProductContainer from "./productContainer";

function productLayout(){
     
    return (
      <>
      
       {
        ProductList.map((productObject , i)=>{
            const {
                productImg,
                rating,
                productName,
                productPrice 
            }= productObject

            return (
                
                <ProductContainer
                key={i} 
                productImg={productImg} 
                productName={productName}
                productPrice={productPrice}
                rating={rating}
             />
    
            )
        })
       }
    
      </>
    )

}
export default productLayout*/
 
/*const productLayout = ({productImg , rating , productName ,productPrice })=>{
    
        
    return(<>
   ProductList.map((productObject , i)) => {
            const {
                productImg ,
                rating,
                productName,
                productPrice
            }= productObject

        })
        <ProductContainer
           key={i} 
           productImg={productImg} 
           productName={productName}
           productPrice={productPrice}
           rating={rating}
        />
   

    )
    </>
    }*/
    