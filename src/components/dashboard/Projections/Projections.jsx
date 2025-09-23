import React from 'react'
import "./Projections.css"

import Card from '../../ui/Card'
import stackedChartData from '../../ui/Barchart';
import BarchartCustom from '../../ui/Barchart';






export default function Projections() {
  return (
    <div className='projections-tab'>
  <Card
    title='Projections vs Actuals'
    minWidth={400}

    data={
      <div className='barchart-container'>
<BarchartCustom data={stackedChartData}/>

</div>
    }
  ></Card></div>
  )
}
