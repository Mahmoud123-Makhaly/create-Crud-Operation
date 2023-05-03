import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2';
 
const Edit = () => {
  const[product , setProduct] = useState([]);
  const[category , setcategory] = useState("");
  const[price , setPrice] = useState("")
  const params = useParams();
  const Navigate = useNavigate()
 //Get In Product To Edit
 useEffect(()=>{
fetch(`http://localhost:3500/items/${params.id}`)
.then((res)=>res.json())
.then((data)=>setProduct(data))
 } , []);
 
  //Edit Function
  const handleSubmit = (e)=>{
    e.preventDefault();
    const Data = {
      category:category,
      price:price
    }
    Navigate("/products");
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    )
    fetch(`http://localhost:3500/items/${params.id}` , {
      method: 'PUT',  
      headers: {
       'Content-type': 'application/json; charset=UTF-8'  
      },
      body: JSON.stringify(Data)

    }).then((res)=>res.json())
    .then((data)=>console.log(data))

  }
  return (
    <div className='veiw'>
    <form onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Edit Category</label>
    <input onChange={(e)=>setcategory(e.target.value)} defaultValue={product.category} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Edit  Price</label>
    <input onChange={(e)=>setPrice(e.target.value)} defaultValue={product.price} type="number" class="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Edit</button>
</form>
    </div>
  )
}

export default Edit