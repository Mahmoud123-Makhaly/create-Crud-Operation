import React, { useEffect, useState } from 'react'
import  "./VeiwData.css"
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const VeiwData = () => {
    const[details,setDetails] = useState([])
    const params = useParams();
 useEffect(()=>{
    const fetchedData = async()=>{
    const api = await fetch(`http://localhost:3500/products/${params.view}`);
    const res = await api.json();
  setDetails(res)
    }
    (async()=>await fetchedData())()
 } , [])
 
  return (
    <div className='VeiwData'>
    <div className="card" >
  <img src={details.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{details.category}</h5>
    <p className="card-text">{details.title}</p>
    <Link to="/products" href="#" className="btn btn-primary">Go To Home</Link>
  </div>
</div>
    </div>
  )
}

export default VeiwData