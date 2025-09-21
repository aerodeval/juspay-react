import React from 'react'


export default function CustomLineChart(LineData) {
  return (
  
<div className='line-chart-container'>
    <div className='seperator'></div>
    <div className='line-chart-index'>
        <div className='current-index'>
    <div className='dot'></div>
    <h2>Current Week <span>$58,211</span></h2></div>
    <div className='previous-index'>  <div className='dot'></div>  
    <h2>Previous Week <span>$68,768</span></h2></div>
    </div>


<img className='line-chart-img' alt='Line chart' src='src/assets/charts/LineChart.png'>
</img>
</div>


  )
}
