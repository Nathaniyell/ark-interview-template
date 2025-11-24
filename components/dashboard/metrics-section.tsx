import { TotalRevenuesCard } from "./total-revenues-card";
import { TotalOrdersCard } from "./total-orders-card";
import { NewCustomersCard } from "./new-customers-card";
import { TotalProductsSoldCard } from "./total-products-sold-card";
import { SidebarNav } from "./sidebar-nav";
import { cn } from "@/lib/utils";
import MetricsChart from "./MetricsChart";
import { TopProductsTable } from "./top-products-table";
import { RevenueByLocationTable } from "./revenue-by-location-table";

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
                Revenue Reports &gt;{" "}
                <span className="text-[#4de209] cursor-pointer">2023</span>
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
          <TopProductsTable products={topProducts} />
          <RevenueByLocationTable locationMetrics={locationMetrics} />
        </div>
      </div>
    </div>
  );
};
