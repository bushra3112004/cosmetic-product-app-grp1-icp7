import React from 'react'
import { useParams } from 'react-router-dom'
import Productdata from '../../../component/ProductCards/Productdata/Data'


function Productview() {
    const selectCard = Productdata.find((cardObj)=>cardObj.id === id) 
    const {id} = useParams() 
  return (<>
    <div>Productview {id}</div>
    <div>
        <h1>{selectCard.Title}</h1>
        <img src={selectCard.ProductImg} alt={selectCard.name} />
        <p>Price: {selectCard.price}</p>

    </div>

    </>
  )
}

export default Productview