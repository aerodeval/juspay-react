import React from 'react';
import Card from '../../components/ui/Card';
import FlexibleTable from '../../components/ui/FlexibleTable';

// Sample orders data
const ordersData = [
  {
    id: 'ORD-001',
    customer: 'John Doe',
    product: 'Wireless Headphones',
    amount: 299.99,
    status: 'Completed',
    date: '2024-01-15',
    payment: 'Credit Card'
  },
  {
    id: 'ORD-002',
    customer: 'Jane Smith',
    product: 'Smart Watch',
    amount: 199.99,
    status: 'Processing',
    date: '2024-01-16',
    payment: 'PayPal'
  },
  {
    id: 'ORD-003',
    customer: 'Mike Johnson',
    product: 'Laptop Stand',
    amount: 89.99,
    status: 'Shipped',
    date: '2024-01-17',
    payment: 'Credit Card'
  },
  {
    id: 'ORD-004',
    customer: 'Sarah Wilson',
    product: 'Bluetooth Speaker',
    amount: 149.99,
    status: 'Pending',
    date: '2024-01-18',
    payment: 'Bank Transfer'
  },
  {
    id: 'ORD-005',
    customer: 'David Brown',
    product: 'Gaming Mouse',
    amount: 79.99,
    status: 'Completed',
    date: '2024-01-19',
    payment: 'Credit Card'
  }
];

const columns = [
  { key: 'id', label: 'Order ID', sortable: true },
  { key: 'customer', label: 'Customer', sortable: true },
  { key: 'product', label: 'Product', sortable: true },
  { key: 'amount', label: 'Amount', sortable: true, format: (value) => `$${value}` },
  { key: 'status', label: 'Status', sortable: true },
  { key: 'date', label: 'Date', sortable: true },
  { key: 'payment', label: 'Payment Method', sortable: true }
];

const getStatusColor = (status) => {
  switch (status) {
    case 'Completed':
      return '#4CAF50';
    case 'Processing':
      return '#FF9800';
    case 'Shipped':
      return '#2196F3';
    case 'Pending':
      return '#F44336';
    default:
      return '#666';
  }
};

export default function Orders() {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ marginBottom: '24px', color: '#1C1C1C' }}>Orders List</h1>
      
      <Card 
        title="Recent Orders"
        data={
          <FlexibleTable 
            data={ordersData}
            columns={columns}
            renderCell={(column, value, row) => {
              if (column.key === 'status') {
                return (
                  <span 
                    style={{ 
                      color: getStatusColor(value),
                      fontWeight: '500',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      backgroundColor: `${getStatusColor(value)}20`
                    }}
                  >
                    {value}
                  </span>
                );
              }
              return value;
            }}
          />
        }
      />
    </div>
  );
}
