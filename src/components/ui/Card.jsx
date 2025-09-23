import * as React from 'react';
import CardMUI from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Card({ minWidth ,width, height, title="Customers" , data , cardColor }) {
  return (
    <div style={{minWidth:minWidth,width, maxHeight:height}}>
    <CardMUI sx={{ backgroundColor: cardColor , height: height, boxShadow: "none",
    backgroundImage: "none", }}> 
      {title && (
        <div className='card-title'>
            <h2>
          {title}</h2>
        </div>
      )}
      <CardContent sx={{ p: 0 ,paddingBottom: "0 !important", height:"100%",boxShadow: "none",
    backgroundImage: "none",}}> {/* padding handled at Card level */}
        {data}
      </CardContent>

    </CardMUI>
    </div>
  );
}
