import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";

const PieGraph = () => {
  const data = [
    { name: "Wins", value: 5 },
    { name: "Losses", value: 7 },
  ];

  const COLORS = ["#5382e9", "#e84057"];

  return (
    <div style={{ width: "88px", height: "88px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={27}
            outerRadius={40}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
            <Label
              value={`Total: ${data.reduce(
                (sum, entry) => sum + entry.value,
                0
              )}`}
              position="center"
              fontSize={12}
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieGraph;
