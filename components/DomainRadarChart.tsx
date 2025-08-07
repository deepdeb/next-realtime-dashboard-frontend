import React from "react";
import {
    Legend,
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
    ResponsiveContainer,
} from "recharts";

export const DomainRadarChart = ({ data }: { data: ServerData[] }) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                {/* Subtle grid lines for dark background */}
                <PolarGrid stroke="#2f2f37" />
                <PolarAngleAxis dataKey="name" stroke="#cbd5e1" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} stroke="#cbd5e1" />
                <Radar
                    name="Profit"
                    dataKey="profit"
                    stroke="#4ade80" // Tailwind green-400
                    fill="#4ade80"
                    fillOpacity={0.4}
                />
                <Radar
                    name="Revenue"
                    dataKey="totalRevenue"
                    stroke="#38bdf8" // Tailwind sky-400
                    fill="#38bdf8"
                    fillOpacity={0.4}
                />
                <Legend
                    wrapperStyle={{ color: "#e2e8f0" }} // Optional: white-ish legend text
                />
            </RadarChart>
        </ResponsiveContainer>
    );
};
