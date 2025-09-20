import * as React from 'react';
import CardMUI from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Card({ minWidth = 275, title="Customers" , data }) {
  return (
    <CardMUI sx={{ minWidth }}> 
      {title && (
        <Typography variant="h6" component="div" gutterBottom>
          {title}
        </Typography>
      )}
      <CardContent sx={{ p: 0 }}> {/* padding handled at Card level */}
        {data}
      </CardContent>

    </CardMUI>
  );
}
