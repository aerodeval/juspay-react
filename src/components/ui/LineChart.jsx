import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { LineChartData } from "../../data/content";
export default function CustomLineChart({ LineData }) { // destructure props

  const solidLine = LineChartData.map((d, i) => (i < 3 ? d.value : null)); // first half solid
  const dottedLine = LineChartData.map((d, i) => (i >= 3 ? d.value : null)); // second half dotted



  return (
    <div style={{ minWidth: 450, height: 252  }}>
      <ResponsiveContainer width="100%" maxHeight="252px">
        <LineChart data={LineChartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="0 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend sx={{bottom:"265px"}} />
          <Line type="monotone" dataKey="Current Week" stroke="#8884d8"  strokeDasharray="5 5" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Previous Week" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
