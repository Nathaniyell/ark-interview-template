import { DashboardNav } from "@/components/dashboard/dashboard-nav";
import { MetricsSection } from "@/components/dashboard/metrics-section";
import { HighlightsGrid } from "@/components/dashboard/highlights-grid";
import { Bell } from "lucide-react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col pb-[50px] lg:pb-0">
      <div className="relative w-full h-[185px] bg-white">
        <Image 
          src="/dashboard-assets/ark-users-dashbaord-slider.jpg"
          alt="hero image"
          fill
          priority
          className="object-fill"
          sizes="100vw"
        />
      </div>
      <div className=" m-[20px] lg:m-[38px] flex flex-col gap-[38px]">
      <DashboardNav />
        <div className="bg-[#272829] lg:h-[52px] p-[24px] rounded-[15px] flex-col lg:flex-row flex lg:items-center lg:justify-between gap-[24px] lg:gap-0">
          <h2 className="text-[20px] font-bold">
            Welcome to your dashboard David - you are highly favoured
          </h2>
          <div className="flex gap-4 items-center">
            <div className="relative">
              <Bell size={26} />
              <span className="w-2 h-2 rounded-full bg-[#4de209] absolute top-0 right-1"></span>
            </div>
            <div className="bg-[#4de209] rounded-full px-6 h-[31px] flex items-center justify-center text-black font-bold gap-2">
              <p className="">Create New Listing</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 512 512"><path fill="#000" d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v224c0 17.7 14.3 32 32 32s32-14.3 32-32zm-144.5 88.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"/></svg>
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
