import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './EcommerceTabs.css';
import { ecommerceStats,iconMap} from '../../../data/content';
import Card from '../../ui/Card';

export default function EcommerceTabs() {


  return (
 


    <div className='eco-tabs-grid'>
      {ecommerceStats.map((stat, index) => (
        
        <div className='eco-tab' key={index}>
          <Card
            title={stat.name}
            cardColor={(index === 0 || index === 3) ? "#E5ECF6" : "#F7F9FB"}
     
            minWidth="202px"
            data={
              <div className='stats-data'>
                <h3>{stat.count}</h3>

                <div className='percent-track'>
                <p>
                  {stat.percentChange}
                </p>
                <img
                      src={stat.percentChange.startsWith("+") ? iconMap.ArrowRise : iconMap.ArrowFall}
                      alt={stat.percentChange.startsWith("+") ? "Up" : "Down"}
                      style={{ width: "16px", height: "16px" }}
                    />
                
                </div>
              </div>
            }
          />
        </div>
      ))}
    </div>
      
  
  )
}
