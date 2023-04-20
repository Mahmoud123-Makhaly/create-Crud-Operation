import React, { useEffect, useState } from 'react'
 import "./EditProduct.css"
import { useNavigate, useParams } from 'react-router-dom'
const EditProduct = () => {
    const [Val,setVal] = useState([]);
    const[category,setCategory] = useState('');
    const[price,setPrice] = useState('');
    const params = useParams();
    const navigate=  useNavigate()
   useEffect(()=>{
    fetch(`http://localhost:3500/products/${params.edit} `).then((res)=>res.json())
    .then((data)=>setVal(data))
   } , []) 
   const handleSubmit = async(e)=>{
e.preventDefault();
navigate(`/products`);
const EditData = {
    category:category,
    price:price
}
 await fetch(`http://localhost:3500/products/${params.edit}`,{
    method:"PUT",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(EditData)
 }).then((res)=>res.json()).then((data)=>console.log(data))
   }
 
  return (
    <div className='editProduct'>
    <form onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"> Edit Category  </label>
    <input onChange={(e)=>setCategory(e.target.value)} defaultValue={Val.category} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Edit Price</label>
    <input onChange={(e)=>setPrice(e.target.value)}  defaultValue={Val.price}   class="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" class="btn btn-primary">Edit</button>
</form>
    </div>
  )
}

export default EditProduct