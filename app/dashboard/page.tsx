"use client";
import React from "react";
import { AreaChartCanvas } from "../../components/AreaChartCanvas";
import { BarChartCanvas } from "../../components/BarChartCanvas";
import { DonutChartGrid } from "../../components/DonutChartGrid";
import { useSocketData } from "@/context/SocketDataContext";

export default function Dashboard() {
    const { data } = useSocketData()

    return (
        <div className="h-screen w-screen flex flex-col items-center gap-10 justify-center px-10 py-4">
            <div className="flex items-center w-full">
                <BarChartCanvas data={data} />
                <DonutChartGrid data={data} />
            </div>
            <AreaChartCanvas data={data} />
        </div>
    );
};