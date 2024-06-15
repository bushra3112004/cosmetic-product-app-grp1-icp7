import React from 'react'
import { useParams } from 'react-router-dom'


function Productview({ ProductImg, Title, Price}) {
    const {id} = useParams() 
  return (<>
    <div>Productview {id}</div>
    <div></div>

    </>
  )
}

export default Productview