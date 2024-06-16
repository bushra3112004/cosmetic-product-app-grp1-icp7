import "./productLayout.css"


import { theme } from "./../../configData";
const productLayout = ({productImg , rating , productName ,productPrice })=>{
    return(<>
        <div>
            <div>
                <img src={productImg} />
            </div>
            <div>
                <p>{productName}</p> <br/>
                <p>{productPrice}</p> <br/>
                <p>{rating}</p>
            </div>
        </div>
      
    </>
    
    )
    }
    export default productLayout;