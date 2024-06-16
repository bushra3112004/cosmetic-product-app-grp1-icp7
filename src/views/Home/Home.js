import React from 'react'
import Cat1 from "./homeImg/skinCare2.jpg"
import Cat2 from "./homeImg/meakUp.jpg"
import Cat3 from "./homeImg/hairCare.jpg"
import Banner from "./../../component/home/banner"
import CategoryCard from '../../component/home/categoryCard';
import { theme } from "./../../configData";
import  Button  from "./../../component/ButtonBox/ButtonBox"
import ProductLayout from '../../component/home/productLayout'
//import Navbar from "./../../component/Navbar/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
function Home() {
  return (<>
   
   <Banner/>
   <div className='row  mx-3 '>
   <CategoryCard catImg={Cat1} 
      catName={<Button text="Skin Care" /> } />

   <CategoryCard catImg={Cat2} 
      catName={<Button text="Make Up"/> } />

   <CategoryCard catImg={Cat3} 
      catName={<Button text="Hair Care"/> }/>
   </div>
   <div className='text-center mt-2'>
    <span className='fs-1 headingFont'style={{color:theme.primaryColor}}>BEST SELLERS PRODUCTS</span> <br/>
    <span className='fs-3 subHeadingFont'style={{color:theme.description,fontStyle: "italic"}} >The stylish and organized cosmetic products</span>
  </div>

  <ProductLayout/>
    </>
  )
}

export default Home;

//