"use client";
import { useState, useRef } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";
import "./metricChart.module.css"

interface ChartDataPoint {
  month: string;
  sales: number;
  orders: number;
}

const chartData: ChartDataPoint[] = [
  { month: "Jan", sales: 0, orders: 0 },
  { month: "Feb", sales: 45000, orders: 240 },
  { month: "Mar", sales: 120000, orders: 600 },
  { month: "Apr", sales: 95000, orders: 500 },
  { month: "May", sales: 180000, orders: 900 },
  { month: "Jun", sales: 220000, orders: 100 },
  { month: "Jul", sales: 280000, orders: 100 },
  { month: "Aug", sales: 350000, orders: 100 },
  { month: "Sep", sales: 480000, orders: 200 },
  { month: "Oct", sales: 650000, orders: 300 },
  { month: "Nov", sales: 850000, orders: 400 },
  { month: "Dec", sales: 1200000, orders: 600 },
];

interface CustomTooltipProps extends TooltipProps<number, string> {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const CustomTooltip = ({ active, payload, label, onMouseEnter, onMouseLeave }: CustomTooltipProps) => {
  if (!active || !payload || !payload.length) return null;

  const currentMonthIndex = chartData.findIndex((d) => d.month === label);
  const currentMonth = chartData[currentMonthIndex];
  
  // Calculate YTD totals (sum from Jan to current month)
  const ytdSales = chartData
    .slice(0, currentMonthIndex + 1)
    .reduce((sum, d) => sum + d.sales, 0);
  const ytdOrders = chartData
    .slice(0, currentMonthIndex + 1)
    .reduce((sum, d) => sum + d.orders, 0);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat("en-US").format(value);
  };

