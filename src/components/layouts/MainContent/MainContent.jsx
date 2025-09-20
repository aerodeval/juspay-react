import React from 'react'
import Grid from "@mui/material/Grid";

import EcommerceTabs from '../../dashboard/EcommerceTabs/EcommerceTabs';


export default function MainContent() {
  return (
<Grid container spacing={3.5}>
      {/* First Row: 6-6 */}
      <Grid item xs={12} md={6}>
    <EcommerceTabs></EcommerceTabs>
      </Grid>
      <Grid item xs={12} md={6}>
 
      </Grid>

      {/* Second Row: 8-4 */}
      <Grid item xs={12} md={8}>

      </Grid>
      <Grid item xs={12} md={4}>
 
      </Grid>

      {/* Third Row: 8-4 */}
      <Grid item xs={12} md={8}>

      </Grid>
      <Grid item xs={12} md={4}>
       
      </Grid>
    </Grid>
  )
}
