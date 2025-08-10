import React from "react";
import { PieChart, Pie, Cell } from "recharts";

// Data type
type ServerData = {
  name: string;
  totalRevenue: number;
  loss: number;
  profit: number;
};

const getProfitPercent = (profit: number, revenue: number) => {
  if (revenue === 0) return 0;
  return Math.round((Math.max(0, profit) / revenue) * 100);
};


const COLORS = ["#8B5CF6", "#0EA5E9", "#F43F5E", "#10B981", "#F59E0B", "#EC4899", "#22D3EE", "#4ADE80"];

const DonutChartCard = ({ companyData, index }: { companyData: ServerData; index: number }) => {
  const profitPercent = getProfitPercent(companyData.profit, companyData.totalRevenue);
  const chartData = [
    { name: "Profit", value: profitPercent },
    { name: "Remaining", value: 100 - profitPercent },
  ];

  return (
    <div style={{ width: 160, textAlign: "center" }}>
        <PieChart width={100} height={100}>
          <Pie
            data={chartData}
            innerRadius={20}
            outerRadius={35}
            startAngle={90}
            endAngle={-270}
            dataKey="value"
            stroke="none"
            label={({ cx, cy }) => (
              <text
                x={cx}
                y={cy}
                textAnchor="middle"
                dominantBaseline="central"
                style={{ fontSize: 12, fill: "#6B7280", fontWeight: 600 }}
              >
                {profitPercent}%
              </text>
            )}
          >
            <Cell fill={COLORS[index % COLORS.length]} />
            <Cell fill="#E5E7EB" /> {/* light gray background */}
          </Pie>
        </PieChart>
      <div style={{ fontWeight: 600, fontSize: 14, marginTop: 8, color: "#6B7280" }}>{companyData.name}</div>
      <div style={{ fontSize: 12, color: "#6B7280" }}>
        Revenue: {companyData.totalRevenue.toLocaleString()}
      </div>
    </div>
  );
};

export const DonutChartGrid = ({ data }: { data: ServerData[] }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "2px", justifyContent: "center" }}>
      {data.map((companyData, i) => (
        <DonutChartCard key={companyData.name} companyData={companyData} index={i} />
      ))}
    </div>
  );
};
