import React from 'react'
import './Product.css'
import banner from './banner.jpeg'
import banner2 from './banner2.jpg'
// import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCards from '../../component/ProductCards/ProductCards'
import Productdata from './../../component/ProductCards/Productdata/Data'

function Product() {
  return (
    <>

      <img className='banner-img' width={'100%'} src={banner} />

      <div className='main-div'>

        <div className='pcardsContainers'>

          {
            Productdata.map((Carddata, i) => {
              const {
                id,
                ProductImg,
                Title,
                Price,
              } = Carddata
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
            <li> <h1 className='Sub-title'>Categories</h1></li>
            <li>
              <ul className='list-2' type='circle'>
                <li>Makeup</li>
                <li>Skin </li>
                <li>Hair</li>
                <li>Bath & Body</li>


              </ul>
            </li>
          </ul>
          <hr />
          <h1 className='Sub-title'>Product Tag</h1>
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