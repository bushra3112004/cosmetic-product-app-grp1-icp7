import "./banner.css"
import mainbanner from "./../../views/Home/homeImg/banner3-img.png";
import { theme } from "./../../configData";
import Button from "./../../component/ButtonBox/ButtonBox"
const banner = ()=>{
    return(<>
        <div className=" container banner-container">
                <img src={mainbanner} className="background-img "/>
               < div className="description-container   ">
             <h1 style={{color: theme.primaryColor}} className="p-3 headingFont">Discover Your True Beauty </h1>
              <h5 style={{color: theme.description,fontStyle: "italic"}} className="p-2 descriptionFont">Popularized through customer relationships with some of the world’s most recognizable faces, the “brow revolution” she ignited has become a landmark</h5> 
             <Button text="Discover"  />   
              </div> 
         </div>
      
    </>
    
    )
    }
    export default banner;
   /* <div className="  m-2 pt-5 p-2 col-xs-12 ">
    <h1 style={{color: theme.primaryColor}} className="p-3">Discover Your True Beauty </h1>
        <h5 style={{color: theme.description,fontStyle: "italic"}} className="p-2">Popularized through customer relationships with some of the world’s most recognizable faces, the “brow revolution” she ignited has become a landmark</h5> 
        <button className="btn-discover "> Discover</button>
    </div>
    <div className="col-xs-12 ">
        <img src={mainbanner} className="background-img  rounded float-end" alt="background" />
    </div>*/