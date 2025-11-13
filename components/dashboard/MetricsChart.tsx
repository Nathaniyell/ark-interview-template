"use client"
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
        { month: "Feb", sales: 45000, orders: 35000 },
        { month: "Mar", sales: 120000, orders: 90000 },
        { month: "Apr", sales: 95000, orders: 75000 },
        { month: "May", sales: 180000, orders: 140000 },
        { month: "Jun", sales: 220000, orders: 170000 },
        { month: "Jul", sales: 280000, orders: 220000 },
        { month: "Aug", sales: 350000, orders: 280000 },
        { month: "Sep", sales: 480000, orders: 380000 },
        { month: "Oct", sales: 650000, orders: 520000 },
        { month: "Nov", sales: 850000, orders: 680000 },
        { month: "Dec", sales: 1200000, orders: 900000 },
      ];
  return (
    <>
         <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                  <CartesianGrid vertical={false} strokeWidth={2} stroke="#272829" />
                  <XAxis
                    dataKey="month"
                    stroke="#ffffff80"
                    tick={{ fill: "#ffffff80", fontSize: 14 }}
                    axisLine={{ stroke: "#272829" }}
                  />
                  <YAxis
                    stroke="#ffffff80"
                    tick={{ fill: "#ffffff80", fontSize: 14 }}
                    axisLine={{ stroke: "#272829" }}
                    tickFormatter={(value) => {
                      if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
                      if (value >= 1000) return `${(value / 1000).toFixed(0)}K`;
                      return value.toString();
                    }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#272829",
                      border: "1px solid #272829",
                      borderRadius: "8px",
                      color: "#fff",
                    }}
                    labelStyle={{ color: "#fff" }}
                    formatter={(value: number) => {
                      if (value >= 1000000) return `$${(value / 1000000).toFixed(2)}M`;
                      if (value >= 1000) return `$${(value / 1000).toFixed(0)}K`;
                      return `$${value}`;
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="#4de209"
                    strokeWidth={2}
                    dot={false}
                    name="Sales"
                  />
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
    </>
  )
}

export default MetricsChart