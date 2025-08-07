import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const AreaChartCanvas = ({ data }: { data: ServerData[] }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        {/* Dark theme grid and axis styling */}
        <CartesianGrid stroke="#2f2f37" strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="#6B7280" /> {/* gray text */}
        <YAxis stroke="#6B7280" />
        <Tooltip
          contentStyle={{ backgroundColor: "#1c1c1e", border: "none" }}
          itemStyle={{ color: "#e2e8f0" }}
          labelStyle={{ color: "#f1f5f9" }}
        />
        <Area
          type="monotone"
          dataKey="totalRevenue"
          stackId="1"
          stroke="#0EA5E9" // sky-500
          fill="#0EA5E9"
          fillOpacity={0.6}
        />
        <Area
          type="monotone"
          dataKey="loss"
          stackId="1"
          stroke="#F43F5E" // rose-500
          fill="#F43F5E"
          fillOpacity={0.6}
        />
        <Area
          type="monotone"
          dataKey="profit"
          stackId="1"
          stroke="#10B981" // green-600
          fill="#10B981"
          fillOpacity={0.6}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};