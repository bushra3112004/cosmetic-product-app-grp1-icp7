import React from 'react'
import FeatureCard from "./featureContainer";
import NaturalBeauty from "./../../views/Home/homeImg/natural-beauty.png"
import NaturalIngrediant from "./../../views/Home/homeImg/natural-ingrediant.png"
import Organic from "./../../views/Home/homeImg/organic.png"
import Hypo from "./../../views/Home/homeImg/hypoallergenic.png"
function feature() {
  return (
   <div className='feature-container d-flex '>
    <FeatureCard featureImg={NaturalBeauty} 
     FeatureTitle="Natural Beauty" />

    <FeatureCard featureImg={NaturalIngrediant} 
     FeatureTitle="Natural Ingredient" />

    <FeatureCard featureImg={Organic} 
     FeatureTitle="Organic" />

    <FeatureCard featureImg={Hypo} 
     FeatureTitle="hypoallergenic " />
   </div>
  )
}

export default feature