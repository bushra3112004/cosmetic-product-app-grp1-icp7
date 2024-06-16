import "./categoryCard.css"


import { theme } from "./../../configData";
const categoryCard = ({catImg , catName})=>{
    return(<>
        <div className="category-container position-relative col-xs-12 col-lg-4 col-md-6 mt-4 p-3  ">
             <img src={catImg} className="cat-img img-fluid "/>  
             <p className="  fs-2 fw-bolder cat-name subHeadingFont " style={{color : theme.Heading}}>{catName}</p> 
                
        </div>
      
    </>
    
    )
    }
    export default categoryCard;