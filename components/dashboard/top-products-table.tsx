"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface Product {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  revenue: string;
  orders: string;
  initials: string;
}

interface TopProductsTableProps {
  products: Product[];
}

export const TopProductsTable = ({ products }: TopProductsTableProps) => {
  const [activeTimeframe, setActiveTimeframe] = useState("Month");
  const [showYearDropdown, setShowYearDropdown] = useState(false);
  const [showMonthDropdown, setShowMonthDropdown] = useState(false);
  const [selectedYear, setSelectedYear] = useState(2026);
  const [selectedMonth, setSelectedMonth] = useState("January");
  const yearDropdownRef = useRef<HTMLDivElement>(null);
  const monthDropdownRef = useRef<HTMLDivElement>(null);

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const years = Array.from({ length: 10 }, (_, i) => 2026 - i);
  const timeframes = ["Today", "Week", "Month", "Year"];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (yearDropdownRef.current && !yearDropdownRef.current.contains(event.target as Node)) {
        setShowYearDropdown(false);
      }
      if (monthDropdownRef.current && !monthDropdownRef.current.contains(event.target as Node)) {
        setShowMonthDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-transparent rounded-[12px] border border-[#bfbfbf]/25 text-white flex-1 flex flex-col lg:h-[400px] overflow-hidden">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between border-b border-b-[#bfbfbf]/25 pl-4 pr-1 py-4 h-[49px]">
        <div>
          <h2 className="text-sm font-semibold">
            Top Products Sold &gt;{" "}
            <span 
              ref={monthDropdownRef}
              className="font-semibold text-[#4de209] cursor-pointer relative inline-block"
              onClick={() => setShowMonthDropdown(!showMonthDropdown)}
            >
              {selectedMonth} {selectedYear}
              {showMonthDropdown && (
                <div 
                  className="absolute top-full left-0 mt-2 bg-[#272829] rounded-[5px] border border-[#bfbfbf]/25 z-50 min-w-[150px] max-h-[200px] overflow-y-auto shadow-lg"
                >
                  {months.map((month) => (
                    <div
                      key={month}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedMonth(month);
                        setShowMonthDropdown(false);
                      }}
                      className={cn(
                        "px-4 py-2 text-sm cursor-pointer hover:bg-[#3a3b3c] transition-colors",
                        selectedMonth === month && "text-[#4de209]"
                      )}
                    >
                      {month}
                    </div>
                  ))}
                </div>
              )}
            </span>
          </h2>
        </div>
        <div>
          <p className="text-[13px] text-[#4de209] bg-[#272829] rounded-[5px] px-4 py-1 text-center cursor-pointer whitespace-nowrap">
            Get Free $100 ARKai Ad Spend on Your Best Selling Products*
          </p>
        </div>
        <div>
          <ul className="flex items-center gap-[12px] text-sm">
            {timeframes.map((label) => (
              <li key={label}>
                {label === "Year" ? (
                  <div ref={yearDropdownRef} className="relative">
                    <button
                      onClick={() => {
                        setActiveTimeframe(label);
                        setShowYearDropdown(!showYearDropdown);
                      }}
                      className={cn(
                        "rounded-[5px] px-2 py-1 min-w-[56px] text-center border border-transparent transition-colors cursor-pointer relative",
                        activeTimeframe === label
                          ? "bg-[#272829] text-[#4de209]"
                          : "bg-transparent text-white/60 hover:text-white"
                      )}
                    >
                      {label}
                    </button>
                    {showYearDropdown && (
                      <div 
                        className="absolute top-full right-0 mt-2 bg-[#272829] rounded-[5px] border border-[#bfbfbf]/25 z-50 min-w-[100px] max-h-[200px] overflow-y-auto shadow-lg"
                      >
                        {years.map((year) => (
                          <div
                            key={year}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedYear(year);
                              setShowYearDropdown(false);
                            }}
                            className={cn(
                              "px-4 py-2 text-sm cursor-pointer hover:bg-[#3a3b3c] transition-colors",
                              selectedYear === year && "text-[#4de209]"
                            )}
                          >
                            {year}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setActiveTimeframe(label);
                      setShowYearDropdown(false);
                    }}
                    className={cn(
                      "rounded-[5px] px-2 py-1 min-w-[56px] text-center border border-transparent transition-colors cursor-pointer",
                      activeTimeframe === label
                        ? "bg-[#272829] text-[#4de209]"
                        : "bg-transparent text-white/60 hover:text-white"
                    )}
                  >
                    {label}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col flex-1 overflow-hidden pr-[12px]">
        {/* Fixed scrolling container */}
        <div className="flex-1 table-scrollable overflow-y-auto">
          {/* Header - sticky at top of scrollable container */}
          <div className="sticky top-0 z-40 px-[19px] pt-[29px] pb-0">
            <div className="grid grid-cols-[1fr_120px_120px_120px] text-xs uppercase tracking-[0.08em] text-white font-semibold bg-[#272829] h-[36.5px] items-center rounded-[5px] pl-[22px]">
              <div>Top Products</div>
              <div className="flex justify-center items-center w-5/6 ml-auto">Price</div>
              <div className="flex justify-center items-center w-5/6 ml-auto">Revenue</div>
              <div className="flex justify-center items-center w-5/6 ml-auto">Orders</div>
            </div>
          </div>
          
          {/* Body - scrollable content */}
          <div className="flex flex-col px-[19px]">
            {products.map((product, index) => (
              <div key={product.id + index} className="grid border-b border-[#bfbfbf]/25 grid-cols-[1fr_120px_120px_120px]">
                {/* Product Column */}
                <div className="flex items-center min-w-0 py-[14px] pl-[25px] pr-2">
                  <div className="flex items-center gap-[14px] min-w-0 w-full">
                    <div className="w-[38px] h-[38px] rounded-[8px] bg-[#272829] flex items-center justify-center text-sm font-semibold text-white/70 flex-shrink-0">
                      {product.initials}
                    </div>
                    <div className="flex flex-col gap-1 min-w-0 flex-1">
                      <span className="text-sm text-white/60 truncate">
                        {product.title}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Price Column */}
                <div className="flex justify-center items-center py-[14px] text-sm text-white/60 w-5/6 ml-auto">
                  {product.price}
                </div>

                {/* Revenue Column */}
                <div className="flex justify-center items-center py-[14px] text-sm text-white/60 w-5/6 ml-auto">
                  {product.revenue}
                </div>

                {/* Orders Column */}
                <div className="flex justify-center items-center py-[14px] text-sm text-white/60 w-5/6 ml-auto">
                  {product.orders}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

