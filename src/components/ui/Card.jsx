import * as React from 'react';
import CardMUI from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Card({ minWidth = 275, title="Customers" , data , cardColor }) {
  return (
    <CardMUI sx={{ minWidth:minWidth,  backgroundColor: cardColor }}> 
      {title && (
        <div className='card-title'>
            <h2>
          {title}</h2>
        </div>
      )}
      <CardContent sx={{ p: 0 ,paddingBottom: "0 !important"}}> {/* padding handled at Card level */}
        {data}
      </CardContent>

    </CardMUI>
  );
}
