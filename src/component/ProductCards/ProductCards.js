import './ProductCards.css'
import { Link } from 'react-router-dom'
function ProductCards({ id, ProductImg, Title, Price }) {
  return (
    <>
      <div className="product-card" id={id}>

        <Link className='ProductCard' to={"/Product/Productview/${Productdata.id}"}>
          <div className='image'>
            <img height={'230px'} className='img' src={ProductImg} />
          </div>
          <div className='info'>
            {id}
            <h3>{Title.substring(0, 51)}...</h3>
            <button>
              
            </button>
          </div>
        </Link>
        </div>

      </>
      )
}
      export default ProductCards