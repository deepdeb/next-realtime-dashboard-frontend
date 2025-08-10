"use client"
import { useSocketData } from "@/context/SocketDataContext";

export default function DashBoardCards() {
    const { data, percentageChange } = useSocketData()

    const totalRevenue = data?.reduce((acc, curr) => acc + curr.totalRevenue, 0);
    const totalProfits = data?.reduce((acc, curr) => acc + curr.profit, 0);
    const totalLoss = data?.reduce((acc, curr) => acc + curr.loss, 0);

    const changeTotalRevenue = percentageChange?.changeTotalRevenue ?? 0;
    const changeProfit = percentageChange?.changeProfit ?? 0;
    const changeLoss = percentageChange?.changeLoss ?? 0;

    return (
        <div className="flex flex-col items-center space-y-5 w-full my-4">
            <div className="grid grid-cols-2 gap-2 w-full">
                <div className="rounded-xl bg-zinc-100 p-4 text-sky-500 w-full flex items-center justify-center">
                    <div>
                        <p className="text-center">Total Revenue</p>
                        <p className="text-center">{totalRevenue}</p>
                    </div>
                </div>

                <div className="grid gap-2">
                    <div className="rounded-xl bg-zinc-100 p-4 text-emerald-500 w-full">
                        <p className="text-center">Total Profits</p>
                        <p className="text-center">{totalProfits}</p>
                    </div>
                    <div className="rounded-xl bg-zinc-100 p-4 text-rose-500 w-full">
                        <p className="text-center">Total Loss</p>
                        <p className="text-center">{totalLoss}</p>
                    </div>
                </div>
            </div>

            <div className="rounded-xl bg-zinc-100 p-4 w-full">
                {changeTotalRevenue > 0 ? (
                    <p className="text-center text-emerald-500">
                        Total Revenue Increased by&nbsp;
                        {changeTotalRevenue.toFixed(2)}%
                    </p>
                ) : (
                    <p className="text-center text-rose-500">
                        Total Revenue Decreased by&nbsp;
                        {changeTotalRevenue.toFixed(2)}%
                    </p>
                )}
            </div>

            <div className="grid grid-cols-2 gap-2 w-full">
                <div className="grid gap-2">
                    <div
                        className={`rounded-xl bg-zinc-100 p-4 ${changeProfit > 0
                            ? "text-emerald-500"
                            : "text-rose-500"
                            } w-full`}
                    >
                        <p className="text-center">Profits Change</p>
                        <p className="text-center">
                            {changeProfit > 0 ? <span>&uarr;</span> : <span>&darr;</span>}
                            {changeProfit.toFixed(2)}
                        </p>
                    </div>
                    <div
                        className={`rounded-xl bg-zinc-100 p-4 ${changeLoss < 0
                            ? "text-emerald-500"
                            : "text-rose-500"
                            } w-full`}
                    >
                        <p className="text-center">Total Loss Change</p>
                        <p className="text-center">
                            {changeLoss.toFixed(2)}
                        </p>
                    </div>
                </div>
                <div className="rounded-xl bg-zinc-100 p-4 text-sky-500 w-full flex items-center justify-center">
                    <div>
                        <p className="text-center">Total Revenue Change</p>
                        <p className="text-center">
                            {changeTotalRevenue > 0 ? (
                                <span>&uarr;</span>
                            ) : (
                                <span>&darr;</span>
                            )}
                            {changeTotalRevenue.toFixed(2)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}