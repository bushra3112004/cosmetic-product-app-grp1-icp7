import React from 'react'
import './Product.css'
import banner from './banner.jpeg'
import banner2 from './banner2.jpg'
import { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonBox from "./../../component/ButtonBox/ButtonBox"
import ProductCards from '../../component/ProductCards/ProductCards'
import Productdata from './../../component/ProductCards/Productdata/Data'

function Product() {
  const [searchTerm , setSearchTerm] = useState("")
  return (
    <>

      <img className='banner-img' width={'100%'} src={banner} />
      <h1 className='Slogun'>-----"Glow Naturally, Shine Confidently"-----</h1>
      <div className='search-container'>
        <span className='reults-heading'>All Resutls...</span>
        <input 
        className='input-feild'
          type="text" 
          placeholder="Search..." 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
      </div>
      <hr/>

      <div className='main-div'>

        <div className='pcardsContainers'>

          {
            Productdata
            .filter((val) => {
              if (searchTerm === "") {
                return val
              } else if (val.Title && val.Title.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
              }
              return false;
            })
            .map((val, i) => {
              const {
                id,
                ProductImg,
                Title,
                Price,
              } = val
              return (
                <ProductCards
                  key={i}
                  id={id}
                  ProductImg={ProductImg}
                  Title={Title}
                  Price={Price}
                />)
            })
          }
        </div>

        <div className='categories-div'>
          <ul type='none'>
            <li> <h1 className='Sub-title'>Categories..</h1></li>
            <li>
              <ul  type='circle'>
                <li className='list-2'>Makeup</li>
                <li className='list-2'>Skin </li>
                <li className='list-2'>Hair</li>
                <li className='list-2'>Bath & Body</li>


              </ul>
            </li>
          </ul>
          <hr />
          <h1 className='Sub-title'>Product Tags..</h1>
          <button className='tag-btn'>Cosmatics</button>
          <button className='tag-btn'>Facecaer</button>
          <button className='tag-btn'>Skincaer</button>
          <button className='tag-btn'>Perfume</button>
          <hr />
          <img src={banner2} />
        </div>
      </div>
    </>
  )
}

export default Product