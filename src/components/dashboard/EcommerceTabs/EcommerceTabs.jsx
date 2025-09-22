import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './EcommerceTabs.css';
import { useTheme } from '@mui/material/styles'
import { ecommerceStats,iconMap} from '../../../data/content';
import Card from '../../ui/Card';

export default function EcommerceTabs() {

  const theme = useTheme()
  const isDarkMode = theme.palette.mode === 'dark'

  return (
 


    <div className='eco-tabs-grid'>
      {ecommerceStats.map((stat, index) => (
        
        <div className='eco-tab' key={index}>
          <Card
            title={stat.name}
            cardColor={
              isDarkMode
                ? (index === 0 || index === 3 ? "#E5ECF6" : "#272727") // dark colors
                : (index === 0 || index === 3 ? "#E5ECF6" : "#F7F9FB") // light colors
            }
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
