import React from 'react'
import "./SideBar.css"
import { Link } from 'react-router-dom'
const SideBar = () => {
  return (
    <div className='sidebar'>
   <ul className='list-unstyled'>
   <li>
   <Link to = "products/" href='#'>Get All Products</Link>
   </li>
   <li>
   <Link to="/category" href='#'>Get All Categories</Link>
   </li>
   </ul>

    </div>
  )
}

export default SideBar