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
    <div className="relative flex flex-row gap-4 lg:gap-[38px]">
      <SidebarNav />
      <div className="flex flex-col flex-1 gap-[38px]">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-[38px] items-stretch">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-[38px] flex-1 lg:max-w-2xl">
            <TotalRevenuesCard />
            <TotalOrdersCard />
            <TotalProductsSoldCard />
            <NewCustomersCard />
          </div>
          <div className="bg-transparent rounded-[12px] border border-[#bfbfbf]/25 p-4 lg:p-6 text-white flex-1 flex flex-col gap-[19px] lg:h-full">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-[30px] justify-between mb-4">
              <h2 className="text-sm font-semibold">
                Revenue Reports &gt; <span className="text-[#4de209]">2023</span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-[20px]">
                {visualizationData.map((data) => (
                  <div
                    key={data.title}
                    className="w-fit flex items-center gap-2 bg-[#272829] rounded-[5px] px-4 lg:px-2 py-1"
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
                      <span className="text-[#d8d8d8] font-medium">
                        {data.title}
                      </span>
                      <span className="font-semibold text-white">
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
        <div className="grid lg:grid-cols-[2fr_1fr] lg:gap-[38px] items-stretch">
          <div className="bg-transparent rounded-[12px] border border-[#bfbfbf]/25 text-white flex-1 flex flex-col lg:h-[400px] overflow-hidden">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between border-b border-b-[#bfbfbf]/25 px-4 py-4 bg-r h-[49px]">
              <h2 className="text-sm font-semibold">
                Top Products Sold &gt;{" "}
                <span className="font-semibold text-[#4de209]">March 2024</span>
              </h2>
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-[20px] w-full lg:w-auto">
                <p className="text-sm text-[#4de209] bg-[#272829] rounded-[5px] px-2 py-1 text-center lg:text-left">
                  Get Free $100 ARKai Ad Spend on Your Best Selling Products*
                </p>
                <ul className="flex items-center justify-between gap-[12px] text-sm">
                  {timeframes.map((label) => (
                    <li
                      key={label}
                      className={cn(
                        "rounded-[5px] px-2 py-1 min-w-[56px] text-center bg-transparent text-white/60 border border-transparent transition-colors",
                        label === "Month" && "bg-[#272829] text-white"
                      )}
                    >
                      {label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col flex-1 px-4 mt-[29px] overflow-y-scroll">
              <div className="flex-1 overflow-y-scroll">
                <table className="w-full table-fixed">
                  <thead>
                    <tr className="text-xs uppercase tracking-[0.08em] text-white font-semibold bg-[#272829] h-[37px]">
                      <th className="text-left px-2 py-1 rounded-tl-[5px] rounded-bl-[5px] w-auto">Top Products</th>
                      <th className="text-right px-2 py-1 w-[80px]">Price</th>
                      <th className="text-right px-2 py-1 w-[100px]">Revenue</th>
                      <th className="text-right px-2 py-1 rounded-tr-[5px] rounded-br-[5px] w-[80px]">Orders</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topProducts.map((product) => (
                      <tr
                        key={product.id}
                        className="border-b border-[#bfbfbf]/25 last:border-b-0"
                      >
                        <td className="py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-[50px] h-[50px] rounded-[8px] bg-[#272829] flex items-center justify-center text-sm font-semibold text-white/70 flex-shrink-0">
                              {product.initials}
                            </div>
                            <div className="flex flex-col gap-1 min-w-0">
                              <span className="font-semibold text-sm lg:text-base text-white/60 truncate">
                                {product.title}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="text-right px-4 py-4 w-[80px] text-sm font-medium text-white/60">
                          {product.price}
                        </td>
                        <td className="text-right px-4 py-4 w-[100px] text-sm font-medium text-white/60">
                          {product.revenue}
                        </td>
                        <td className="text-right px-4 py-4 w-[80px] text-sm font-semibold text-white/60">
                          {product.orders}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="lg:h-[400px] rounded-[12px] border border-[#bfbfbf]/25 text-white flex flex-col overflow-hidden">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between px-4 py-4 border-b border-[#bfbfbf]/25 h-[49px]">
              <h2 className="text-sm font-semibold">
                Revenue &amp; Orders by Location &gt;{" "}
                <span className="text-[#4de209]">March 2024</span>
              </h2>
              <button className="w-full lg:w-auto rounded-[5px] bg-[#272829] text-[#4de209] text-sm px-3 py-1">
                Try ARKai Ads
              </button>
            </div>
            <div className="flex flex-col flex-1 px-4 mt-[29px] overflow-hidden">
              <div className="flex-1 overflow-y-scroll">
                <table className="w-full table-fixed">
                  <thead>
                    <tr className="text-xs uppercase tracking-[0.08em] text-white font-semibold bg-[#272829] h-[37px]">
                      <th className="text-left px-2 py-1 rounded-tl-[5px] rounded-bl-[5px] w-auto">Top Countries</th>
                      <th className="text-right px-2 py-1 w-[110px]">Revenue</th>
                      <th className="text-right px-2 py-1 rounded-tr-[5px] rounded-br-[5px] w-[90px]">Orders</th>
                    </tr>
                  </thead>
                  <tbody>
                    {locationMetrics.map((location) => (
                      <tr
                        key={location.country}
                        className="border-b border-[#bfbfbf]/25 last:border-b-0"
                      >
                        <td className="py-3 text-sm font-semibold text-white/60 uppercase">
                          {location.country}
                        </td>
                        <td className="text-right px-4 py-3 w-[110px] text-sm font-medium text-white/60">
                          {location.revenue}
                        </td>
                        <td className="text-right px-4 py-3 w-[90px] text-sm font-medium text-white/60">
                          {location.orders}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
