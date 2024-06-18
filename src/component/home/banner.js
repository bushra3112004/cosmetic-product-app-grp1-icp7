import {Link} from "react-router-dom"
import React from 'react'
import "./banner.css"
import mainbanner from "./../../views/Home/homeImg/banner3-img.png";
import { theme } from "./../../configData";
import Button from "./../../component/ButtonBox/ButtonBox"
const banner = ()=>{
    return(<>
        <div className="  banner-container pt-5">
                <img src={mainbanner} className="background-img "/>
               < div className="description-container  pt-5 ">
             <h1 style={{color: theme.primaryColor}} className="p-3 headingFont">Discover Your True Beauty </h1>
              <h5 style={{color: theme.description,fontStyle: "italic"}} className="p-2 descriptionFont">Popularized through customer relationships with some of the world’s most recognizable faces, the “brow revolution” she ignited has become a landmark</h5> 
              <Link to="./../Product" >  <Button text="Discover"  />  </Link> 
              </div> 
         </div>
      
    </>
    
    )
    }
    export default banner
   