import React, {   useEffect, useState } from 'react'
import "./Products.css"
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
const Products = () => {
  const [Products, setProducts] = useState([]);
   const fetchedData = async () => {
    const api = await fetch('http://localhost:3500/products');
    const res = await api.json();
    setProducts(res);
  }
  useEffect(() => {
  
     fetchedData() 
  }, [])
  //on Delete
  const onDelete = (item)=>{
     
Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
    fetch(`http://localhost:3500/products/${item.id}` , {method:"DELETE"})
    .then(res=>res.json()).then(()=>fetchedData())
  }
})
 
  }
  return ( 
    <div className='products'>
      <h3 className='p-2'>Product Page</h3>
      <Link to="/products/Add" className='btn btn-success mb-3'>Add New Product</Link>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
             <th style={{textAlign:"center"}} scope="col">Operations</th>
          </tr>
        </thead>
        <tbody>
          {
            Products.length ? (
              Products.map((item) => {
                return (

                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.category}</td>
                  
                    <td>{item.price}</td>
                    <td style={{textAlign:"center"}}>
                      <button className='btn btn-danger' onClick={()=>onDelete(item)}>Delete</button>
                      <Link to={`/products/${item.id}`} className='btn btn-info mx-2'>View </Link>
                      <Link to={`/product/${item.id}`} className='btn btn-primary' >Edit</Link>
                    </td>
                  </tr>

                )
              })
            ) : (<h3 style={{textAlign:"center" , margin:"10px 0"}}>No Data Found</h3>)
          }
        </tbody>
      </table>
    </div>
  )
}

export default Products