import React, { useState } from 'react'
import "./AddProduct.css"
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const AddProduct = () => {
    const[category,setCategory] = useState("");
    const[price, setPrice] = useState("");
    const Navigate = useNavigate()
    const handleSubmit = (e)=>{
e.preventDefault();
Navigate("/products");
 

const Data = {
    category:category,
    price:price
}
//sweet alert
Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'New Product Added',
  showConfirmButton: false,
  timer: 1500
})
        fetch("http://localhost:3500/items" , {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              },      
              body: JSON.stringify(Data)
        }).then((res)=>res.json()).then((data)=>console.log(data))
    }
  return (
    <div className='addproduct'>
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Category</label>
    <input placeholder='Enter Category' required value={category} onChange={(e)=>setCategory(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
    <input placeholder='Enter Price' required value={price} onChange={(e)=>setPrice(e.target.value)} type="number" className="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Add</button>
</form>
    </div>
  )
}

export default AddProduct