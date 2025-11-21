"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface LocationMetric {
  country: string;
  revenue: string;
  orders: string;
}

interface RevenueByLocationTableProps {
  locationMetrics: LocationMetric[];
}

export const RevenueByLocationTable = ({ locationMetrics }: RevenueByLocationTableProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedYear, setSelectedYear] = useState(2026);
  const [selectedMonth, setSelectedMonth] = useState("January");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const years = Array.from({ length: 10 }, (_, i) => 2026 - i);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="lg:h-[400px] rounded-[12px] border border-[#bfbfbf]/25 text-white flex flex-col overflow-hidden">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between px-4 py-4 border-b border-[#bfbfbf]/25 h-[49px]">
        <h2 className="text-sm font-semibold">
          Revenue &amp; Orders by Location &gt;{" "}
          <span 
            ref={dropdownRef}
            className="text-[#4de209] cursor-pointer relative inline-block"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {selectedMonth} {selectedYear}
            {showDropdown && (
              <div 
                className="absolute top-full left-0 mt-2 bg-[#272829] rounded-[5px] border border-[#bfbfbf]/25 z-50 min-w-[150px] max-h-[200px] overflow-y-auto shadow-lg"
              >
                {months.map((month) => (
                  <div
                    key={month}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedMonth(month);
                      setShowDropdown(false);
                    }}
                    className={cn(
                      "px-4 py-2 text-sm cursor-pointer hover:bg-[#3a3b3c] transition-colors text-white",
                      selectedMonth === month && "text-[#4de209]"
                    )}
                  >
                    {month}
                  </div>
                ))}
                <div className="border-t border-[#bfbfbf]/25 my-1"></div>
                {years.map((year) => (
                  <div
                    key={year}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedYear(year);
                      setShowDropdown(false);
                    }}
                    className={cn(
                      "px-4 py-2 text-sm cursor-pointer hover:bg-[#3a3b3c] transition-colors text-white",
                      selectedYear === year && "text-[#4de209]"
                    )}
                  >
                    {year}
                  </div>
                ))}
              </div>
            )}
          </span>
        </h2>
        <button className="w-full lg:w-auto rounded-[5px] bg-[#272829] text-[#4de209] text-[13px] px-3 py-1 cursor-pointer">
          Try ARKai Ads
        </button>
      </div>
      <div className="flex flex-col flex-1 overflow-hidden pr-3">
        {/* Fixed scrolling container */}
        <div className="flex-1 table-scrollable overflow-y-auto">
          {/* Header - sticky at top of scrollable container */}
          <div className="sticky top-0 z-10 px-[19px] pt-[29px] pb-0">
            <div className="grid grid-cols-[1fr_120px_100px] text-xs uppercase tracking-[0.08em] text-white font-semibold bg-[#272829] h-[36.5px] items-center rounded-[5px] pl-[22px]">
              <div>Top Countries</div>
              <div className="flex justify-center items-center">Revenue</div>
              <div className="flex justify-center items-center">Orders</div>
            </div>
          </div>
          
          {/* Body - scrollable content */}
          <div className="flex flex-col px-[19px]">
            {locationMetrics.map((location, index) => (
              <div key={location.country + index} className="grid border-b border-[#bfbfbf]/25 grid-cols-[1fr_120px_100px]">
                {/* Country Column */}
                <div className="flex items-center min-w-0 py-[10px] text-sm text-white/60 pr-2 pl-[22px]">
                  {location.country}
                </div>

                {/* Revenue Column */}
                <div className="flex justify-center items-center py-[10px] text-sm text-white/60">
                  {location.revenue}
                </div>

                {/* Orders Column */}
                <div className="flex justify-center items-center py-[10px] text-sm text-white/60">
                  {location.orders}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

