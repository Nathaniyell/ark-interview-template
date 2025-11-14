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

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={chartData}
        margin={{ top:9, right: 10, left: 10, bottom: 3 }}
      >
        <CartesianGrid vertical={false} strokeWidth={2} stroke="#272829" />

        <XAxis
          dataKey="month"
          stroke="#b0b3b8"
          tick={{ fill: "#b0b3b8", fontSize: 14 }}
          axisLine={false}
          tickLine={false}
          dy={10} // Reduced dy
          height={50} // Increased height
          interval={0} // Ensure all labels show
          padding={{ left: 0, right: 10 }} // Add padding to prevent overflow
        //   scale={"point"}
        />

        {/* Left Y-Axis for Sales (visible) */}
        <YAxis
          yAxisId="left"
          stroke="#b0b3b8"
          tick={{ fill: "#b0b3b8", fontSize: 14 }}
          axisLine={false}
          tickLine={false}
          tickFormatter={(value) => {
            if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
            if (value >= 1000) return `${(value / 1000).toFixed(0)}K`;
            return value.toString();
          }}
          domain={[0, 'auto']}
          dx={-15}
          width={70}
        />

        {/* Right Y-Axis for Orders (hidden labels) */}
        <YAxis
          yAxisId="right"
          orientation="right"
          stroke="transparent" // Hide the axis line
          tick={false} // Hide all ticks and labels
          axisLine={false}
          tickLine={false}
          domain={[0, 'auto']}
          width={0} // Take no space
        />

        <Tooltip
          contentStyle={{
            backgroundColor: "#272829",
            border: "1px solid #272829",
            borderRadius: "8px",
            color: "#bfbfbf",
          }}
          labelStyle={{ color: "#bfbfbf" }}
          formatter={(value: number, name: string) => {
            if (name === "Orders") return [value, "Orders"];
            
            if (value >= 1000000) return [`$${(value / 1000000).toFixed(2)}M`, "Sales"];
            if (value >= 1000) return [`$${(value / 1000).toFixed(0)}K`, "Sales"];
            return [`$${value}`, "Sales"];
          }}
        />

        {/* Sales line - uses left Y-axis */}
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="sales"
          stroke="#4de209"
          strokeWidth={2}
          dot={false}
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
          name="Orders"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MetricsChart;