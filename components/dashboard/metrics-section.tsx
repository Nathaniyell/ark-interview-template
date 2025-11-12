import React from "react";
import { TotalRevenuesCard } from "./total-revenues-card";
import { TotalOrdersCard } from "./total-orders-card";
import { NewCustomersCard } from "./new-customers-card";
import { TotalProductsSoldCard } from "./total-products-sold-card";
import { SidebarNav } from "./sidebar-nav";
import { cn } from "@/lib/utils";

export const MetricsSection = () => {
  const visualizationData = [
    {
      title: "Sales",
      amount: "$1,216,244",
      percentage: "17.31%",
    },
    {
      title: "Orders",
      amount: "48,644",
      percentage: "12.89%",
    },
  ];
  return (
    <div className="relative flex flex-row gap-4 lg:gap-[50px]">
      <SidebarNav />
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-[50px] flex-1 items-stretch">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-[50px] flex-1 lg:max-w-2xl lg:h-[450px]">
          <TotalRevenuesCard />
          <TotalOrdersCard />
          <TotalProductsSoldCard />
          <NewCustomersCard />
        </div>
        <div className="bg-transparent rounded-[15px] border-2 border-[#4a4a4a] p-4 lg:p-6 text-white flex-1 flex flex-col lg:h-[450px]">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-[50px] justify-between">
            <h2 className="text-lg lg:text-xl font-bold">Revenue Reports &gt; 2023</h2>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-[50px]">
              {visualizationData.map((data) => (
                <div
                  key={data.title}
                  className="flex items-center gap-2 bg-[#353637] rounded-[8px] px-4 lg:px-10 py-2"
                >
                  <div
                    className={cn(
                      "w-2 h-2 rounded-full flex-shrink-0",
                      data.title === "Orders"
                        ? "bg-[#4de209]/60"
                        : "bg-[#4de209]"
                    )}
                  ></div>
                  <div className="text-xs sm:text-sm flex items-center gap-1 lg:gap-2 flex-wrap">
                    <span className="text-white/70 font-medium">
                      {data.title}
                    </span>
                    <span className="font-bold text-base lg:text-xl text-white">
                      {data.amount}
                    </span>
                    <span className="text-[#4de209]">↑ {data.percentage}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
