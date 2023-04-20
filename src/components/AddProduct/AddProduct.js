import React, {   useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./AddProduct.css";
import { created } from '../products/Products';
const AddProduct = () => {
 const[Category,setCategory]= useState("")
  const[Price , setPrice] = useState("");
  const Navigate = useNavigate();
   const handleSubmit = (e)=>{
e.preventDefault();
setCategory("");
setPrice("");
Navigate("/products")
const Data = {
  category : Category,
  price:Price
}
 fetch(`http://localhost:3500/products` , {
  method:"POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(Data),

 }).then((res)=>res.json()).then((item)=>{
   console.log(item)  
  })

  }
  return (
    <div className='Add-Product'>
    <form onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Title  </label>
    <input defaultValue={Category} onChange={(e)=>setCategory(e.target.value)} placeholder='Enter Title' type='text' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Price</label>
    <input  defaultValue={Price} onChange={(e)=>setPrice(e.target.value)}   placeholder='Enter Price' type="number" class="form-control" id="exampleInputPassword1"/>
  </div>
   
  <button type="submit" class="btn btn-primary">Add</button>
</form>
    </div>
  )
}

export default AddProduct