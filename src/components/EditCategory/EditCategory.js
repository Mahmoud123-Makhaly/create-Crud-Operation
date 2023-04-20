import React, { useEffect, useState } from 'react'
import "./EditCategory.css"
import { useNavigate, useParams } from 'react-router-dom';
const EditCategory = () => {
  const[name , setName] = useState('');
  const[email , setEmail] = useState('');
  const[Val,setVal] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  console.log(params);
  useEffect(()=>{
fetch(`http://localhost:3500/categories/${params.edit}`).then((res)=>res.json()).then((data)=>setVal(data))
  } , [])
  console.log(Val);
  const handleSubmit = async(e)=>{
    e.preventDefault();
navigate('/categories')
const Data = {
  name:name,
  email:email
}
 await fetch(`http://localhost:3500/categories/${params.edit}` , {
  method:"PUT",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify(Data)
}).then((res)=>res.json()).then((data)=>console.log(data))

  }
  

 
  return (
    <div className='edit-category'>
    <form onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Edit Name</label>
    <input defaultValue={Val.name} onChange={(e)=>setName(e.target.value)}  type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Edit Email</label>
    <input defaultValue={Val.email} onChange={(e)=>setEmail(e.target.value)} type="email" class="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" class="btn btn-primary">Edit</button>
</form>
    </div>
  )
}

export default EditCategory