  return (
    <div
      style={{
        backgroundColor: "#272829",
        border: "1px solid #272829",
        borderRadius: "8px",
        width: "410px",
        // height: "181px",               
        fontFamily: "'Jost', sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",     
        boxSizing: "border-box",
        pointerEvents: "auto",
      }}
      className="px-[13px] pb-[13px] pt-1"
      onMouseEnter={(e) => {
        e.stopPropagation();
        onMouseEnter?.();
      }}
      onMouseLeave={(e) => {
        e.stopPropagation();
        onMouseLeave?.();
      }}
      onMouseMove={(e) => {
        e.stopPropagation();
      }}
    >
     
      {/* Current Month Column */}
      <div className="" style={{ display: "flex", flexDirection: "column", gap: "13px", flex: 1, }}>
        <div
          style={{
            color: "#FFFFFF",
            fontSize: "18px",
            fontWeight: 500,
            fontFamily: "'Jost', sans-serif",
          }}
          className="border-b border-[#bfbfbf]/25 border-r pb-1 text-center"
        >
          {label.toUpperCase()} 2023
        </div>
        <div className="space-y-[13px]  mr-[13px]">

        {/* Sales Card */}
        <div
          style={{
            backgroundColor: "#121212",
            width: "180px",
            // height: "53px",
            borderRadius: "5px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxSizing: "border-box",
          }}        
          className="mx-auto px-[12px] py-[5px]"
        >
          <div style={{ color: "#B0B3B8", fontSize: "12px", fontFamily: "'Jost', sans-serif" }}>
            SALES
          </div>
          <div style={{ color: "#B0B3B8", fontSize: "16px", fontFamily: "'Jost', sans-serif", fontWeight: 500 }}>       
            {formatCurrency(currentMonth.sales)}
          </div>
        </div>

        {/* Orders Card */}
        <div
          style={{
            backgroundColor: "#121212",
            width: "180px",
            // height: "53px",
            borderRadius: "5px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxSizing: "border-box",
          }}
          className="mx-auto px-[12px] py-[5px]"
        >
          <div style={{ color: "#B0B3B8", fontSize: "12px", fontFamily: "'Jost', sans-serif" }}>
            ORDERS
          </div>
          <div style={{ color: "#488011", fontSize: "16px", fontFamily: "'Jost', sans-serif", fontWeight: 500 }}>
            {formatNumber(currentMonth.orders)}
          </div>
        </div>
        </div>
      </div>

      {/* YTD Column */}
      <div style={{ display: "flex", flexDirection: "column", gap: "13px", flex: 1 }} className="">
        <div
          style={{
            color: "#FFFFFF",
            fontSize: "18px",
            fontWeight: 500,
            fontFamily: "'Jost', sans-serif",
          }}
          className="border-b border-[#bfbfbf]/25 border-l text-center pb-1"
        >
          YTD 2023
        </div>
        <div className="space-y-[13px]">

        {/* Sales Card */}
        <div
          style={{
            backgroundColor: "#121212",
              width: "180px",
              // height: "53px",
            borderRadius: "5px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxSizing: "border-box",
          }}
     className="mx-auto px-[12px] py-[5px]"
        >
          <div style={{ color: "#B0B3B8", fontSize: "12px", fontFamily: "'Jost', sans-serif" }}>
            SALES
          </div>
          <div style={{ color: "#B0B3B8", fontSize: "16px", fontFamily: "'Jost', sans-serif", fontWeight: 500 }}>
            {formatCurrency(ytdSales)}
          </div>
        </div>

        {/* Orders Card */}
        <div
          style={{
            backgroundColor: "#121212",
              width: "180px",
              // height: "53px",
            borderRadius: "5px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxSizing: "border-box",
          }}
          className="mx-auto px-[12px] py-[5px]"
        >
          <div style={{ color: "#B0B3B8", fontSize: "12px", fontFamily: "'Jost', sans-serif" }}>
            ORDERS
          </div>
          <div style={{ color: "#488011", fontSize: "16px", fontFamily: "'Jost', sans-serif", fontWeight: 500 }}>
            {formatNumber(ytdOrders)}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

const MetricsChart = () => {
  const [lockedTooltip, setLockedTooltip] = useState<{ label: string; payload: Array<{ value: number; dataKey: string }> } | null>(null);
  const tooltipTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isHoveringTooltipRef = useRef(false);
  const lastTooltipDataRef = useRef<{ label: string; payload: Array<{ value: number; dataKey: string }> } | null>(null);

  const handleTooltipMouseEnter = () => {
    isHoveringTooltipRef.current = true;
    if (tooltipTimeoutRef.current) {
      clearTimeout(tooltipTimeoutRef.current);
      tooltipTimeoutRef.current = null;
    }
    // Lock to the last tooltip data when entering
    if (lastTooltipDataRef.current) {
      setLockedTooltip(lastTooltipDataRef.current);
    }
  };

  const handleTooltipMouseLeave = () => {
    isHoveringTooltipRef.current = false;
    // Small delay before unlocking to prevent flickering
    tooltipTimeoutRef.current = setTimeout(() => {
      if (!isHoveringTooltipRef.current) {
        setLockedTooltip(null);
      }
    }, 150);
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={chartData}
        margin={{ top: 9, right: 20, left: 20, bottom: 25 }} // Increased side margins
      >
        <CartesianGrid vertical={false} strokeWidth={2} stroke="#272829" />

        <XAxis
          dataKey="month"
          stroke="#b0b3b8"
          tick={{ fill: "#b0b3b8", fontSize: 12, fontFamily: "'Jost', sans-serif" }}
          axisLine={false}
          tickLine={false}
          dy={20}
          height={20}
          interval={0}
          // This ensures even spacing and proper alignment
          padding={{ left: 9, right: 13 }} // Adjust padding for edge labels
        />

        {/* Left Y-Axis for Sales (visible) */}
        <YAxis
          yAxisId="left"
          stroke="#b0b3b8"
          tick={{ fill: "#b0b3b8", fontSize: 12, fontFamily: "'Jost', sans-serif" }}
          axisLine={false}
          tickLine={false}
          tickFormatter={(value) => {
            if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
            if (value >= 1000) return `${(value / 1000).toFixed(0)}K`;
            return value.toString();
          }}
          domain={[0, 'auto']}
          dx={-10} // Reduced dx
          width={45} // Reduced width
        />

        {/* Right Y-Axis for Orders (hidden labels) */}
        <YAxis
          yAxisId="right"
          orientation="right"
          stroke="transparent"
          tick={false}
          axisLine={false}
          tickLine={false}
          domain={[0, 'auto']}
          width={0}
        />

        <Tooltip 
          content={(props: TooltipProps<number, string>) => {
            // Store the current tooltip data in ref (no state update during render)
            if (props.active && props.label && props.payload) {
              const currentData = { 
                label: props.label as string, 
                payload: props.payload as Array<{ value: number; dataKey: string }>
              };
              lastTooltipDataRef.current = currentData;
            }
            
            // Use locked tooltip data if available and we're hovering over tooltip
            const tooltipProps = (lockedTooltip && isHoveringTooltipRef.current)
              ? { ...props, active: true, label: lockedTooltip.label, payload: lockedTooltip.payload }
              : props;
              
            return (
              <CustomTooltip 
                {...tooltipProps}
                onMouseEnter={handleTooltipMouseEnter}
                onMouseLeave={handleTooltipMouseLeave}
              />
            );
          }} 
          shared={false}
        />

        {/* Sales line - uses left Y-axis */}
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="sales"
          stroke="#4de209"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 6, fill: "#4de209", strokeWidth: 2, stroke: "#272829" }}
          name="Sales"
        />

        {/* Orders line - uses right Y-axis */}
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="orders"
          stroke="#4de209"
          strokeWidth={2}
          strokeOpacity={0.5}
          dot={false}
          activeDot={{ r: 6, fill: "#4de209", strokeWidth: 2, stroke: "#272829", fillOpacity: 0.5 }}
          name="Orders"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MetricsChart;