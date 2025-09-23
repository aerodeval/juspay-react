import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { stackedChartData } from '../../data/content';





export default function BarchartCustom(data) {
  return (

<ResponsiveContainer width={"100%"} minHeight={168}>
      <BarChart margin={{ right: 5}}
        data={stackedChartData}
      >
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month"    stroke="#CCCDCF"   tickLine={false}   tick={{ fill: "#9FA0A2", fontSize: 12, fontWeight: 400 }}  />
        <YAxis  width={43}  domain={[0, 30]} ticks={[0, 10, 20, 30]}   tickFormatter={(value) => `${value}M`}    tickLine={false}  axisLine={false}/>
        <Tooltip
          formatter={(value) => `${value}M`} // show values in millions
          labelFormatter={(label) =>
            stackedChartData.find((d) => d.month === label)?.monthFull
          }


        />
 
        <Bar dataKey="projections" stackId="a" fill="#D0DFEB" name="Projections"   />
        <Bar dataKey="actuals" stackId="a" fill="#A8C5DA" name="Actuals"  radius={[4, 4, 0, 0]}  />
      </BarChart>
    </ResponsiveContainer>


  )
}
