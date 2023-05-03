import React, { useEffect, useState } from 'react'
import "./Products.css"
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const Products = () => {
  const [Products, setProducts] = useState([]);
//show All Data from Api In Table
const getAllData = ()=>{
  fetch("http://localhost:3500/items").then((res)=>res.json())
  .then((data)=>setProducts(data))
}
useEffect(()=>{
  getAllData();
    } , []);
 //handleDelete
 const handleDelete  =  (item)=>{
  Swal.fire({
    title: `Are you sure to Delete Product #${item.id}`,
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
   
  fetch(`http://localhost:3500/items/${item.id}` , {
    method:"DELETE"}).then((res)=>res.json())
  .then(()=>getAllData());
    }
  })



 }
  return (
    <div className='Products'>
    <h3>Product Page</h3>
    <Link to="/AddProduct" className='btn btn-success my-2'>Add New Product</Link>
    <table className="table table-striped">
    <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Category</th>
      <th scope="col">Price</th>
      <th scope="col">Operation</th>

     </tr>
  </thead>
  <tbody>

 {
  Products.length?(
    Products.map((item)=>{
       
return(
  <tr key={item.id}>
  <th scope="row">{item.id}</th>
  <td>{item.category}</td>
  <td>{item.price}</td>
  <td>
  <button onClick={()=>handleDelete(item)} className='btn btn-danger'>Delete</button>
  <Link to={`/Edit/${item.id}`} className='btn btn-primary mx-2'>Edit</Link>
  <Link to={`/View/${item.id}`} className='btn btn-info'>View</Link>
  </td>
 </tr>
)
    })
  ):(<h3>No Data Found</h3>)
 }
    
    
  </tbody>
</table>
    </div>
  )
}

export default Products