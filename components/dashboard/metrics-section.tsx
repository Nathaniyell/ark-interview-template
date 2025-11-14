import { TotalRevenuesCard } from "./total-revenues-card";
import { TotalOrdersCard } from "./total-orders-card";
import { NewCustomersCard } from "./new-customers-card";
import { TotalProductsSoldCard } from "./total-products-sold-card";
import { SidebarNav } from "./sidebar-nav";
import { cn } from "@/lib/utils";
import MetricsChart from "./MetricsChart";

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

  const topProducts = [
    {
      id: "message-bible",
      title: "The Message: The Bible in Contemporary Language",
      subtitle: "Print · Religion & Spirituality",
      price: "$22.99",
      revenue: "$41,129",
      orders: "1,789",
      initials: "TM",
    },
    {
      id: "mysteries-parables",
      title:
        "John MacArthur - Parables: The Mysteries of God's Kingdom Revealed",
      subtitle: "Hardcover · Theology",
      price: "$14.99",
      revenue: "$18,722",
      orders: "1,249",
      initials: "JM",
    },
    {
      id: "cheerway-tv-stand",
      title: 'Cheerway 3D Fireplace TV Stand for TVs up to 65"',
      subtitle: "Home · Furniture",
      price: "$299.99",
      revenue: "$9,299",
      orders: "31",
      initials: "CF",
    },
    {
      id: "scottys-keto-mix",
      title: "Scotty's Keto Pancake & Waffle Mix - 0 Net Carbs",
      subtitle: "Grocery · Specialty Foods",
      price: "$33.99",
      revenue: "$5,336",
      orders: "157",
      initials: "SK",
    },
  ];

  const timeframes = ["Today", "Week", "Month", "Year"];

  const locationMetrics = [
    {
      country: "United States",
      revenue: "$51,397",
      orders: "2,056",
    },
    {
      country: "United Kingdom",
      revenue: "$17,281",
      orders: "691",
    },
    {
      country: "Canada",
      revenue: "$10,673",
      orders: "427",
    },
    {
      country: "Germany",
      revenue: "$7,864",
      orders: "315",
    },
    {
      country: "Australia",
      revenue: "$5,253",
      orders: "210",
    },
    {
      country: "South Africa",
      revenue: "$3,186",
      orders: "127",
    },
    {
      country: "France",
      revenue: "$2,941",
      orders: "114",
    },
    {
      country: "Brazil",
      revenue: "$2,508",
      orders: "98",
    },
  ];
  return (
    <div className="relative flex flex-row gap-4 lg:gap-[40px]">
      <SidebarNav />
      <div className="flex flex-col flex-1 gap-[40px]">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-[40px] items-stretch">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-[40px] flex-1 lg:max-w-2xl lg:h-fit">
            <TotalRevenuesCard />
            <TotalOrdersCard />
            <TotalProductsSoldCard />
            <NewCustomersCard />
          </div>
          <div className="bg-transparent rounded-[12px] border border-[#bfbfbf]/50 p-4 lg:p-6 text-white flex-1 flex flex-col gap-[15px] lg:h-[343px]">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-[50px] justify-between mb-4">
              <h2 className="text-lg lg:text-xl font-bold">
                Revenue Reports &gt; <span className="text-[#4de209]">2023</span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-[20px]">
                {visualizationData.map((data) => (
                  <div
                    key={data.title}
                    className="w-fit flex items-center gap-2 bg-[#272829] rounded-[8px] px-4 lg:px-2 py-2"
                  >
                    <div
                      className={cn(
                        "w-2 h-2 rounded-full flex-shrink-0",
                        data.title === "Orders"
                          ? "bg-[#4de209]/50"
                          : "bg-[#4de209]"
                      )}
                    ></div>
                    <div className="text-xs sm:text-sm flex items-center gap-1 lg:gap-2 flex-wrap">
                      <span className="text-white/70 font-medium">
                        {data.title}
                      </span>
                      <span className="font-bold text-base lg:text-lg text-white">
                        {data.amount}
                      </span>
                      <span className="text-[#4de209]">
                        ↑ {data.percentage}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 min-h-0">
             <MetricsChart />
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-[2fr_1fr] lg:gap-[40px] items-stretch">
          <div className="bg-transparent rounded-[12px] border border-[#bfbfbf]/50 text-white flex-1 flex flex-col lg:h-[350px] overflow-hidden">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between border-b-2 border-b-[#bfbfbf]/50 px-4 py-4 lg:px-6 lg:py-6">
              <h2 className="text-lg font-semibold">
                Top Products Sold &gt;{" "}
                <span className="font-semibold text-[#4de209]">March 2024</span>
              </h2>
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-[20px] w-full lg:w-auto">
                <p className="text-sm text-[#4de209] bg-[#272829] rounded-[5px] px-4 py-2 text-center lg:text-left">
                  Get Free $100 ARKai Ad Spend on Your Best Selling Products*
                </p>
                <ul className="flex items-center justify-between gap-[12px] text-sm">
                  {timeframes.map((label) => (
                    <li
                      key={label}
                      className={cn(
                        "rounded-[5px] px-3 py-1.5 min-w-[56px] text-center bg-transparent text-white/60 border border-transparent transition-colors",
                        label === "Month" && "bg-[#272829] text-white"
                      )}
                    >
                      {label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col flex-1 px-4 lg:px-6 mt-[40px] overflow-y-scroll">
              <div className="flex items-center text-xs uppercase tracking-[0.08em] text-white/60 px-4 font-semibold lg:px-6 py-3 bg-[#272829] h-[49px] rounded-[8px] gap-2">
                <span className="flex-1">Top Products</span>
                <span className="w-[80px] text-right">Price</span>
                <span className="w-[100px] text-right">Revenue</span>
                <span className="w-[80px] text-right">Orders</span>
              </div>
              <div className="flex-1 overflow-y-scroll mt-[20px]">
                {topProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center gap-4 py-4 border-b border-[#bfbfbf]/50 last:border-b-0"
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-24">
                      <div className="w-[50px] h-[50px] rounded-[8px] bg-[#272829] flex items-center justify-center text-sm font-semibold text-white/70">
                        {product.initials}
                      </div>
                      <div className="flex flex-col gap-1 min-w-0">
                        <span className="font-semibold text-sm lg:text-base text-white/60 truncate">
                          {product.title}
                        </span>
                      </div>
                    </div>
                    <span className="w-[80px] text-right text-sm font-medium text-white/60">
                      {product.price}
                    </span>
                    <span className="w-[100px] text-right text-sm font-medium text-white/60">
                      {product.revenue}
                    </span>
                    <span className="w-[80px] text-right text-sm font-semibold text-white/60">
                      {product.orders}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:h-[350px] rounded-[12px] border border-[#bfbfbf]/50 text-white flex flex-col overflow-hidden">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between px-4 py-4 lg:px-6 lg:py-6 border-b-2 border-[#bfbfbf]/50">
              <h2 className="text-lg font-semibold">
                Revenue &amp; Orders by Location &gt;{" "}
                <span className="text-[#4de209]">March 2024</span>
              </h2>
              <button className="w-full lg:w-auto rounded-[6px] bg-[#272829] text-[#4de209] text-sm font-semibold px-4 py-2">
                Try ARKai Ads
              </button>
            </div>
            <div className="flex flex-col flex-1 px-4 lg:px-6 mt-[32px] overflow-hidden">
              <div className="flex items-center text-xs uppercase tracking-[0.08em] text-white/60 font-semibold px-4 lg:px-6 py-3 bg-[#272829] h-[49px] rounded-[8px] gap-2">
                <span className="flex-1">Top Countries</span>
                <span className="w-[110px] text-right">Revenue</span>
                <span className="w-[90px] text-right">Orders</span>
              </div>
              <div className="flex-1 overflow-y-scroll mt-[30px] space-y-[20px]">
                {locationMetrics.map((location) => (
                  <div
                    key={location.country}
                    className="flex items-center gap-4 border-b border-[#bfbfbf]/50/60 pb-3 last:border-b-0 last:pb-0"
                  >
                    <span className="flex-1 text-sm font-semibold text-white/60 uppercase">
                      {location.country}
                    </span>
                    <span className="w-[110px] text-right text-sm font-medium text-white/60">
                      {location.revenue}
                    </span>
                    <span className="w-[90px] text-right text-sm font-medium text-white/60">
                      {location.orders}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
