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

    <div>

      <h2 className='dashboard-header'>Ecommerce</h2>
<Grid container spacing={3.5} justifyContent="center" >

{/* First row - 2 tabs in 6 by 6 layout for 1440px+ */}
<Grid item xs={12} lg={6}>
  <EcommerceTabs />
</Grid>
<Grid item xs={12} lg={6}>
  <Projections />
</Grid>

{/* Second row - Revenue and Location */}
<Grid item xs={12} md={8}>
  <Revenue />
</Grid>
<Grid item xs={12} md={4} sm={6}>
  <LocationRevenue />
</Grid>

<div className='responsive-mobile-total-sale'>
<Grid item xs={12} md={4} sm={6}>
  <TotalSales />
</Grid>
</div>

{/* Third row - Top Products and Total Sales */}
<Grid item xs={12} md={8}>
  <TopProducts />
</Grid>

<div className='responsive-mobile-total-sale-og'>
<Grid item xs={12} md={4} sm={6}>
  <TotalSales />
</Grid>
</div>
</Grid></div>

  )
}
