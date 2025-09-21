import React from 'react'
import Grid from "@mui/material/Grid";

import EcommerceTabs from '../../dashboard/EcommerceTabs/EcommerceTabs';
import Projections from '../../dashboard/Projections/Projections';


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
 
      </Grid>
      <Grid item xs={12} md={4}>

      </Grid>


    </Grid>
  )
}
