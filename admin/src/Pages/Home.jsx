import {Grid } from '@mui/material';
import React from 'react';
import Sidebar from '../Layouts/Sidebar/Sidebar';
import Topbar from '../Layouts/Topbar/Topbar';
import Layouts from '../Layouts/mainLayouts/Layouts';

const Home = () => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                   <Sidebar />
                </Grid>
                <Grid item xs={10}>
                  <Topbar />
                  <Layouts type="home"/>
                </Grid>
            </Grid>
        </ >
    );
};

export default Home;