import React from 'react'
import Grid from "@mui/material/Grid";

import EcommerceTabs from '../../dashboard/EcommerceTabs/EcommerceTabs';
import Projections from '../../dashboard/Projections/Projections';
import Revenue from '../../dashboard/Revenue/Revenue';
import LocationRevenue from '../../dashboard/LocationRevenue/LocationRevenue';
import TopProducts from '../../dashboard/TopProducts/TopProducts';
import TotalSales from '../../dashboard/TotalSales/TotalSales';


export default function MainContent() {
  return (
<Grid container spacing={3.5}>
  
      <Grid item xs={12} md={5}>
    <EcommerceTabs></EcommerceTabs>
      </Grid>
      <Grid item xs={12} md={7}>
        <Projections></Projections>
 
      </Grid>

      <Grid item xs={12} md={8}>
 <Revenue></Revenue>
      </Grid>
      <Grid item xs={12} md={4}>
<LocationRevenue></LocationRevenue>
      </Grid>
      <Grid item xs={12} md={8}>
        <TopProducts></TopProducts>
      </Grid>
      <Grid item xs={12} md={4}>
      <TotalSales></TotalSales>
      </Grid>

    </Grid>
  )
}
