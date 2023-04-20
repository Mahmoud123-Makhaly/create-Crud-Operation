import React , {useEffect, useState} from 'react'
import "./Categories.css";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const Categories = () => {
    const[Categories , setCategries] = useState([]);
    const getAllCategories =    () => {
          fetch(`http://localhost:3500/categories`).then((res)=>res.json())
        .then((data)=> setCategries(data))
    }
    useEffect(()=>{
        getAllCategories()
    } , []);
//Delete Catergoties
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
        fetch(`http://localhost:3500/categories/${item.id}` , {method:"DELETE"}).then((res)=>res.json())
        .then(( )=> getAllCategories())
      })
   
}
////Add Categories

    return (
    <div className='categories'>
<h4>Categories Page</h4>
<Link to="/AddCategory" className='btn btn-success'>Add New Category</Link>
<table className="table table-striped table-hover">
<thead>
<tr>
  <th scope="col">ID</th>
  <th scope="col">Name</th>
  <th scope="col">Email</th>
  <th className='text-center' scope="col">Operations</th>
</tr>
</thead>
<tbody>
 {
    Categories.length?(
      Categories.map((item)=>{
return(
  <tr key={item.id}>
  <th scope="row">{item.id}</th>
  <td>{item.name}</td>
  <td> {item.email}</td>
  <td className='text-center'>
  <button className='btn btn-danger' onClick={()=>onDelete(item)}>Delete</button>
  <Link to={`/category/${item.id}`} className='btn btn-info mx-2'>Edit</Link>
  <Link to = {`/categories/${item.id}`} className='btn btn-primary'>View</Link>
  </td>
</tr>
)
      })
    ):null
 } 
</tbody>
</table>
    </div>
  )
}

export default Categories