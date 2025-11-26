"use client";
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
import { useCallback, useMemo } from "react";
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

// Move formatting functions outside component to prevent recreation
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

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  // Memoize calculations to prevent unnecessary recalculations
  // Must be called before early return to satisfy React hooks rules
  const { currentMonth, ytdSales, ytdOrders } = useMemo(() => {
    if (!label) {
      return { currentMonth: null, ytdSales: 0, ytdOrders: 0 };
    }
    const currentMonthIndex = chartData.findIndex((d) => d.month === label);
    const currentMonth = chartData[currentMonthIndex];
    
    // Calculate YTD totals (sum from Jan to current month)
    const ytdSales = chartData
      .slice(0, currentMonthIndex + 1)
      .reduce((sum, d) => sum + d.sales, 0);
    const ytdOrders = chartData
      .slice(0, currentMonthIndex + 1)
      .reduce((sum, d) => sum + d.orders, 0);

    return { currentMonth, ytdSales, ytdOrders };
  }, [label]);

  if (!active || !payload || !payload.length || !currentMonth) return null;

  // Calculate transform to position tooltip to the left of the point
  const tooltipWidth = 410;
  const offset = 20;

  return (
    <div
      style={{
        backgroundColor: "#272829",
        border: "1px solid #272829",
        borderRadius: "8px",
        width: `${tooltipWidth}px`,
        fontFamily: "'Jost', sans-serif",
        boxSizing: "border-box",
        pointerEvents: "auto",
        transform: `translate(calc(-100% - ${offset}px), -50%)`,
      }}
      className="px-[13px] pb-[13px] pt-1"
    >
      {/* Grid layout: 2 columns, header row spans both columns */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "13px" }}>
        {/* Header Row - spans both columns */}
        <div
          style={{
            gridColumn: "1 / -1",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            borderBottom: "1px solid rgba(191, 191, 191, 0.25)",
            paddingBottom: "6px",
          }}
        >
          <div
            style={{
              color: "#FFFFFF",
              fontSize: "18px",
              fontWeight: 500,
              fontFamily: "'Jost', sans-serif",
              textAlign: "center",
              borderRight: "1px solid rgba(191, 191, 191, 0.25)",
              paddingRight: "13px",
            }}
          >
            {label.toUpperCase()} 2023
          </div>
          <div
            style={{
              color: "#FFFFFF",
              fontSize: "18px",
              fontWeight: 500,
              fontFamily: "'Jost', sans-serif",
              textAlign: "center",
              borderLeft: "1px solid rgba(191, 191, 191, 0.25)",
              paddingLeft: "13px",
            }}
          >
            YTD 2023
          </div>
        </div>

        {/* Current Month Column */}
        <div className="" style={{ display: "flex", flexDirection: "column", gap: "13px" }}>
          {/* Sales Card */}
          <div
            style={{
              backgroundColor: "#121212",
              width: "180px",
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
            <div style={{ color: "#4de209", fontSize: "16px", fontFamily: "'Jost', sans-serif", fontWeight: 500 }}>       
              {formatCurrency(currentMonth.sales)}
            </div>
          </div>

          {/* Orders Card */}
          <div
            style={{
              backgroundColor: "#121212",
              width: "180px",
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

        {/* YTD Column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "13px" }}>
          {/* Sales Card */}
          <div
            style={{
              backgroundColor: "#121212",
              width: "180px",
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
            <div style={{ color: "#4de209", fontSize: "16px", fontFamily: "'Jost', sans-serif", fontWeight: 500 }}>
              {formatCurrency(ytdSales)}
            </div>
          </div>

          {/* Orders Card */}
          <div
            style={{
              backgroundColor: "#121212",
              width: "180px",
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
  // Simplified tooltip - removed state management that was causing re-render loops
  const tooltipContent = useCallback((props: TooltipProps<number, string>) => {
    if (props.active) {
      return (
        <CustomTooltip 
          {...(props as TooltipProps<number, string>)}
        />
      );
    }
    return null;
  }, []);

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
          content={tooltipContent}
          allowEscapeViewBox={{ x: true, y: true }}
          cursor={false}
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