"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { socket } from "@/socket";

type SocketDataContextType = {
  data: ServerData[];
  percentageChange: Change | null;
};

const SocketDataContext = createContext<SocketDataContextType>({
  data: [],
  percentageChange: null,
});

export const SocketDataProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<ServerData[]>([]);
  const [percentageChange, setPercentageChange] = useState<Change | null>(null);

  useEffect(() => {
    let previousData: ServerData[] = [];

    const handleSocketData = (serverData: ServerData[]) => {
      console.log("Data received from backend:", serverData);

      if (previousData.length > 0) {
        const previousTotalRevenue = previousData.reduce((a, c) => a + c.totalRevenue, 0);
        const currentTotalRevenue = serverData.reduce((a, c) => a + c.totalRevenue, 0);
        const changeTotalRevenue =
          previousTotalRevenue === 0 ? 0 : ((currentTotalRevenue - previousTotalRevenue) / previousTotalRevenue) * 100;

        const previousTotalLoss = previousData.reduce((a, c) => a + c.loss, 0);
        const currentTotalLoss = serverData.reduce((a, c) => a + c.loss, 0);
        const changeLoss =
          previousTotalLoss === 0 ? 0 : ((currentTotalLoss - previousTotalLoss) / previousTotalLoss) * 100;

        const previousTotalProfit = previousData.reduce((a, c) => a + c.profit, 0);
        const currentTotalProfit = serverData.reduce((a, c) => a + c.profit, 0);
        const changeProfit =
          previousTotalProfit === 0 ? 0 : ((currentTotalProfit - previousTotalProfit) / previousTotalProfit) * 100;

        setPercentageChange({ changeTotalRevenue, changeLoss, changeProfit });
      }

      setData(serverData);
      previousData = serverData;
    };

    socket.on("time", handleSocketData);
    return () => {
      socket.off("time", handleSocketData)
    };
  }, []);

  return (
    <SocketDataContext.Provider value={{ data, percentageChange }}>
      {children}
    </SocketDataContext.Provider>
  );
};

export const useSocketData = () => useContext(SocketDataContext);
