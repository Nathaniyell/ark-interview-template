"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const MetricsChart = () => {
  const chartData = [
    { month: "Jan", sales: 0, orders: 0 },
    { month: "Feb", sales: 45000, orders: 2400 },
    { month: "Mar", sales: 120000, orders: 6000 },
    { month: "Apr", sales: 95000, orders: 5000 },
    { month: "May", sales: 180000, orders: 900 },
    { month: "Jun", sales: 220000, orders: 1200 },
    { month: "Jul", sales: 280000, orders: 1400 },
    { month: "Aug", sales: 350000, orders: 1700 },
    { month: "Sep", sales: 480000, orders: 2400 },
    { month: "Oct", sales: 650000, orders: 3300 },
    { month: "Nov", sales: 850000, orders: 4200 },
    { month: "Dec", sales: 1200000, orders: 6000 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={chartData}
        margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
      >
        {/* Remove vertical grid lines, keep only horizontal */}
        <CartesianGrid vertical={false} strokeWidth={2} stroke="#272829" />

        {/* X-Axis without pointers or axis line */}
        <XAxis
          dataKey="month"
          stroke="#ffffff80"
          tick={{ fill: "#ffffff80", fontSize: 14 }}
          axisLine={false}      // removes line
          tickLine={false}      // removes pointers
        />

        {/* Y-Axis with no vertical line and no pointers */}
        <YAxis
          stroke="#ffffff80"
          tick={{ fill: "#ffffff80", fontSize: 14 }}
          axisLine={false}      // no Y-axis line
          tickLine={false}      // no ticks
          tickFormatter={(value) => {
            if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
            if (value >= 1000) return `${(value / 1000).toFixed(0)}K`;
            return value.toString();
            
          }}
          domain={['auto', "auto"]}
        />

    {/* Right Y-axis for Orders */}
    <YAxis
      yAxisId="right"
      orientation="right"
      stroke="#ffffff80"
      tick={{ fill: "#ffffff80", fontSize: 14 }}
      axisLine={false}
      tickLine={false}
      domain={['auto', 'auto']}
    />

        {/* Tooltip: sales formatted as $, orders as plain numbers */}
        <Tooltip
          contentStyle={{
            backgroundColor: "#272829",
            border: "1px solid #272829",
            borderRadius: "8px",
            color: "#bfbfbf",
          }}
          labelStyle={{ color: "#bfbfbf" }}
          formatter={(value: number, name: string) => {
            // If the series is "orders", return plain number
            if (name === "Orders") return value;

            // Otherwise format sales as money
            if (value >= 1000000) return `$${(value / 1000000).toFixed(2)}M`;
            if (value >= 1000) return `$${(value / 1000).toFixed(0)}K`;
            return `$${value}`;
          }}
          
        />

        {/* Sales line */}
        <Line
          type="monotone"
          dataKey="sales"
          stroke="#4de209"
          strokeWidth={2}
          dot={false}
          name="Sales"
        />

        {/* Orders line (plain numbers, not $) */}
        <Line
          type="monotone"
          dataKey="orders"
          stroke="#4de209"
          strokeWidth={2}
          strokeOpacity={0.5}
          dot={false}
          name="Orders"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MetricsChart;
