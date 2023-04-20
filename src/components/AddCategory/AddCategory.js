import React, { useState } from 'react'
import "./AddCategory.css"
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
const AddCategory = () => {
    const[name  ,setName] = useState("");
    const[email,setEmail] = useState("");
     const navigate  = useNavigate();
    const handleSubmit = (e)=>{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your Category Has Been Added',
            showConfirmButton: false,
            timer: 1500
          })
e.preventDefault();
navigate('/categories');
const Data = {
    name:name,
    email:email
}
fetch(`http://localhost:3500/categories` , {
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(Data)
}).then((res)=>res.json())
.then((data)=>{
    console.log(data)

})
    }

  return (
    <div className='AddCategory'>
    <form onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Enter Name</label>
    <input onChange={(e)=>setName(e.target.value)}  placeholder='Enter Name' type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label  for="exampleInputPassword1" class="form-label">Email</label>
    <input onChange={(e)=>setEmail(e.target.value)}   placeholder='Enter Email' type="email" class="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Add</button>
</form>
    </div>
  )
}

export default AddCategory