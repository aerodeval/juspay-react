import React from 'react'
import Card from '../../ui/Card'
import FlexibleTable from '../../ui/FlexibleTable'
import { productColumns,topSellingProducts} from '../../../data/content';

export default function TopProducts() {
  return (
 <Card title='Top Selling Products' data={


  <FlexibleTable data={topSellingProducts } columns={productColumns} ></FlexibleTable>  
 }></Card>
  )
}
