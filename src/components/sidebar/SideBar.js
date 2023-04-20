import React from 'react'
import "./SideBar.css"
import { Link } from 'react-router-dom'
const SideBar = () => {
  return (
    <div className='sidebar'>
    <ul>
    <li>
    <Link to="/products" href='#'>  Get All Products</Link>
      </li>
    <li>
  <Link to="/categories" href='#'>  Get All Categories</Link>
    </li>
    </ul>
    </div>
  )
}

export default SideBar