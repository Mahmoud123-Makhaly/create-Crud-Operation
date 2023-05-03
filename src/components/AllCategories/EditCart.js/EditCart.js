import React, { useEffect, useState } from 'react'
import "./EditCart.css"
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
const EditCart = () => {
    const[card , setCard] = useState([])
    const[userId , setUserId] = useState("");
    const[date , setDate] = useState("")
    const Params = useParams();
    const Navigate = useNavigate("")
    useEffect(()=>{
        fetch(`http://localhost:3500/carts/${Params.id}`)
        .then((res)=>res.json()).then((data)=>setCard(data))
    } , [])
    const handleSubmit = (e)=>{
e.preventDefault();
Navigate("/category")
const Data = {
    userId:userId,
    date:date
}

Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your work has been Edited',
    showConfirmButton: false,
    timer: 1500
  })

                        fetch(`http://localhost:3500/carts/${Params.id}` , {
                            method:"PUT" , 
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(Data)
                        }).then((res)=>res.json())
                        .then((data)=>console.log(data))
    };
    
  return (
    <div className='edit'>
    <form onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Edit UserId</label>
    <input defaultValue={card.userId} onChange={(e)=>setUserId(e.target.value)}   type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Edit Date</label>
    <input  defaultValue={card.date} onChange={(e)=>setDate(e.target.value)}   type="date" class="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" class="btn btn-primary">Edit Cart</button>
</form>
    </div>
  )
}

export default EditCart