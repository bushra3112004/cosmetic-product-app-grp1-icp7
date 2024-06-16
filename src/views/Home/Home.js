import React from 'react'
import Cat1 from "./homeImg/skinCare2.jpg"
import Cat2 from "./homeImg/meakUp.jpg"
import Cat3 from "./homeImg/hairCare.jpg"
import Banner from "./../../component/home/banner"
import CategoryCard from '../../component/home/categoryCard';
import { theme } from "./../../configData";
// import 'bootstrap/dist/css/bootstrap.min.css';
function Home() {
  return (<>
   <Banner/>
   <div className='row  mx-3 '>
   <CategoryCard catImg={Cat1} 
      catName="Skin Care" />

   <CategoryCard catImg={Cat2} 
      catName="Make Up" />

   <CategoryCard catImg={Cat3} 
      catName="Hair Care" />
 </div>
 <div className='text-center mt-2'>
    <span className='fs-1 'style={{color:theme.primaryColor}}>BEST SELLERS PRODUCTS</span> <br/>
 <span className='fs-3'style={{color:theme.description,fontStyle: "italic"}} >The stylish and organized cosmetic products</span>
 </div>
    </>
  )
}

export default Home

//