import './ProductCards.css'
function ProductCards( {ProductImg,Title,Price}) {
  return (
    <>

    <div className='ProductCard'>
        <div className='image'>
            <img height={'230px'} className='img' src={ProductImg}/>
        </div>
        <div className='info'>
          <h3>{Title}</h3>
            <h3>{Title.substring(0,51)}...</h3>
        </div>
    </div>

    </>
  )
}

export default ProductCards