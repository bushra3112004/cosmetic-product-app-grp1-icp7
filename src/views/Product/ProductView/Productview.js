import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Productview.css'
import Productdata from '../../../component/ProductCards/Productdata/Data';
import ProductCards from '../../../component/ProductCards/ProductCards';
import Navbar from '../../../component/Navbar/Navbar';
import Star from './star.png'
import Back from './back.png'
function Productview() {
  const { id } = useParams();
  const selectCard = Productdata.find((cardObj) => cardObj.id === id);

  if (!selectCard) {
    return <div>Product not found</div>;
  }

  return (
    <><Navbar/>
    <Link to='/Product' className='back-btn'><img height={'50px'} src={Back}/></Link>
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
       <p>{selectCard.Ingredients.Ingredient1}</p>
       <p>{selectCard.Ingredients.Ingredient2}</p>
       <p>{selectCard.Ingredients.Ingredient3}</p>
       <p>{selectCard.Ingredients.Ingredient4}</p>
       <p>{selectCard.Ingredients.Ingredient5}</p>
       <p>{selectCard.Ingredients.Ingredient6}</p>
       <p>{selectCard.Ingredients.Ingredient7}</p>
       <p>{selectCard.Ingredients.Ingredient8}</p>
        </div>
        <div className='Uses-container'> 
          <span className='Uses-heading'>Uses :-</span>
          <br/><br/>
          <br/>
          <p>{selectCard.Use.Use1}</p>
          <p>{selectCard.Use.Use2}</p>
          <p>{selectCard.Use.Use3}</p>
          <p>{selectCard.Use.Use4}</p>
          <p>{selectCard.Use.Use5}</p>
          <p>{selectCard.Use.Use6}</p>
          <p>{selectCard.Use.Use7}</p>
        </div>
      </div>
      <div>
        <div><span className='Related-content-heading'>How To Use ?</span></div>
        <br/>
        <div className='howtouse-containt'>
        <p>{selectCard.HowToUse.HowToUse1}</p>
        <p>{selectCard.HowToUse.HowToUse2}</p>
        <p>{selectCard.HowToUse.HowToUse3}</p>
        </div>

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
              Categories,
            } = Carddata
            return (
              <ProductCards
                key={3}
                id={id}
                ProductImg={ProductImg}
                Title={Title}
                Price={Price}
                Categories={Categories}
              />)
          })
        }
      </div>
    </>
  );
}

export default Productview;