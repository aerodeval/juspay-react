import React from 'react'
import Card from '../../ui/Card'
import CustomPieChart from '../../ui/PieChart'
import { totalSales} from '../../../data/content';
export default function TotalSales() {
  return (
<Card title='Total Sales'
minWidth={200}
data={<CustomPieChart pieData={totalSales}></CustomPieChart>}
>

</Card>
  )
}
