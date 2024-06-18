import "./categoryCard.css"
import { Link } from 'react-router-dom'

import { theme } from "./../../configData";
const categoryCard = ({catImg , catName})=>{
    return(<>
        <div className="category-container container-fluid position-relative col-xs-12 col-lg-4 col-md-6 mt-4 p-3  ">
             <img src={catImg} className="cat-img img-fluid "/>  
             <Link to="./../Product"><p className="  fs-4 fw-bolder cat-name subHeadingFont " style={{color : theme.Heading}}>{catName}</p> </Link>
                
        </div>
        
      
    </>
    
    )
    }
    export default categoryCard;