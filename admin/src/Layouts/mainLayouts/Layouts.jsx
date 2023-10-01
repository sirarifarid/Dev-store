import React from 'react';
import './layout.css'
import Chart from '../../Components/Chart/Chart';
import FeatureInfo from '../../Components/FeaturesInfo/FeatureInfo';
import ProductList from '../../Components/ProductList/ProductList';
import Transiction from '../../Components/Transiction/Transiction';
import AddNewProduct from '../../Components/addNewProduct/AddNewProduct';
import ShowPost from '../../Components/showPost/ShowPost';
import AddPost from '../../Components/addPost/AddPost'
import EditProduct from '../../Components/EditProduct/EditProduct';

const Layouts = ({ type }) => {
    return (
        <div className='layout'>
            {
                type === 'product' ? (
                    <ProductList />
                ):
                    type === 'home' ? (
                        <>
                            <FeatureInfo />
                            <Chart title="User Analytics" dataKey="Active User" />
                            <Transiction />
                        </>
                    ):
                    type === 'addproduct' ? (
                        <>
                          <AddNewProduct />
                        </>
                    ):
                    type === 'post' ? (
                        <>
                          <ShowPost />
                        </>
                    ):
                    type === 'addpost' ? (
                        <>
                          <AddPost />
                        </>
                    ):
                    type === 'editproduct' ? (
                        <>
                          <EditProduct />
                        </>
                    )
                  :
              'Not Found'
           }
        </div>
    );
};

export default Layouts;