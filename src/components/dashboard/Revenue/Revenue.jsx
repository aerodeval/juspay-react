import React from 'react'
import "./Revenue.css"
import Card from '../../ui/Card';

import CustomLineChart from '../../ui/LineChart';


  
export default function Revenue() {
  return (
    <Card
    title='Revenue'

    data={
    <div className='revenue-container'>

     
    <CustomLineChart></CustomLineChart></div>}

    />

  )
}
