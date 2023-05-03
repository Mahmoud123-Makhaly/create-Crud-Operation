import React  from 'react'
 
import Nav from './components/AllProducs/Nav/Nav';
 import SideBar from "./components/AllProducs/SideBar/SideBar"
 import Products from "./components/AllProducs/Products/Products"
import Category from './components/AllCategories/Category/Category';
import { Route, Routes } from 'react-router-dom';
import Home from './components/AllProducs/Home/Home';
import AddProduct from './components/AllProducs/AddProduct/AddProduct';
import View from './components/AllProducs/View/View';
import Edit from './components/AllProducs/Edit/Edit';
import AddCategory from './components/AllCategories/AddCategory/AddCategory';
import ViewCart from './components/AllCategories/ViewCart/ViewCart';
import EditCart from './components/AllCategories/EditCart.js/EditCart';

const App = () => {
  
   return (
    <div>
    <Nav/>
 
   <div className='home'>
   <div className='row'>
   <div className='col-2'>
 <SideBar/>  
   </div>
   <div className='col-10'>
   
 <Routes>
 <Route path='/' element={   <Home/>}/>
 {/* products Routes*/}
 <Route path='/products' element={   <Products/>}/>
 <Route path='/AddProduct' element={<AddProduct/>}/>
 <Route path='/View/:id' element={<View/>}/>
 <Route path='/Edit/:id' element={<Edit/>}/>
{/*Categories routes*/}
<Route path='/category' element={   <Category/>}/>
<Route path='/AddCategory' element={<AddCategory/>}/>
<Route path='/Cart/:id' element={<ViewCart/>}/>
<Route path='/editCart/:id' element={<EditCart/>}/>


 </Routes>
   
   </div>
   </div>
   </div>
 
    </div>
  )
}

export default App

 