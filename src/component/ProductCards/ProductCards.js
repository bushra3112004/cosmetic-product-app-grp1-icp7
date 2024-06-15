import './ProductCards.css'
import { Link } from 'react-router-dom'
function ProductCards( {id,ProductImg,Title,Price}) {
  return (
    <>

    <Link  className='ProductCard' to={'/Product/Productview/${id}'}>
        <div className='image'>
            <img height={'230px'} className='img' src={ProductImg}/>
        </div>
        <div className='info'>
            <h3>{Title.substring(0,51)}...</h3>
        </div>
    </Link>

    </>
  )
}

export default ProductCards