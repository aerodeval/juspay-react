import React from 'react'
import Card from '../../ui/Card'

import stackedChartData from '../../ui/Barchart';
import BarchartCustom from '../../ui/Barchart';






export default function Projections() {
  return (
  <Card
    title='Projections vs Actuals'
    minWidth={400}

    data={
      <div className='barchart-container'>
<BarchartCustom data={stackedChartData}/>

</div>
    }
  ></Card>
  )
}
