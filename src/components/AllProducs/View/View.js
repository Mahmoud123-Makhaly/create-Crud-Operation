import React, { useEffect, useState } from 'react'
import "./View.css"
import { Link, useParams } from 'react-router-dom'
const View = () => {
    const[product , setProduct] = useState([])
const params = useParams();
 useEffect(()=>{
fetch(`http://localhost:3500/items/${params.id}`).then((res)=>res.json())
.then((data)=>setProduct(data))
 } , [])
 console.log("product"  , product)
  return (
    <div className='view'>
    <div className="card text-center" >
  <img src={product.image} className="card-img-top"  />
  <div className="card-body">
    <h5 className="card-title"> {product.category}</h5>
    <p className="card-text">{product.title}</p>
    <Link to="/products" href="#" className="btn btn-primary">Go To Home</Link>
  </div>
</div>
    </div>
  )
}

export default View