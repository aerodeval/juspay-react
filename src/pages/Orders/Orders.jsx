import React from 'react';
import OrdersList from '../../components/ui/OrdersList';
import { OrdersList as ordersData } from '../../data/content';

export default function Orders() {
  return (
    
      <OrdersList data={ordersData} itemsPerPage={10} />
 
  );
}