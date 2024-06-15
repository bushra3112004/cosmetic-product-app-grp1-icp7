import "./banner.css"
import mainbanner from "./../../views/Home/homeImg/banner3-img.png";
import { theme } from "./../../configData";
const banner = ()=>{
    return(<>
        <div className="banner-container">
                <div>
                    <img src={mainbanner} className="background-img" alt="background" />
                </div>
                <div className="text-on-image">
                    <h5 style={{color: theme.description,fontStyle: "italic"}}>Popularized through customer relationships with some of the world’s most recognizable faces, the “brow revolution” she ignited has become a landmark</h5>
                    <h1 style={{color: theme.Heading}}>Discover Your True Beauty </h1>
                    <button className="btn-discover"> Discover</button>
                </div>
            </div>
      
    </>
    
    )
    }
    export default banner;