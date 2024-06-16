import './ProductCards.css';
import { Link } from 'react-router-dom';

function ProductCards({ id, ProductImg, Title, Price }) {
  return (
   
      <Link className="ProductCard" to={`/Product/Productview/${id}`}>
        <div className="image">
          <img   className="Productimg" src={ProductImg} alt={Title} />
        </div>
        <div className="info">
          {id}
          <h3 className='cards-title'>{Title.length > 51 ? `${Title.substring(0, 51)}...` : Title}</h3>
          <p>Price: {Price}</p>
          <button>View Details</button>
        </div>
      </Link>

  );
}

export default ProductCards;