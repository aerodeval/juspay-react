import React from 'react'
import "./Revenue.css"
import Card from '../../ui/Card';
import { LineChartData } from '../../../data/content';
import CustomLineChart from '../../ui/LineChart';


  
export default function Revenue() {
  return (
    <Card
    title='Revenue'
height={320}
    data={
    <div className='revenue-container'>

     
    <CustomLineChart lineData={LineChartData}></CustomLineChart></div>}

    />

  )
}
