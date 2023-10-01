import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';
import SkeletonLoad from '../SkeletonLoad/SkeletonLoad';

const CategoryDetails = () => {
    let { catname } = useParams();
    const [catProduct, setCatProduct] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    useEffect(() => {
     const getCategory = async () => {
       setIsLoading(true)
        try{
           const response = await axios.get(`https://fakestoreapi.com/products/category/${catname}`);
           setCatProduct(response?.data)
           setIsLoading(false)
        }catch{
         setIsLoading(false)
        }
     }
     getCategory()
    }, [catname])
    return (
        <div>
           <div className="container">
             <h3 className='my-3'>Show All Product {catProduct?.length}</h3>
             <div className="row my-3">
                {
                 catProduct? 
                  catProduct.map((elem) => {
                     return (
                        <>
                         <Product item={elem} key={elem?.id}/>
                        </>
                     )
                 }): 
                 'Category Product Not Found' 
                }
                {
                  isLoading? <SkeletonLoad type="categorydetails"/>: ''
                }
              </div>
            </div> 
        </div>
    );
};

export default CategoryDetails;