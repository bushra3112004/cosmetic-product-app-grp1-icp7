import React from 'react'
import Cat1 from "./homeImg/skinCare2.jpg"
import Cat2 from "./homeImg/meakUp.jpg"
import Cat3 from "./homeImg/hairCare.jpg"
import Banner from "./../../component/home/banner"
import CategoryCard from '../../component/home/categoryCard';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    </>
  )
}

export default Home

//