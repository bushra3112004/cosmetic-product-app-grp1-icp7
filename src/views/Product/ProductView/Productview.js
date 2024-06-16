import React from 'react';
import { useParams } from 'react-router-dom';
import './Productview.css'
import Productdata from '../../../component/ProductCards/Productdata/Data';
import ProductCards from '../../../component/ProductCards/ProductCards';
import Navbar from '../../../component/Navbar/Navbar';
import Star from './star.png'
function Productview() {
  const { id } = useParams();
  const selectCard = Productdata.find((cardObj) => cardObj.id === id);

  if (!selectCard) {
    return <div>Product not found</div>;
  }

  return (
    <><Navbar/>
      <div className='main-view-container'>
        <div className='product-img-container'>
          <img className='product-img' src={selectCard.ProductImg} alt={selectCard.name} />
        </div>
        <div className='Dis-container'>

          <span className='title'>{selectCard.Title}</span>
          <br />
          <br />
          <p>Price:- {selectCard.Price}</p>
          <p>Rating:- {selectCard.Rating}/5 <img className='star-img' src={Star}/></p>
          <p>Reviews:- {selectCard.Reviews}</p>
          <p>Category:- {selectCard.Categories}</p>
          <p>Sold By:- {selectCard.Brand}</p>
          <p className='discription'>Product Description: {selectCard.Description}</p>

        </div>
      </div>
      <div className='use-discription-container'>
        <div className='Ingrediants-container'>
          <span className='Ingridiant-title'>Ingredients :-</span>
       <br/><br/><br/>
        </div>
        <div className='Uses-container'> 
          <span className='Uses-heading'>Uses :-</span>
          <br/><br/>
          <br/>
          <p>{selectCard.Uses}</p>
        </div>
      </div>
      <div>
        <div><span className='Related-content-heading'>How To Use ?</span></div>
        <br/><br/>
        <p>{selectCard.HowToUse}</p>

      </div>
      <span className='Related-content-heading'>Related Products</span>
      <div className='pcardsContainers2'>

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
                key={3}
                id={id}
                ProductImg={ProductImg}
                Title={Title}
                Price={Price}
              />)
          })
        }
      </div>
    </>
  );
}

export default Productview;