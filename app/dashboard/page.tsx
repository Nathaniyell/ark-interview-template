import { DashboardNav } from "@/components/dashboard/dashboard-nav";
import { MetricsSection } from "@/components/dashboard/metrics-section";
import { HighlightsGrid } from "@/components/dashboard/highlights-grid";
import { Bell, Power } from "lucide-react";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col pb-[50px] lg:pb-0">
      <div className="h-[185px] bg-white"></div>
      <div className=" m-[20px] lg:m-[50px] flex flex-col gap-[40px]">
      <DashboardNav />
        <div className="bg-[#272829] lg:h-[69px] p-[24px] rounded-[15px] flex-col lg:flex-row flex lg:items-center lg:justify-between gap-[24px] lg:gap-0">
          <h2 className="font-bold">
            Welcome to your dashboard David - you are highly favoured
          </h2>
          <div className="flex gap-4 items-center">
            <div className="relative">
              <Bell size={26} />
              <span className="w-2 h-2 rounded-full bg-[#4de209] absolute top-0 right-1"></span>
            </div>
            <div className="bg-[#4de209] rounded-full px-6 py-2 flex items-center justify-center text-black font-bold gap-2">
              <p className="">Create new listing</p>
              <Power size={18} className="font-bold" />
            </div>
          </div>
        </div>
        <MetricsSection />
        <HighlightsGrid />       
      </div>
    </div>
  );
};

export default Page;
