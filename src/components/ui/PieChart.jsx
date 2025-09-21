import { Cell, Pie, PieChart, Legend, ResponsiveContainer } from 'recharts';


const COLORS = ['#1C1C1C', '#95A4FC', '#BAEDBD', '#B1E3FF'];

export default function CustomPieChart({ pieData }) {
  // Transform the data to match recharts format
  const transformedData = pieData?.map(item => ({
    name: item.key,
    value: item.sale
  })) || data;

  return (
    <ResponsiveContainer minWidth={154} minHeight={260}> 
      <PieChart width={"100%"} >
        <Pie
          data={transformedData}
          cx="50%"
          cy="35%"
          innerRadius="30%"
          outerRadius="60%"
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {transformedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        {/* Legend positioned below the pie */}
        <Legend
       
          layout="vertical"
          verticalAlign="bottom"
          align="center"
          iconSize={6}
          iconType="circle"  
          wrapperStyle={{ bottom: "16px", fontSize:"12px", left:0 , width:"100%"}}
          formatter={(value, entry) => (
            <div style={{ display: "flex", justifyContent: "space-between",  left: "10px",        // This overrides left: 0
                width: "100%", 
                position: "relative",  
                top: "-14px",color:"#000000" }}>
              <span>{entry.payload.name}</span>
              <span >${entry.payload.value}</span>
            </div>
          )}

        />
      </PieChart>
    </ResponsiveContainer>
  );
}
