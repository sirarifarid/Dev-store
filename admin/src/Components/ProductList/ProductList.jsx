import React, { useState } from 'react';
import './productlist.css';
import { productRows } from '../../dummyData/dummyData';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const ProductList = () => {
    const [data, setData] = useState(productRows)
    const handleDeleteItem = (id) => {
        let filterData = data.filter((elem) => {
            return elem.id !== id;
        })
        setData(filterData);
    }
    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "product",
            headerName: "Product",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img className="productListImg" src={params.row.img} alt="" />
                        {params.row.name}
                    </div>
                );
            },
        },
        { field: "stock", headerName: "Stock", width: 200 },
        {
            field: "status",
            headerName: "Status",
            width: 120,
        },
        {
            field: "price",
            headerName: "Price",
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/" + params.row.id}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteIcon
                            className="productListDelete"
                            onClick={() => handleDeleteItem(params.row.id)}
                        />
                    </>
                )
            }
        }

    ];
    return (
        <div className='productList commonBgStyle'>
            <div className='listHeader'>
                <h3>Product Lists</h3>
                <Link to="/addproduct"><Button variant="contained"  sx={{ bgcolor: 'rgba(0, 0, 255, 0.803)' }}>Create</Button></Link>
            </div>
            <div style={{ height: 600, width: '100%' }}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </div>
        </div>
    );
};

export default ProductList;