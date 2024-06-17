import './ProductCards.css';
import { Link } from 'react-router-dom';
import { Toaster,toast } from "react-hot-toast"
import ButtonBox from "./../../component/ButtonBox/ButtonBox"

function ProductCards({ id, ProductImg, Title, Price }) {
  return (<>
    <Toaster />
      <Link className="ProductCard" onClick={() => toast('Page is loded Succesfully ✅✔️')} to={`/Product/Productview/${id}`}>
        <div className="image">
          <img   className="Productimg img-fluid" src={ProductImg} alt={Title} />
        </div>
        <div className="info">
          {id}
          <h3 className='cards-title fs-6'>{Title.length > 51 ? `${Title.substring(0, 51)}...` : Title}</h3>
          <p>Price: {Price}</p>
          <ButtonBox text="View Details" />
        </div>
      </Link>
      </>

  );
}

export default ProductCards;