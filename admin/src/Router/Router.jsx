import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Products from '../Pages/Products';
import AddProduct from '../Pages/AddProduct';
import NotFound from '../Pages/NotFound';
import Posts from '../Pages/Posts';
import AddPost from '../Pages/AddPost';
import EditProduct from '../Pages/EditProduct';


const Router = () => {
    return (
        <BrowserRouter>
           <Routes>
               <Route path='/' element={<Home />}/>
               <Route path='/products' element={<Products />} />
               <Route path='/addproduct' element={<AddProduct />} />
               <Route path='/product/:id' element={<EditProduct />} />
               <Route path='/post' element={<Posts />} />
               <Route path='/addpost' element={<AddPost />} />
               <Route path='*' element={<NotFound />} />
           </Routes>
        </BrowserRouter>
    );
};

export default Router;