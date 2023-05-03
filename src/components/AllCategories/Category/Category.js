import React, { useEffect, useState } from 'react'
import './Category.css'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
const Category = () => {
  const[categories , setCategories] = useState([])
  const GetAllCategories = ()=>{
    fetch(`http://localhost:3500/carts`).then((res)=>res.json())
    .then((data)=>setCategories(data))
  }
  useEffect(()=>{
    GetAllCategories();
  } , []);

//handleDelete
const handleDelete = (item)=>{
  Swal.fire({
    title: `Are you sure To Delete Cart ${item.id}`,
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`http://localhost:3500/carts/${item.id}` , {
    method:"DELETE"
  }).then((res)=>res.json()).then(()=>GetAllCategories())
    }
  })

}

return (
    <div className='Products categories'>
    <h3>Categories Page</h3>
    <Link to="/AddCategory" className='btn btn-success my-2'>Add New Product</Link>
    <table className="table table-striped">
    <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">UserId</th>
      <th scope="col">Date</th>
       <th scope="col">Operations</th>
    </tr>
  </thead>
  <tbody>
   
    
  {
    categories.length?(
      categories.map((item)=>{
        return(
          <tr key={item.id}>
        <th scope="row">{item.id}</th>
        <td>{item.userId}</td>
        <td>{item.date}</td>
        <td>
          <button onClick={()=>handleDelete(item)} className='btn btn-danger'>Delete</button>
          <Link to ={`/editCart/${item.id}`} className='btn btn-primary mx-2'>Edit</Link>
          <Link to={`/Cart/${item.id}`} className='btn btn-info mx-2'>View</Link>
      
          </td>
        </tr>
        )
      })
    ):(null)
  }

  </tbody> 
  </table>
    </div>
  )
}

export default Category