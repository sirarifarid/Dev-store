import { Grid } from '@mui/material';
import React from 'react';
import Layouts from '../Layouts/mainLayouts/Layouts';
import Sidebar from '../Layouts/Sidebar/Sidebar';
import Topbar from '../Layouts/Topbar/Topbar';

const Products = () => {
    return (
        <div>
          <Grid container spacing={2}>
                <Grid item xs={2}>
                   <Sidebar />
                </Grid>
                <Grid item xs={10}>
                  <Topbar />
                  <Layouts type="product"/>
                </Grid>
            </Grid> 
        </div>
    );
};

export default Products;