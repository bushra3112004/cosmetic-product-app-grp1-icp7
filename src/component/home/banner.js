import "./banner.css"
import mainbanner from "./../../views/Home/homeImg/banner3-img.png";
import { theme } from "./../../configData";
const banner = ()=>{
    return(<>
        <div className="banner-container d-flex">
                
                <div className="m-2 pt-5 p-2 ">
                <h1 style={{color: theme.primaryColor}} className="p-3">Discover Your True Beauty </h1>
                    <h5 style={{color: theme.description,fontStyle: "italic"}} className="p-2">Popularized through customer relationships with some of the world’s most recognizable faces, the “brow revolution” she ignited has become a landmark</h5> 
                    <button className="btn-discover "> Discover</button>
                </div>
                <div>
                    <img src={mainbanner} className="background-img  rounded float-end" alt="background" />
                </div>
            </div>
      
    </>
    
    )
    }
    export default banner;