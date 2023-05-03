import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddCategory = () => {
    const[useId , setUserId] = useState("");
    const[date , setDate] = useState("")
    const Navigate = useNavigate("")
    const handleSubmit = (e)=>{
e.preventDefault();
Navigate("/category");
Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'You Added New Item',
    showConfirmButton: false,
    timer: 1500
  })
  const Data = {
    userId:useId,
    date:date
  }
fetch(`http://localhost:3500/carts`, {
    method:"POST" , 
    headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Data)
}).then((res)=>res.json()).then((data)=>console.log(data))
    }
  return (
    <div className='addproduct'>
    <form onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">UserId</label>
    <input value={useId} onChange={(e)=>setUserId(e.target.value)} required type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Date</label>
    <input  value={date} onChange={(e)=>setDate(e.target.value)} required type="date" class="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" class="btn btn-primary">Add Cart</button>
</form>
    </div>
  )
}

export default AddCategory