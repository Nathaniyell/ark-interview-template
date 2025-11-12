import React from "react";
import { TotalRevenuesCard } from "./total-revenues-card";
import { TotalOrdersCard } from "./total-orders-card";
import { NewCustomersCard } from "./new-customers-card";
import { TotalProductsSoldCard } from "./total-products-sold-card";
import { SidebarNav } from "./sidebar-nav";

export const MetricsSection = () => {
  return (
    <div className="relative flex gap-6">
      <SidebarNav />
      <div className="flex gap-6 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 max-w-2xl h-fit">
          <TotalRevenuesCard />
          <TotalOrdersCard />
          <TotalProductsSoldCard />
          <NewCustomersCard />
        </div>
        <div className="bg-[#353637] rounded-[15px] p-6 text-white flex-1 h-full">
          <h2 className="text-xl font-bold mb-4">Revenue Reports &gt; 2023</h2>
          <div className="space-y-4">
            <p className="text-sm text-white/80">
              This is a placeholder for the revenue reports chart. The chart will display sales and orders data over time.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#4de209]"></div>
                <span className="text-sm">Sales $1,216,244 ↑ 17.31%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#4de209]/60"></div>
                <span className="text-sm">Orders 48,644 ↑ 12.89%</span>
              </div>
            </div>
            <div className="mt-8 text-center text-white/60">
              Chart visualization will be rendered here
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
