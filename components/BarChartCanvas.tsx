import React from "react";
import {
    Bar,
    BarChart,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
    CartesianGrid,
} from "recharts";

export const BarChartCanvas = ({ data }: { data: ServerData[] }) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                {/* Optional: Add grid with subtle lines */}
                <CartesianGrid stroke="#2f2f37" strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="#6B7280" /> {/* gray text */}
                <YAxis stroke="#6B7280" />
                <Tooltip
                    contentStyle={{ backgroundColor: "#1c1c1e", border: "none" }}
                    itemStyle={{ color: "#e2e8f0" }}
                    labelStyle={{ color: "#f1f5f9" }}
                />
                <Legend/>
                <Bar dataKey="totalRevenue" stackId="a" fill="#0EA5E9" /> {/* sky-500 */}
                <Bar dataKey="profit" stackId="b" fill="#10B981" /> {/* emerald-500 */}
                <Bar dataKey="loss" stackId="c" fill="#F43F5E" /> {/* rose-500 */}
            </BarChart>
        </ResponsiveContainer>
    );
};
