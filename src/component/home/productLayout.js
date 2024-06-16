import "./productLayout.css"
import ProductList from "./productList";
import ProductContainer from "./productContainer";

function productLayout(){
     
    return (
      <>
      <div className="product-container">
       {
        ProductList.map((productObject , i)=>{
            const {
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
       </div>
      </>
    )

}

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
    export default productLayout;