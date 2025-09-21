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
  
      {/* First row - 2 tabs in 6 by 6 layout for 1440px+ */}
      <Grid item xs={12} lg={6} xl={6}>
        <EcommerceTabs></EcommerceTabs>
      </Grid>
      <Grid item xs={12} lg={6} xl={6}>
        <Projections></Projections>
      </Grid>

      {/* Second row - Revenue and Location */}
      <Grid item xs={12} md={8}>
        <Revenue></Revenue>
      </Grid>
      <Grid item xs={12} md={4}>
        <LocationRevenue></LocationRevenue>
      </Grid>

      {/* Third row - Top Products and Total Sales */}
      <Grid item xs={12} md={8}>
        <TopProducts></TopProducts>
      </Grid>
      <Grid item xs={12} md={4}>
        <TotalSales></TotalSales>
      </Grid>

    </Grid>
  )
}
