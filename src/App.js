import React from 'react';
import Navbar from './components/Navbar/Navbar';
 import SideBar from "./components/sidebar/SideBar"
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Products from './components/products/Products';
import AddProduct from './components/AddProduct/AddProduct';
import VeiwData from './components/VeiwData/VeiwData';
import EditProduct from './components/EditProduct/EditProduct';
import Categories from './components/categories/Categories';
import VeiwCategory from './components/VeiwCategory/VeiwCategory';
import AddCategory from './components/AddCategory/AddCategory';
import EditCategory from './components/EditCategory/EditCategory';
 const App = () => {
  return (
<div>
<Navbar/>
<div className='homePage'>
<SideBar/>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/products" element={<Products/>} />
<Route path="/products/Add" element={<AddProduct/>} />
<Route path="/products/:view" element={<VeiwData/>} />
<Route path="/product/:edit" element={<EditProduct/>} />
<Route path="/categories" element={<Categories/>} />
<Route path="/categories/:veiw" element={<VeiwCategory/>} />
<Route path='/AddCategory' element={<AddCategory/>}/>
EditrCategory
<Route path='/category/:edit' element={<EditCategory/>}/>
 </Routes>
</div>
</div>
 )
}

export default App