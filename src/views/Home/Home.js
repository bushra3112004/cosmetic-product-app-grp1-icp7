import React from 'react'
import { useEffect } from 'react';
import {Link} from "react-router-dom"
import { Toaster,toast } from "react-hot-toast"
import Cat1 from "./homeImg/skinCare2.jpg"
import Cat2 from "./homeImg/meakUp.jpg"
import Cat3 from "./homeImg/hairCare.jpg"
import Banner from "./../../component/home/banner"
import CategoryCard from '../../component/home/categoryCard';
import { theme } from "./../../configData";
import Button from '../../component/ButtonBox/ButtonBox';
import Feature from "./../../component/home/feature"
import TestimonialCards from "./../../component/home/testimonial"
import ProductLayout from "./../../component/home/productLayout";
import Navbar from "./../../component/Navbar/Navbar"
import Footer from '../../component/Footer/Footer'
import ProductFeature from '../../component/home/productFeature'
import ProductCards from "./../../component/ProductCards/ProductCards"
import  Productdata from "./../../component/ProductCards/Productdata/Data"

// import 'bootstrap/dist/css/bootstrap.min.css';
function Home() {
  useEffect(() => {
    toast.success("Page loaded successfully!! 🎯😜");
  }, []);
  const limitedData = Productdata.slice(0, 8);
  return (
  <>
  <Toaster />
   <Navbar/>
   <div className='home-body'>
   <Banner/>
   <div className=' row mx-3 ms-2'>
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
  <div className='pcardsContainers3 row mt-4'>
  
      {
      
        limitedData.map((item, i) => {
          const { id, ProductImg, Title, Price, Categories } = item;
          return (
            <div className='col-lg-3 col-md-6 col-xs-12'>
            <ProductCards
              key={i}
              id={id}
              ProductImg={ProductImg}
              Title={Title}
              Price={Price}
              Categories={Categories}
            />
            </div>
          )
        })
      }
    </div>

  <Link to="./../Product">  <center className='explore-btn'><Button text="Explore More"/></center></Link>
  <ProductFeature/>
  <Feature/>
  <TestimonialCards/>
  </div>
  <Footer/>
    </>
  )
}

export default Home

//
